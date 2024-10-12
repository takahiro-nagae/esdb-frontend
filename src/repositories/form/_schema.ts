import { z } from 'zod';

export const FormEffectSchema = z.object({
  effect_id: z.string(),
  effect: z.string(),
});

export const FormRankSchema = z.object({
  rank: z.string(),
});

export const FormTargetSchema = z.object({
  target_code: z.string(),
  target_name: z.string(),
});
