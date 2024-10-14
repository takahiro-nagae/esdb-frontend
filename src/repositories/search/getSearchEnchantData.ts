import { internalApiClient } from '@/repositories/_client';

import { z } from 'zod';
import { EnchantDataSchema } from './_schema';

const ResponseSchema = z.object({
  enchant_list: z.array(EnchantDataSchema),
  effect_name: z.string().nullable(),
});

export const getSearchEnchantData = async (
  path: string,
  requestParams: URLSearchParams,
) => {
  const data = await internalApiClient(path + '?' + requestParams);
  const response = ResponseSchema.parse(data);
  return response;
};
