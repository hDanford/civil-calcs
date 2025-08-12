export function rationalQ(sys, C, i, A){
  if(!(C>=0 && i>=0 && A>=0)) return NaN;
  return (sys==='US') ? (C*i*A) : (0.278*C*i*A);
}
export function excelTemplate(sys){
  return (sys==='US')
   ? 'Q_cfs = C * I_in_per_hr * A_acres\nExcel: =C2*I2*A2'
   : 'Q_m3s = 0.278 * C * I_mm_per_hr * A_ha\nExcel: =0.278*C2*I2*A2';
}
