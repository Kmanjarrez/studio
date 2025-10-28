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
  { day: 'Mon', consumption: 150 },
  { day: 'Tue', consumption: 165 },
  { day: 'Wed', consumption: 140 },
  { day: 'Thu', consumption: 170 },
  { day: 'Fri', consumption: 180 },
  { day: 'Sat', consumption: 210 },
  { day: 'Sun', consumption: 200 },
];

export const alerts = [
  {
    id: 1,
    type: 'warning',
    message: 'Potential leak detected. Unusual flow at 3 AM.',
    time: '2 hours ago',
  },
  {
    id: 2,
    type: 'info',
    message: 'High water usage today. Consider shorter showers.',
    time: '8 hours ago',
  },
   {
    id: 3,
    type: 'info',
    message: 'You have saved 15% water compared to last week!',
    time: '1 day ago',
  },
];
