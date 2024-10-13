import { internalApiClient } from '../_client';
import { FormEffectSchema, FormRankSchema, FormTargetSchema } from './_schema';
import { z } from 'zod';

const ResponseSchema = z.object({
  effect: z.array(FormEffectSchema),
  rank: z.array(FormRankSchema),
  target: z.array(FormTargetSchema),
});

export const fetchInitData = async () => {
  try {
    const data = await internalApiClient('');
    const response = ResponseSchema.parse(data);
    return response;
  } catch (error) {
    console.log(error);
    return {
      effect: [],
      rank: [],
      target: [],
    };
  }
};
