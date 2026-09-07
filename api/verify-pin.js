const crypto = require('crypto');

const PIN = '0015';
const SECRET = process.env.LEVELGRABBER_SESSION_SECRET || 'levelgrabber-change-this-secret';

function sign(value) {
  return crypto.createHmac('sha256', SECRET).update(value).digest('hex');
}

module.exports = async (req, res) => {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});
    if (String(body.pin || '') !== PIN) return res.status(401).json({ error: 'Invalid PIN' });
    const value = `levelgrabber:${Date.now()}`;
    const token = `${Buffer.from(value).toString('base64url')}.${sign(value)}`;
    res.setHeader('Set-Cookie', `lg_session=${token}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=86400`);
    return res.status(200).json({ ok: true });
  } catch {
    return res.status(400).json({ error: 'Bad request' });
  }
};
