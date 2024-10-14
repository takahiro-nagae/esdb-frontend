import { internalApiClient } from '../_client';
import { RankDataSchema } from './_schema';

const ResponseSchema = RankDataSchema;

export const fetchRankData = async (rank: string) => {
  const data = await internalApiClient('rank/' + rank);

  return ResponseSchema.parse(data);
};
