import { internalApiClient } from '../_client';
import { EnchantDataDetailSchema } from './_schema';

const ResponseSchema = EnchantDataDetailSchema;

export const getEnchantDetailData = async (enchantId: string) => {
  const data = await internalApiClient('detail/' + enchantId);
  const response = ResponseSchema.parse(data);

  return response;
};
