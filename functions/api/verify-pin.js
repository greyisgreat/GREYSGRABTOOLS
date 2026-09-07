const enc = new TextEncoder();
const b64 = (s) => btoa(unescape(encodeURIComponent(s))).replace(/=/g,'').replace(/\+/g,'-').replace(/\//g,'_');
async function hmac(value, secret) {
  const key = await crypto.subtle.importKey('raw', enc.encode(secret), {name:'HMAC',hash:'SHA-256'}, false, ['sign']);
  const buf = await crypto.subtle.sign('HMAC', key, enc.encode(value));
  return [...new Uint8Array(buf)].map(x=>x.toString(16).padStart(2,'0')).join('');
}
export async function onRequestPost({ request, env }) {
  const body = await request.json().catch(()=>({}));
  const pin = '0015';
  if (String(body.pin || '') !== pin) return Response.json({error:'Invalid PIN'}, {status:401});
  const value = `levelgrabber:${Date.now()}`;
  const token = `${b64(value)}.${await hmac(value, env.LEVELGRABBER_SESSION_SECRET || 'levelgrabber-change-this-secret')}`;
  return new Response(JSON.stringify({ok:true}), {status:200, headers:{'content-type':'application/json','set-cookie':`lg_session=${token}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=86400`}});
}
