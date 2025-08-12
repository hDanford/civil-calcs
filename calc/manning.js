function coef(sys,n){ return (sys==='US') ? (1.486/n) : (1/n); }
export function Q_given_D(D,n,S,sys){
  if(!(D>0 && n>0 && S>0)) return NaN;
  const A = Math.PI*D*D/4;
  const R = D/4;
  return coef(sys,n)*A*Math.pow(R,2/3)*Math.sqrt(S);
}
export function solveD_for_Q(Q,n,S,sys){
  // bisection
  let lo=1e-6, hi=(sys==='US'? 20: 6);
  for(let k=0;k<80;k++){
    const mid = 0.5*(lo+hi);
    const qmid = Q_given_D(mid,n,S,sys);
    if (!isFinite(qmid)) return NaN;
    if (qmid>Q) hi=mid; else lo=mid;
    if (Math.abs(qmid-Q) <= Math.max(1e-10, Q*1e-6)) return mid;
  }
  return 0.5*(lo+hi);
}
export function excelQgivenD(sys){
  return (sys==='US')
   ? 'Q_cfs = (1.486/n) * (PI()*D^2/4) * ( (D/4)^(2/3) ) * ( S^(1/2) )\nExcel: =(1.486/N2)*(PI()*D2^2/4)*((D2/4)^(2/3))*(S2^(1/2))'
   : 'Q_m3s = (1/n) * (PI()*D^2/4) * ( (D/4)^(2/3) ) * ( S^(1/2) )\nExcel: =(1/N2)*(PI()*D2^2/4)*((D2/4)^(2/3))*(S2^(1/2))';
}
