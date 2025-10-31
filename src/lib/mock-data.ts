export const dailyUsage = [
  { hour: '00', consumption: 5 },
  { hour: '01', consumption: 3 },
  { hour: '02', consumption: 2 },
  { hour: '03', consumption: 2.5 },
  { hour: '04', consumption: 3 },
  { hour: '05', consumption: 8 },
  { hour: '06', consumption: 15 },
  { hour: '07', consumption: 25 },
  { hour: '08', consumption: 30 },
  { hour: '09', consumption: 18 },
  { hour: '10', consumption: 12 },
  { hour: '11', consumption: 10 },
  { hour: '12', consumption: 14 },
  { hour: '13', consumption: 11 },
  { hour: '14', consumption: 9 },
  { hour: '15', consumption: 10 },
  { hour: '16', consumption: 12 },
  { hour: '17', consumption: 18 },
  { hour: '18', consumption: 24 },
  { hour: '19', consumption: 28 },
  { hour: '20', consumption: 22 },
  { hour: '21', consumption: 15 },
  { hour: '22', consumption: 10 },
  { hour: '23', consumption: 6 },
];

export const weeklyUsage = [
  { day: 'Lun', consumption: 150 },
  { day: 'Mar', consumption: 165 },
  { day: 'Mié', consumption: 140 },
  { day: 'Jue', consumption: 170 },
  { day: 'Vie', consumption: 180 },
  { day: 'Sáb', consumption: 210 },
  { day: 'Dom', consumption: 200 },
];

export const monthlyUsage = [
    { month: 'Ene', consumption: 4850 },
    { month: 'Feb', consumption: 4500 },
    { month: 'Mar', consumption: 5100 },
    { month: 'Abr', consumption: 4900 },
    { month: 'May', consumption: 5300 },
    { month: 'Jun', consumption: 5200 },
    { month: 'Jul', consumption: 5500 },
    { month: 'Ago', consumption: 5400 },
    { month: 'Sep', consumption: 5100 },
    { month: 'Oct', consumption: 4800 },
    { month: 'Nov', consumption: 4600 },
    { month: 'Dic', consumption: 4700 },
]

export const alerts = [
  {
    id: 1,
    type: 'warning',
    message: 'Posible fuga detectada. Flujo inusual a las 3 AM.',
    time: 'Hace 2 horas',
  },
  {
    id: 2,
    type: 'info',
    message: 'Alto consumo de agua hoy. Considera duchas más cortas.',
    time: 'Hace 8 horas',
  },
   {
    id: 3,
    type: 'info',
    message: '¡Has ahorrado un 15% de agua en comparación con la semana pasada!',
    time: 'Hace 1 día',
  },
];
