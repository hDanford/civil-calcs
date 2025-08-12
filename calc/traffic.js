export function trafficCalc(A0,g,n,K,D,L){
  if(!(A0>0 && L>0 && K>0 && D>0)) return null;
  const Af = A0*Math.pow(1+g,n);
  const PHV = Af*K;
  const Dir = PHV*D;
  const PerLane = Dir/L;
  return {Af,PHV,Dir,PerLane};
}
export function excelTraffic(){
  return `Let A0=B2, g (decimal)=C2, n=D2, K=E2, D=F2, lanes=G2
Future AADT: =B2*(1+C2)^D2
PHV: =B2*(1+C2)^D2*E2
Directional: =B2*(1+C2)^D2*E2*F2
Per-lane: =(B2*(1+C2)^D2*E2*F2)/G2`;
}
