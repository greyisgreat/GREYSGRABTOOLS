const crypto = require('crypto');

const SUPABASE = process.env.GRAB_SUPABASE_URL || 'https://ijmowerdujivlvqojroc.supabase.co';
const APIKEY = process.env.GRAB_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlqbW93ZXJkdWppdmx2cW9qcm9jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUyNjEzOTcsImV4cCI6MjA5MDgzNzM5N30.55W84VdH_BaYqdBMSole6LLNHETjvkV-iYad4bMJeP8';
const SECRET = process.env.LEVELGRABBER_SESSION_SECRET || 'levelgrabber-change-this-secret';

function validCookie(req) {
  const raw = req.headers.cookie || '';
  const m = raw.match(/(?:^|; )lg_session=([^;]+)/);
  if (!m) return false;
  const [encoded, sig] = decodeURIComponent(m[1]).split('.');
  if (!encoded || !sig) return false;
  let value;
  try { value = Buffer.from(encoded, 'base64url').toString('utf8'); } catch { return false; }
  if (!value.startsWith('levelgrabber:')) return false;
  const expected = crypto.createHmac('sha256', SECRET).update(value).digest('hex');
  return crypto.timingSafeEqual(Buffer.from(sig), Buffer.from(expected));
}

module.exports = async (req, res) => {
  if (!validCookie(req)) return res.status(401).json({ error: 'PIN required' });
  const params = new URLSearchParams(req.query || {});
  const target = `${SUPABASE}/functions/v1/grab-proxy?${params.toString()}`;
  try {
    const upstream = await fetch(target, { method: req.method || 'GET', headers: { apikey: APIKEY, Authorization: `Bearer ${APIKEY}` } });
    const contentType = upstream.headers.get('content-type');
    if (contentType) res.setHeader('Content-Type', contentType);
    const buffer = Buffer.from(await upstream.arrayBuffer());
    res.status(upstream.status).send(buffer);
  } catch (e) {
    res.status(502).json({ error: 'Upstream request failed' });
  }
};
