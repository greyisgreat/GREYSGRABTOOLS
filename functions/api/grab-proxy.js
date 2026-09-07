const enc = new TextEncoder();
async function hmac(value, secret) {
  const key = await crypto.subtle.importKey('raw', enc.encode(secret), {name:'HMAC',hash:'SHA-256'}, false, ['sign']);
  const buf = await crypto.subtle.sign('HMAC', key, enc.encode(value));
  return [...new Uint8Array(buf)].map(x=>x.toString(16).padStart(2,'0')).join('');
}
function fromB64(s){ return decodeURIComponent(escape(atob(s.replace(/-/g,'+').replace(/_/g,'/')))); }
async function validCookie(request, secret) {
  const raw = request.headers.get('cookie') || '';
  const m = raw.match(/(?:^|; )lg_session=([^;]+)/); if(!m) return false;
  const [encoded,sig] = decodeURIComponent(m[1]).split('.'); if(!encoded || !sig) return false;
  let value; try { value=fromB64(encoded); } catch { return false; }
  if(!value.startsWith('levelgrabber:')) return false;
  return sig === await hmac(value, secret);
}
export async function onRequest({ request, env }) {
  if (!(await validCookie(request, env.LEVELGRABBER_SESSION_SECRET || 'levelgrabber-change-this-secret'))) return Response.json({error:'PIN required'}, {status:401});
  const url = new URL(request.url);
  const target = `${env.GRAB_SUPABASE_URL || 'https://ijmowerdujivlvqojroc.supabase.co'}/functions/v1/grab-proxy${url.search}`;
  const upstream = await fetch(target, {method: request.method, headers:{apikey:env.GRAB_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlqbW93ZXJkdWppdmx2cW9qcm9jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUyNjEzOTcsImV4cCI6MjA5MDgzNzM5N30.55W84VdH_BaYqdBMSole6LLNHETjvkV-iYad4bMJeP8',Authorization:`Bearer ${env.GRAB_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlqbW93ZXJkdWppdmx2cW9qcm9jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUyNjEzOTcsImV4cCI6MjA5MDgzNzM5N30.55W84VdH_BaYqdBMSole6LLNHETjvkV-iYad4bMJeP8'}`}});
  return new Response(upstream.body, {status:upstream.status, headers:{'content-type':upstream.headers.get('content-type') || 'application/octet-stream'}});
}
