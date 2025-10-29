'use server';

import { generateWaterConservationTips } from '@/ai/flows/generate-water-conservation-tips';

export async function getConservationTips(historicalData: any[]): Promise<string> {
  try {
    const stringifiedData = JSON.stringify(historicalData, null, 2);
    const result = await generateWaterConservationTips({ historicalData: stringifiedData });
    return result.tips;
  } catch (error) {
    console.error('Error al generar consejos de conservación:', error);
    return 'Lo sentimos, no pudimos generar los consejos en este momento. Por favor, inténtalo de nuevo más tarde.';
  }
}
