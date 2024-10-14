import { z } from 'zod';
import { EnchantDataSchema, RankDataSchema } from './_schema';

export type EnchantData = z.infer<typeof EnchantDataSchema>;
export type RankData = z.infer<typeof RankDataSchema>;
