import { z } from 'zod';

import {
  EnchantDataDetailSchema,
  EnchantDataSchema,
  RankDataSchema,
} from './_schema';

export type EnchantData = z.infer<typeof EnchantDataSchema>;
export type EnchantDataDetail = z.infer<typeof EnchantDataDetailSchema>;
export type RankData = z.infer<typeof RankDataSchema>;
