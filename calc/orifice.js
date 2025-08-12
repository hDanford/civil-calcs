export function orificeQ(sys,D,Cd,opts){
  if(!(D>0 && Cd>0)) return NaN;
  const A = Math.PI*D*D/4;
  const g = (sys==='US') ? 32.174 : 9.80665;
  let head = NaN;
  if(opts.mode==='free'){ head = opts.H; }
  else if(opts.mode==='sub'){ head = (opts.H1 - opts.H2); }
  if(!(head>=0)) return NaN;
  return Cd * A * Math.sqrt(2*g*head);
}
export function excelOrifice(){
  return 'Free: Q = Cd * (PI()*D^2/4) * SQRT(2*g*H)\nSubmerged: Q = Cd * (PI()*D^2/4) * SQRT(2*g*(H1-H2))\nExcel example: =Cd*(PI()*D2^2/4)*SQRT(2*g*H2)';
}
