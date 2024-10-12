import { z } from 'zod';
import { FormEffectSchema, FormRankSchema, FormTargetSchema } from './_schema';

export type FormEffectType = z.infer<typeof FormEffectSchema>;
export type FormRankType = z.infer<typeof FormRankSchema>;
export type FormTargetType = z.infer<typeof FormTargetSchema>;
