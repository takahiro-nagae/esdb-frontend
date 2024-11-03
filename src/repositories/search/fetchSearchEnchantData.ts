import { z } from 'zod';

import { internalApiClient } from '../_client';

import { EffectNameSchema, EnchantDataSchema } from './_schema';

const ResponseSchema = z.object({
  enchant_list: z.array(EnchantDataSchema),
  effect_name: EffectNameSchema.nullable().optional(),
});

export const fetchSearchEnchantData = async (
  path: string,
  requestParams: URLSearchParams,
) => {
  const data = await internalApiClient(path + '?' + requestParams);

  return ResponseSchema.parse(data);
};
