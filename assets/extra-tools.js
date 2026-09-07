(() => {
  const KEY = 'greys_level_history_v1';
  const getHistory = () => { try { return JSON.parse(localStorage.getItem(KEY) || '[]'); } catch { return []; } };
  const saveHistory = (items) => localStorage.setItem(KEY, JSON.stringify(items.slice(0, 100)));
  const esc = (s) => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

  const parseLevel = (value) => {
    const v = String(value || '').trim();
    // Supports grabvr.quest level viewer links and plain user_id:iteration IDs.
    try {
      const u = new URL(v);
      const level = u.searchParams.get('level');
      if (level && /^[a-zA-Z0-9_-]+:\d+$/.test(level)) return level;
      const id = u.searchParams.get('id');
      const iteration = u.searchParams.get('iteration');
      if (id && iteration) return `${id}:${iteration}`;
    } catch {}
    if (/^[a-zA-Z0-9_-]+:\d+$/.test(v)) return v;
    return null;
  };

  const addHistory = async (id) => {
    const parsed = parseLevel(id); if (!parsed) return;
    const [userId, iteration] = parsed.split(':');
    let details = null;
    try { details = await fetch(`/api/grab-proxy?action=details&user_id=${encodeURIComponent(userId)}&iteration=${encodeURIComponent(iteration)}`).then(r => r.ok ? r.json() : null); } catch {}
    const items = getHistory().filter(x => !(x.userId === userId && String(x.iteration) === String(iteration)));
    items.unshift({ userId, iteration, title: details?.title || details?.name || `Level ${userId}`, creator: details?.creator_name || details?.username || details?.author || '', version: details?.version || details?.iteration || '', downloadedAt: new Date().toISOString() });
    saveHistory(items); renderHistory();
  };

  const oldFetch = window.fetch;
  window.fetch = async (...args) => {
    const response = await oldFetch(...args);
    try {
      const url = typeof args[0] === 'string' ? args[0] : args[0]?.url || '';
      if (url.includes('/api/grab-proxy?action=download') && response.ok) {
        const u = new URL(url, location.origin);
        const id = `${u.searchParams.get('user_id')}:${u.searchParams.get('iteration')}`;
        addHistory(id);
      }
    } catch {}
    return response;
  };

  // ---------------------------------------------------------------------
  // Shared UI shell — styled to echo GRAB Tools' own look (rounded cards,
  // Nunito/JetBrains Mono pairing, generous radii) in a readable grey theme.
  // ---------------------------------------------------------------------

  let panel, backdrop;
  const scriptCache = {};
  const loadScriptOnce = (src) => {
    if (scriptCache[src]) return scriptCache[src];
    scriptCache[src] = new Promise((resolve, reject) => {
      const s = document.createElement('script');
      s.src = src;
      s.onload = () => resolve();
      s.onerror = () => reject(new Error(`Failed to load ${src}`));
      document.body.appendChild(s);
    });
    return scriptCache[src];
  };

  const saveTextFile = (text, filename, mime) => {
    const blob = new Blob([text], { type: mime });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = filename; a.click();
    setTimeout(() => URL.revokeObjectURL(url), 4000);
  };

  const ensureUI = () => {
    if (panel) return;
    const style = document.createElement('style');
    style.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap');
      :root{filter:grayscale(1)}

      .grey-tool-fab{position:fixed;right:22px;bottom:22px;z-index:99990;display:flex;flex-wrap:wrap;justify-content:flex-end;gap:8px;max-width:min(94vw,520px);padding:8px;border:1px solid #444;background:rgba(15,15,15,.94);backdrop-filter:blur(18px);border-radius:18px;box-shadow:0 18px 60px #000}
      .grey-tool-btn{border:1px solid #4a4a4a;background:#232323;color:#f2f2f2;border-radius:12px;padding:10px 14px;font:600 12px CameraPlainVariable,'Nunito',system-ui;cursor:pointer;transition:.16s;display:flex;align-items:center;gap:7px;white-space:nowrap}
      .grey-tool-btn:hover{background:#323232;border-color:#666;transform:translateY(-1px)}
      .grey-tool-btn-icon{font-size:14px;line-height:1}

      .grey-tool-backdrop{position:fixed;inset:0;z-index:99998;background:rgba(0,0,0,.74);backdrop-filter:blur(6px)}
      .grey-tool-panel{position:fixed;z-index:99999;left:50%;top:50%;transform:translate(-50%,-50%);width:min(880px,calc(100vw - 28px));max-height:min(860px,calc(100vh - 40px));overflow:auto;background:#1a1a1a;color:#f0f0f0;border:1px solid #454545;border-radius:22px;box-shadow:0 30px 100px #000;font-family:'Nunito',CameraPlainVariable,system-ui}

      .grey-tool-head{position:sticky;top:0;background:rgba(26,26,26,.97);backdrop-filter:blur(14px);padding:20px 22px;border-bottom:1px solid #3a3a3a;display:flex;justify-content:space-between;align-items:center;gap:12px}
      .grey-tool-title{font-size:21px;font-weight:750;letter-spacing:-.02em;color:#ffffff}
      .grey-tool-sub{font-size:12.5px;color:#b3b3b3;margin-top:4px;line-height:1.4}
      .grey-tool-close{border:1px solid #444;background:#2a2a2a;color:#eee;border-radius:10px;width:34px;height:34px;cursor:pointer;font-size:18px;flex-shrink:0}
      .grey-tool-close:hover{background:#3a3a3a}
      .grey-tool-body{padding:22px}

      .grey-tool-section{margin-bottom:18px}
      .grey-tool-section:last-child{margin-bottom:0}
      .grey-tool-section-title{font-weight:700;font-size:13px;text-transform:uppercase;letter-spacing:.05em;color:#c9c9c9;margin-bottom:10px}

      .grey-tool-field{margin-bottom:12px}
      .grey-tool-field:last-child{margin-bottom:0}
      .grey-tool-field-label{display:block;font-size:12.5px;color:#c2c2c2;margin-bottom:6px;font-weight:600}

      .grey-tool-input,.grey-tool-select,.grey-tool-textarea{width:100%;box-sizing:border-box;background:#242424;color:#f5f5f5;border:1.5px solid #4a4a4a;border-radius:12px;padding:12px 13px;outline:none;font:500 14px 'Nunito',CameraPlainVariable,system-ui}
      .grey-tool-input:focus,.grey-tool-select:focus,.grey-tool-textarea:focus{border-color:#b0b0b0;background:#282828}
      .grey-tool-textarea{font-family:'JetBrains Mono',Menlo,Consolas,monospace;font-size:12.5px;line-height:1.55;min-height:280px;resize:vertical;white-space:pre;overflow:auto}
      .grey-tool-select{cursor:pointer}
      .grey-tool-row-inline{display:flex;gap:10px;flex-wrap:wrap}
      .grey-tool-row-inline > *{flex:1;min-width:150px}

      .grey-tool-check{display:flex;align-items:center;gap:10px;padding:11px 13px;background:#242424;border:1.5px solid #3f3f3f;border-radius:12px;cursor:pointer;font-size:13.5px;color:#e6e6e6;user-select:none}
      .grey-tool-check input{width:16px;height:16px;accent-color:#e6e6e6;cursor:pointer}

      .grey-tool-primary{margin-top:4px;border:1.5px solid #f0f0f0;background:#f0f0f0;color:#111;border-radius:12px;padding:12px 16px;font-weight:750;font-size:14px;cursor:pointer;width:100%}
      .grey-tool-primary:hover{background:#fff}
      .grey-tool-primary:disabled{opacity:.45;cursor:not-allowed}
      .grey-tool-secondary{border:1.5px solid #555;background:#262626;color:#eee;border-radius:12px;padding:10px 14px;font-weight:650;font-size:13px;cursor:pointer}
      .grey-tool-secondary:hover{background:#333;border-color:#777}
      .grey-tool-secondary:disabled{opacity:.45;cursor:not-allowed}
      .grey-tool-danger{border:1px solid #555;background:#242424;color:#e6e6e6;border-radius:10px;padding:9px 12px;cursor:pointer;font-size:12.5px}
      .grey-tool-danger:hover{background:#333}

      .grey-tool-card{background:#212121;border:1px solid #3c3c3c;border-radius:16px;padding:15px}
      .grey-tool-card + .grey-tool-card{margin-top:10px}
      .grey-tool-row{display:flex;justify-content:space-between;gap:16px;padding:8px 0;border-bottom:1px solid #333}
      .grey-tool-row:last-child{border-bottom:0}
      .grey-tool-label{color:#a8a8a8;text-transform:capitalize;font-size:13px}
      .grey-tool-value{text-align:right;word-break:break-word;color:#f0f0f0;font-size:13px}
      .grey-tool-empty{padding:38px 8px;text-align:center;color:#a0a0a0;font-size:13.5px;line-height:1.6}
      .grey-tool-mini{font-size:11.5px;color:#a3a3a3;margin-top:8px;line-height:1.5}
      .grey-tool-thumb{width:100%;max-height:300px;object-fit:cover;display:block;border-radius:14px;border:1px solid #3c3c3c;background:#0d0d0d;margin-bottom:14px}
      .grey-tool-statgrid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}
      .grey-tool-stat{background:#1c1c1c;border:1px solid #383838;border-radius:12px;padding:12px}
      .grey-tool-stat b{display:block;font-size:16px;color:#fff}
      .grey-tool-stat span{display:block;color:#a3a3a3;font-size:11px;margin-top:3px}
      .grey-tool-error{color:#ffdede;background:#2a1c1c!important;border-color:#5c3a3a!important}
      .grey-tool-success{color:#dfffe4;background:#1c2a1f!important;border-color:#3a5c40!important}
      .grey-tool-link{color:#f0f0f0;text-decoration:underline;text-underline-offset:3px}
      .grey-tool-actions{display:flex;gap:10px;flex-wrap:wrap;margin-top:12px}
      .grey-tool-actions > .grey-tool-primary{width:auto;flex:1;min-width:160px}

      @media(max-width:600px){
        .grey-tool-statgrid{grid-template-columns:1fr}
        .grey-tool-row{flex-direction:column;gap:4px}
        .grey-tool-value{text-align:left}
        .grey-tool-row-inline > *{min-width:100%}
        .grey-tool-fab{right:12px;bottom:12px}
      }
    `;
    document.head.appendChild(style);
    const fab = document.createElement('div'); fab.className='grey-tool-fab';
    fab.innerHTML=`
      <button class="grey-tool-btn" data-grey="history"><span class="grey-tool-btn-icon">&#8635;</span>History</button>
      <button class="grey-tool-btn" data-grey="inspector"><span class="grey-tool-btn-icon">&#8981;</span>Inspector</button>
      <button class="grey-tool-btn" data-grey="midi2grab"><span class="grey-tool-btn-icon">&#9834;</span>MIDI2GRAB</button>
      <button class="grey-tool-btn" data-grey="jsoneditor"><span class="grey-tool-btn-icon">{ }</span>JSON Editor</button>
    `;
    document.body.appendChild(fab);
    backdrop=document.createElement('div'); backdrop.className='grey-tool-backdrop'; backdrop.hidden=true; document.body.appendChild(backdrop);
    panel=document.createElement('div'); panel.className='grey-tool-panel'; panel.hidden=true; document.body.appendChild(panel);
    backdrop.onclick=closePanel;
    fab.querySelector('[data-grey="history"]').onclick=showHistory;
    fab.querySelector('[data-grey="inspector"]').onclick=showInspector;
    fab.querySelector('[data-grey="midi2grab"]').onclick=showMidi2Grab;
    fab.querySelector('[data-grey="jsoneditor"]').onclick=showJsonEditor;
    document.addEventListener('keydown', e => { if(e.key==='Escape') closePanel(); });
  };
  const openPanel=(title,sub,body)=>{ensureUI();panel.innerHTML=`<div class="grey-tool-head"><div><div class="grey-tool-title">${title}</div><div class="grey-tool-sub">${sub}</div></div><button class="grey-tool-close">×</button></div><div class="grey-tool-body">${body}</div>`;panel.hidden=false;backdrop.hidden=false;panel.querySelector('.grey-tool-close').onclick=closePanel;};
  const closePanel=()=>{if(panel){panel.hidden=true;backdrop.hidden=true;}};

  const showHistory=()=>{const items=getHistory();openPanel('Download history','Saved locally on this device', items.length ? `<div>${items.map(x=>`<div class="grey-tool-card"><div style="display:flex;justify-content:space-between;gap:10px"><b>${esc(x.title)}</b><span style="color:#a3a3a3;font-size:11px">${new Date(x.downloadedAt).toLocaleString()}</span></div><div class="grey-tool-mini">${esc(x.creator || 'Unknown creator')} · ${esc(x.userId)}:${esc(x.iteration)}${x.version ? ` · v${esc(x.version)}` : ''}</div></div>`).join('')}</div><button class="grey-tool-danger" style="margin-top:14px" data-clear-history>Clear history</button>` : '<div class="grey-tool-empty">No downloads yet.<br><span class="grey-tool-mini">Completed downloads will appear here automatically.</span></div>'); panel.querySelector('[data-clear-history]')?.addEventListener('click',()=>{saveHistory([]);showHistory();});};
  const renderHistory = () => { if (panel && !panel.hidden && panel.querySelector('[data-clear-history]') !== undefined && panel.innerHTML.includes('Download history')) showHistory(); };

  const findImageUrl = (obj) => {
    const seen = new Set(); let found = null;
    const walk = (v, key='') => {
      if(found || v == null) return;
      if(typeof v === 'string') { if(/^https?:\/\//i.test(v) && (/(thumb|image|preview|cover|banner|screenshot)/i.test(key) || /\.(png|jpe?g|webp|gif)(\?|$)/i.test(v))) found=v; return; }
      if(typeof v !== 'object' || seen.has(v)) return; seen.add(v);
      for(const [k,val] of Object.entries(v)) walk(val,k);
    };
    walk(obj); return found;
  };
  const pick = (d, keys) => { for(const k of keys){ if(d?.[k] != null && d[k] !== '') return d[k]; } return null; };
  const renderDetails = (d, id) => {
    const title=pick(d,['title','name']) || `Level ${id}`;
    const creator=pick(d,['creator_name','username','author','creator']) || 'Unknown';
    const thumb=pick(d,['thumbnail_url','thumbnail','image_url','image','preview_url','cover_url','cover']) || findImageUrl(d);
    const stats=[['Creator',creator],['Level ID',id],['Version',pick(d,['version','iteration']) || '—'],['Objects',pick(d,['object_count','objects','objectCount']) || '—'],['Plays',pick(d,['plays','play_count','playCount','downloads']) || '—'],['Likes',pick(d,['likes','like_count','likeCount']) || '—'],['Rating',pick(d,['rating','score']) || '—'],['Updated',pick(d,['updated_at','updatedAt','modified_at']) || '—']];
    const ignored=new Set(['raw','data','thumbnail_url','thumbnail','image_url','image','preview_url','cover_url','cover']);
    const extras=Object.entries(d || {}).filter(([k])=>!ignored.has(k) && !['title','name','creator_name','username','author','creator','version','iteration','object_count','objects','objectCount','plays','play_count','playCount','downloads','likes','like_count','likeCount','rating','score','updated_at','updatedAt','modified_at'].includes(k));
    return `<div class="grey-tool-card"><h3 style="margin:0 0 12px;font-size:18px;color:#fff">${esc(title)}</h3>${thumb?`<img class="grey-tool-thumb" src="${esc(thumb)}" alt="Level thumbnail" referrerpolicy="no-referrer" onerror="this.style.display='none'">`:''}<div class="grey-tool-statgrid">${stats.map(([k,v])=>`<div class="grey-tool-stat"><b>${esc(typeof v==='object'?JSON.stringify(v):v)}</b><span>${esc(k)}</span></div>`).join('')}</div></div>${extras.length?`<div class="grey-tool-card"><b style="color:#fff">More metadata</b>${extras.map(([k,v])=>`<div class="grey-tool-row"><span class="grey-tool-label">${esc(k.replace(/_/g,' '))}</span><span class="grey-tool-value">${esc(typeof v==='object'?JSON.stringify(v):v)}</span></div>`).join('')}</div>`:''}`;
  };
  const showInspector=()=>{openPanel('Level inspector','Paste a GRAB level link — thumbnail, stats and metadata will be shown here.',`<input id="grey-inspect-id" class="grey-tool-input" placeholder="Paste GRAB level link or user_id:iteration" autocomplete="off"><button id="grey-inspect-go" class="grey-tool-primary" style="margin-top:10px">Inspect level</button><div id="grey-inspect-result" style="margin-top:12px"></div>`);const input=panel.querySelector('#grey-inspect-id'),go=panel.querySelector('#grey-inspect-go'),out=panel.querySelector('#grey-inspect-result');const run=async()=>{const id=parseLevel(input.value);if(!id){out.innerHTML='<div class="grey-tool-card grey-tool-error">That doesn’t look like a valid GRAB level link. Use a link containing <b>?level=user_id:iteration</b>, or enter <b>user_id:iteration</b>.</div>';return;}const [userId,iteration]=id.split(':');go.disabled=true;go.textContent='Inspecting…';out.innerHTML='<div class="grey-tool-empty">Loading level information…</div>';try{const r=await fetch(`/api/grab-proxy?action=details&user_id=${encodeURIComponent(userId)}&iteration=${encodeURIComponent(iteration)}`);const d=await r.json();if(!r.ok)throw new Error(d.error||'Level not found');out.innerHTML=renderDetails(d,id);}catch(e){out.innerHTML=`<div class="grey-tool-card grey-tool-error">${esc(e.message)}</div>`;}finally{go.disabled=false;go.textContent='Inspect level';}};go.onclick=run;input.onkeydown=e=>{if(e.key==='Enter')run();};};

  // ---------------------------------------------------------------------
  // MIDI2GRAB — ported from GRAB Tools' MIDI importer: turns a .mid file
  // into a playable .level made of sound blocks + triggers.
  // ---------------------------------------------------------------------
  const showMidi2Grab = () => {
    openPanel(
      'MIDI2GRAB',
      'Turn a MIDI file into a playable GRAB level of sound blocks and triggers.',
      `
      <div class="grey-tool-field">
        <label class="grey-tool-field-label">MIDI file (.mid / .midi)</label>
        <input id="m2g-file" class="grey-tool-input" type="file" accept=".mid,.midi">
      </div>
      <div class="grey-tool-field">
        <label class="grey-tool-field-label">Instrument</label>
        <select id="m2g-instrument" class="grey-tool-select">
          <option value="Auto Instrument" selected>Auto Instrument</option>
          <option value="Sine (Classic)">Sine (Classic)</option>
          <option value="Saw (Classic)">Saw (Classic)</option>
          <option value="Square (Classic)">Square (Classic)</option>
        </select>
      </div>
      <div class="grey-tool-row-inline grey-tool-field">
        <label class="grey-tool-check"><input id="m2g-start-active" type="checkbox" checked> Start active</label>
        <label class="grey-tool-check"><input id="m2g-loop" type="checkbox" checked> Loop</label>
      </div>
      <div class="grey-tool-row-inline grey-tool-field">
        <div>
          <label class="grey-tool-field-label">Volume (0–100)</label>
          <input id="m2g-volume" class="grey-tool-input" type="number" min="0" max="100" value="40">
        </div>
        <div>
          <label class="grey-tool-field-label">Speed multiplier</label>
          <input id="m2g-speed" class="grey-tool-input" type="number" min="0.01" step="0.1" value="1">
        </div>
      </div>
      <div class="grey-tool-mini">Don't have a MIDI file? Download some <a class="grey-tool-link" href="https://onlinesequencer.net/sequences" target="_blank" rel="noopener">here</a>.</div>
      <button id="m2g-go" class="grey-tool-primary" style="margin-top:14px">Generate .level</button>
      <div id="m2g-result" style="margin-top:12px"></div>
      `
    );
    const fileInput = panel.querySelector('#m2g-file');
    const go = panel.querySelector('#m2g-go');
    const out = panel.querySelector('#m2g-result');
    go.onclick = async () => {
      const file = fileInput.files?.[0];
      if (!file) { out.innerHTML = '<div class="grey-tool-card grey-tool-error">Choose a MIDI file first.</div>'; return; }
      const startActive = panel.querySelector('#m2g-start-active').checked;
      const loop = panel.querySelector('#m2g-loop').checked;
      if (startActive && !loop) { out.innerHTML = '<div class="grey-tool-card grey-tool-error">A level can\'t start active without looping — enable Loop too.</div>'; return; }
      go.disabled = true; go.textContent = 'Generating…';
      out.innerHTML = '<div class="grey-tool-empty">Loading the converter…</div>';
      try {
        if (!window.MIDI2GRAB) await loadScriptOnce('assets/midi2grab-bundle.js');
        out.innerHTML = '<div class="grey-tool-empty">Parsing MIDI and building level nodes…</div>';
        const opts = {
          instrument: panel.querySelector('#m2g-instrument').value,
          startActive,
          loop,
          volume: parseInt(panel.querySelector('#m2g-volume').value, 10) || 40,
          speed: parseFloat(panel.querySelector('#m2g-speed').value) || 1,
        };
        const result = await window.MIDI2GRAB.generate(file, opts);
        if (!result) { out.innerHTML = '<div class="grey-tool-card grey-tool-error">Could not generate a level from that file — check it\'s a valid MIDI file.</div>'; return; }
        const name = file.name.replace(/\.(mid|midi)$/i, '') || 'midi-level';
        window.MIDI2GRAB.download(result.encoded, name);
        out.innerHTML = `<div class="grey-tool-card grey-tool-success"><b>Downloaded ${esc(name)}.level</b><div class="grey-tool-mini" style="color:#dfffe4cc">${result.level.levelNodes.length} level nodes generated.</div></div>`;
      } catch (e) {
        out.innerHTML = `<div class="grey-tool-card grey-tool-error">${esc(e.message || 'Something went wrong.')}</div>`;
      } finally {
        go.disabled = false; go.textContent = 'Generate .level';
      }
    };
  };

  // ---------------------------------------------------------------------
  // JSON level editor — decode a .level to editable JSON and back, plus a
  // quick batch convert for multiple files at once.
  // ---------------------------------------------------------------------
  const showJsonEditor = () => {
    openPanel(
      'JSON level editor',
      'Decode a .level file into editable JSON, edit it, then re-encode it back into a .level file.',
      `
      <div class="grey-tool-section">
        <div class="grey-tool-field">
          <label class="grey-tool-field-label">Open a .level or .json file to edit</label>
          <input id="lje-file" class="grey-tool-input" type="file" accept=".level,.json">
        </div>
        <textarea id="lje-editor" class="grey-tool-textarea" placeholder="Open a file above, or paste level JSON here…" spellcheck="false"></textarea>
        <div id="lje-status" style="margin-top:10px"></div>
        <div class="grey-tool-actions">
          <button id="lje-format" class="grey-tool-secondary">Format / validate</button>
          <button id="lje-save-json" class="grey-tool-secondary">Download as .json</button>
          <button id="lje-save-level" class="grey-tool-primary">Download as .level</button>
        </div>
      </div>
      <div class="grey-tool-section">
        <div class="grey-tool-section-title">Batch convert</div>
        <div class="grey-tool-field">
          <input id="lje-batch-file" class="grey-tool-input" type="file" accept=".level,.json" multiple>
        </div>
        <button id="lje-batch-go" class="grey-tool-secondary">Convert all (.level ⇄ .json)</button>
        <div id="lje-batch-result" style="margin-top:10px"></div>
      </div>
      `
    );
    let currentName = 'level';
    const fileInput = panel.querySelector('#lje-file');
    const editor = panel.querySelector('#lje-editor');
    const status = panel.querySelector('#lje-status');
    const formatBtn = panel.querySelector('#lje-format');
    const saveJsonBtn = panel.querySelector('#lje-save-json');
    const saveLevelBtn = panel.querySelector('#lje-save-level');
    const batchInput = panel.querySelector('#lje-batch-file');
    const batchGo = panel.querySelector('#lje-batch-go');
    const batchOut = panel.querySelector('#lje-batch-result');

    const setStatus = (html) => { status.innerHTML = html; };

    const ensureLoaded = async () => { if (!window.LEVELJSON) await loadScriptOnce('assets/leveljson-bundle.js'); };

    fileInput.onchange = async () => {
      const file = fileInput.files?.[0];
      if (!file) return;
      currentName = file.name.replace(/\.(level|json)$/i, '') || 'level';
      setStatus('<div class="grey-tool-empty">Loading file…</div>');
      try {
        if (file.name.toLowerCase().endsWith('.level')) {
          await ensureLoaded();
          const json = await window.LEVELJSON.decodeLevel(file);
          if (!json) { setStatus('<div class="grey-tool-card grey-tool-error">Could not decode that .level file.</div>'); return; }
          editor.value = JSON.stringify(json, null, 2);
          setStatus(`<div class="grey-tool-card grey-tool-success">Decoded <b>${esc(file.name)}</b> — ${json.levelNodes?.length ?? 0} nodes.</div>`);
        } else {
          const text = await file.text();
          try {
            editor.value = JSON.stringify(JSON.parse(text), null, 2);
            setStatus(`<div class="grey-tool-card grey-tool-success">Loaded <b>${esc(file.name)}</b>.</div>`);
          } catch {
            editor.value = text;
            setStatus('<div class="grey-tool-card grey-tool-error">That file isn\'t valid JSON — shown as-is, fix it before encoding.</div>');
          }
        }
      } catch (e) {
        setStatus(`<div class="grey-tool-card grey-tool-error">${esc(e.message || 'Failed to load file.')}</div>`);
      }
    };

    formatBtn.onclick = () => {
      try {
        editor.value = JSON.stringify(JSON.parse(editor.value || '{}'), null, 2);
        setStatus('<div class="grey-tool-card grey-tool-success">Valid JSON.</div>');
      } catch (e) {
        setStatus(`<div class="grey-tool-card grey-tool-error">Invalid JSON: ${esc(e.message)}</div>`);
      }
    };

    saveJsonBtn.onclick = () => {
      try {
        const pretty = JSON.stringify(JSON.parse(editor.value || '{}'), null, 2);
        saveTextFile(pretty, `${currentName}.json`, 'application/json');
      } catch (e) {
        setStatus(`<div class="grey-tool-card grey-tool-error">Invalid JSON: ${esc(e.message)}</div>`);
      }
    };

    saveLevelBtn.onclick = async () => {
      let obj;
      try { obj = JSON.parse(editor.value || '{}'); }
      catch (e) { setStatus(`<div class="grey-tool-card grey-tool-error">Invalid JSON: ${esc(e.message)}</div>`); return; }
      saveLevelBtn.disabled = true; saveLevelBtn.textContent = 'Encoding…';
      setStatus('<div class="grey-tool-empty">Encoding level…</div>');
      try {
        await ensureLoaded();
        const encoded = await window.LEVELJSON.encodeLevel(obj);
        if (encoded === null) { setStatus('<div class="grey-tool-card grey-tool-error">This JSON isn\'t a valid level — check the fields against a real level export.</div>'); return; }
        window.LEVELJSON.downloadLevel(encoded, currentName);
        setStatus(`<div class="grey-tool-card grey-tool-success">Downloaded <b>${esc(currentName)}.level</b>.</div>`);
      } catch (e) {
        setStatus(`<div class="grey-tool-card grey-tool-error">${esc(e.message || 'Failed to encode level.')}</div>`);
      } finally {
        saveLevelBtn.disabled = false; saveLevelBtn.textContent = 'Download as .level';
      }
    };

    batchGo.onclick = async () => {
      const files = Array.from(batchInput.files || []);
      if (!files.length) { batchOut.innerHTML = '<div class="grey-tool-card grey-tool-error">Choose one or more .level / .json files.</div>'; return; }
      batchGo.disabled = true; batchGo.textContent = 'Converting…';
      batchOut.innerHTML = '<div class="grey-tool-empty">Converting files…</div>';
      try {
        await ensureLoaded();
        const results = [];
        for (const file of files) {
          try {
            const r = await window.LEVELJSON.convert(file);
            results.push(r ? `<div class="grey-tool-row"><span class="grey-tool-label">${esc(file.name)}</span><span class="grey-tool-value">→ ${esc(r.name)}.${r.kind === 'level' ? 'level' : 'json'}</span></div>` : `<div class="grey-tool-row"><span class="grey-tool-label">${esc(file.name)}</span><span class="grey-tool-value">skipped</span></div>`);
          } catch (e) {
            results.push(`<div class="grey-tool-row"><span class="grey-tool-label">${esc(file.name)}</span><span class="grey-tool-value">error: ${esc(e.message)}</span></div>`);
          }
        }
        batchOut.innerHTML = `<div class="grey-tool-card">${results.join('')}</div>`;
      } finally {
        batchGo.disabled = false; batchGo.textContent = 'Convert all (.level ⇄ .json)';
      }
    };
  };

  const boot=()=>ensureUI(); if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot);else boot();
})();
