'use server';

import { generateWaterConservationTips } from '@/ai/flows/generate-water-conservation-tips';

export async function getConservationTips(historicalData: any[]): Promise<string> {
  try {
    const stringifiedData = JSON.stringify(historicalData, null, 2);
    const result = await generateWaterConservationTips({ historicalData: stringifiedData });
    return result.tips;
  } catch (error) {
    console.error('Error generating conservation tips:', error);
    return 'Sorry, we could not generate tips at this moment. Please try again later.';
  }
}
