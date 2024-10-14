import { z } from 'zod';
import { internalApiClient } from '../_client';
import { RankDataSchema } from './_schema';

const ResponseSchema = z.object({
  rank: RankDataSchema.shape.rank,
  normal_rate: RankDataSchema.shape.normal_rate.optional(),
  elite_rate: RankDataSchema.shape.elite_rate.optional(),
  elf_rate: RankDataSchema.shape.elf_rate.optional(),
  ancient_rate: RankDataSchema.shape.ancient_rate.optional(),
  rare_holy_rate: RankDataSchema.shape.rare_holy_rate.optional(),
  normal_rate_thu: RankDataSchema.shape.normal_rate_thu.optional(),
  elite_rate_thu: RankDataSchema.shape.elite_rate_thu.optional(),
  elf_rate_thu: RankDataSchema.shape.elf_rate_thu.optional(),
  ancient_rate_thu: RankDataSchema.shape.ancient_rate_thu.optional(),
  rare_holy_rate_thu: RankDataSchema.shape.rare_holy_rate_thu.optional(),
});

export const fetchRankData = async (rank: string) => {
  const data = await internalApiClient('rank/' + rank);
  const response = ResponseSchema.parse(data);

  return response;
};
