'use server';

/**
 * @fileOverview Un flujo que genera consejos personalizados para la conservación del agua basados en datos históricos de consumo.
 *
 * - generateWaterConservationTips - Una función que genera consejos para la conservación del agua.
 * - GenerateWaterConservationTipsInput - El tipo de entrada para la función generateWaterConservationTips.
 * - GenerateWaterConservationTipsOutput - El tipo de retorno para la función generateWaterConservationTips.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateWaterConservationTipsInputSchema = z.object({
  historicalData: z
    .string()
    .describe(
      'Datos históricos de consumo de agua en formato JSON, incluyendo fechas y cantidades de consumo.'
    ),
});
export type GenerateWaterConservationTipsInput = z.infer<
  typeof GenerateWaterConservationTipsInputSchema
>;

const GenerateWaterConservationTipsOutputSchema = z.object({
  tips: z
    .string()
    .describe('Consejos personalizados de conservación de agua basados en los datos proporcionados.'),
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
  prompt: `Eres un experto en conservación de agua. Analiza los siguientes datos históricos de consumo de agua y proporciona consejos personalizados en español para reducir el uso de agua.

Datos Históricos: {{{historicalData}}}

Proporciona consejos específicos y prácticos basados en los patrones de consumo en los datos. Enfócate en áreas donde el usuario puede ahorrar agua y dinero.
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
