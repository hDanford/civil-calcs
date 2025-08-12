export function $(sel, root=document){ return root.querySelector(sel); }
export function $all(sel, root=document){ return Array.from(root.querySelectorAll(sel)); }
export function show(el, v=true){ if(el) el.hidden = !v; }
export function fmt(x, d=4){
  if (x === null || x === undefined || !isFinite(x)) return '—';
  return Number(x).toLocaleString(undefined,{maximumFractionDigits:d});
}
export async function copy(text){ try{ await navigator.clipboard.writeText(text); alert('Copied to clipboard.'); }catch(e){ console.log(e); } }
export function on(id, evt, fn){ const el = (typeof id==='string')? document.getElementById(id): id; if(el) el.addEventListener(evt, fn); }
export function setResult(id, html){ const el = (typeof id==='string')? document.getElementById(id): id; if(el) el.innerHTML = html; }
