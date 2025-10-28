'use server';

/**
 * @fileOverview A flow that generates personalized water conservation tips based on historical water consumption data.
 *
 * - generateWaterConservationTips - A function that generates water conservation tips.
 * - GenerateWaterConservationTipsInput - The input type for the generateWaterConservationTips function.
 * - GenerateWaterConservationTipsOutput - The return type for the generateWaterConservationTips function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateWaterConservationTipsInputSchema = z.object({
  historicalData: z
    .string()
    .describe(
      'Historical water consumption data in JSON format, including dates and consumption amounts.'
    ),
});
export type GenerateWaterConservationTipsInput = z.infer<
  typeof GenerateWaterConservationTipsInputSchema
>;

const GenerateWaterConservationTipsOutputSchema = z.object({
  tips: z
    .string()
    .describe('Personalized water conservation tips based on the provided data.'),
});
export type GenerateWaterConservationTipsOutput = z.infer<
  typeof GenerateWaterConservationTipsOutputSchema
>;

export async function generateWaterConservationTips(
  input: GenerateWaterConservationTipsInput
): Promise<GenerateWaterConservationTipsOutput> {
  return generateWaterConservationTipsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateWaterConservationTipsPrompt',
  input: {schema: GenerateWaterConservationTipsInputSchema},
  output: {schema: GenerateWaterConservationTipsOutputSchema},
  prompt: `You are a water conservation expert. Analyze the following historical water consumption data and provide personalized tips to reduce water usage.

Historical Data: {{{historicalData}}}

Provide specific, actionable tips based on the consumption patterns in the data. Focus on areas where the user can save water and money.
`,
});

const generateWaterConservationTipsFlow = ai.defineFlow(
  {
    name: 'generateWaterConservationTipsFlow',
    inputSchema: GenerateWaterConservationTipsInputSchema,
    outputSchema: GenerateWaterConservationTipsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
