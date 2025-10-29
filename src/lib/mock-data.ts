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
    { week: 'Sem 1', consumption: 1200 },
    { week: 'Sem 2', consumption: 1350 },
    { week: 'Sem 3', consumption: 1100 },
    { week: 'Sem 4', consumption: 1400 },
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
