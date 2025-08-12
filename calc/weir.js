export function weirQ(sys,b,H,Cd=0.62){
  if(!(b>0 && H>=0 && Cd>0)) return NaN;
  const g = (sys==='US') ? 32.174 : 9.80665; // ft/s2 or m/s2
  // Q = Cd * (2/3) * b * sqrt(2 g) * H^(3/2)
  return Cd*(2/3)*b*Math.sqrt(2*g)*Math.pow(H,1.5);
}
export function excelWeir(){
  return 'Q = Cd*(2/3)*b*SQRT(2*g)*H^(3/2)\n(Define g=32.174 ft/s^2 or 9.80665 m/s^2)\nExcel: =Cd*(2/3)*B2*SQRT(2*g)*H2^(1.5)';
}
