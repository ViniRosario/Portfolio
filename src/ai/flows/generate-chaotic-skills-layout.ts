'use server';
/**
 * @fileOverview This file defines a Genkit flow for generating a chaotic visual layout for a list of skills.
 *
 * - generateChaoticSkillsLayout - A function that orchestrates the generation of chaotic layout parameters for skills.
 * - GenerateChaoticSkillsLayoutInput - The input type for the generateChaoticSkillsLayout function.
 * - GenerateChaoticSkillsLayoutOutput - The return type for the generateChaoticSkillsLayout function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const GenerateChaoticSkillsLayoutInputSchema = z.object({
  skills: z
    .array(z.string())
    .describe('A list of skills to be arranged in a chaotic layout.'),
});
export type GenerateChaoticSkillsLayoutInput = z.infer<
  typeof GenerateChaoticSkillsLayoutInputSchema
>;

const SkillLayoutItemSchema = z.object({
  text: z.string().describe('The skill text.'),
  x: z
    .number()
    .min(0)
    .max(100)
    .describe(
      'The horizontal position of the skill as a percentage of the container width (0-100).'
    ),
  y: z
    .number()
    .min(0)
    .max(100)
    .describe(
      'The vertical position of the skill as a percentage of the container height (0-100).'
    ),
  rotation: z
    .number()
    .min(-45)
    .max(45)
    .describe('The rotation of the skill in degrees (-45 to 45).'),
  fontSize: z
    .number()
    .min(1)
    .max(5)
    .describe(
      'The font size factor for the skill (e.g., 1=small, 5=very large).'
    ),
  fontWeight: z
    .enum(['normal', 'bold', 'bolder', 'lighter'])
    .describe('The font weight of the skill.'),
  color: z
    .string()
    .regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/)
    .describe('The HEX color code for the skill text.'),
});

const GenerateChaoticSkillsLayoutOutputSchema = z.object({
  layout: z
    .array(SkillLayoutItemSchema)
    .describe('An array of skills with generated layout parameters.'),
});
export type GenerateChaoticSkillsLayoutOutput = z.infer<
  typeof GenerateChaoticSkillsLayoutOutputSchema
>;

export async function generateChaoticSkillsLayout(
  input: GenerateChaoticSkillsLayoutInput
): Promise<GenerateChaoticSkillsLayoutOutput> {
  return generateChaoticSkillsLayoutFlow(input);
}

const chaoticSkillsPrompt = ai.definePrompt({
  name: 'chaoticSkillsPrompt',
  input: { schema: GenerateChaoticSkillsLayoutInputSchema },
  output: { schema: GenerateChaoticSkillsLayoutOutputSchema },
  prompt: `You are an expert layout designer specializing in a 'digital zine' and 'urban collage' aesthetic.
Your task is to generate chaotic, non-overlapping visual layout parameters for a list of skills.
Each skill should be treated as a word cut from a magazine, with varying sizes, weights, rotations, and positions to create a dynamic and visually explosive effect.
Avoid any conventional list or grid layouts.

Instructions:
- For each skill provided, generate a unique set of 'x', 'y', 'rotation', 'fontSize', 'fontWeight', and 'color' values.
- 'x' and 'y' should be percentages (0-100) relative to a container, ensuring skills are spread out across the space.
- 'rotation' should be in degrees, between -45 and 45.
- 'fontSize' should be a factor between 1 and 5 (e.g., 1=small, 5=very large) to represent varying text sizes.
- 'fontWeight' should be 'normal', 'bold', 'bolder', or 'lighter'.
- 'color' should be a vibrant HEX color code (e.g., #F40FC0, #9214CC, #FFFF00).
- Ensure no two skills have identical or very similar 'x' and 'y' coordinates to promote separation and prevent overlap.

Skills to layout: {{{skills}}}
`,
});

const generateChaoticSkillsLayoutFlow = ai.defineFlow(
  {
    name: 'generateChaoticSkillsLayoutFlow',
    inputSchema: GenerateChaoticSkillsLayoutInputSchema,
    outputSchema: GenerateChaoticSkillsLayoutOutputSchema,
  },
  async (input) => {
    const { output } = await chaoticSkillsPrompt(input);
    return output!;
  }
);
