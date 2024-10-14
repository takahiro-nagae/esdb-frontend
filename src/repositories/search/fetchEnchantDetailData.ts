import { internalApiClient } from '../_client';
import { EnchantDataDetailSchema } from './_schema';

const ResponseSchema = EnchantDataDetailSchema;

export const fetchEnchantDetailData = async (enchantId: string) => {
  const data = await internalApiClient('detail/' + enchantId);

  return ResponseSchema.parse(data);
};
