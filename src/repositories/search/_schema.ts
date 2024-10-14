import { z } from 'zod';

export const EnchantDataSchema = z.object({
  enchant_id: z.string(),
  enchant_name: z.string(),
  enchant_name_2: z.string(),
  enchant_name_en: z.string(),
  position_id: z.string(),
  rank: z.string(),
  rank_seq: z.number(),
  target_code: z.string(),
  target_name: z.string(),
  effect_kbn: z.string(),
  effect_name: z.string(),
  route_name: z.string().nullable(),
  imp_flg: z.string(),
  invalid_target_flg: z.number().optional(),
  disp_val: z.string().optional(),
});

export const RankDataSchema = z.object({
  rank: z.string(),
  normal_rate: z.string().optional(),
  elite_rate: z.string().optional(),
  elf_rate: z.string().optional(),
  ancient_rate: z.string().optional(),
  rare_holy_rate: z.string().optional(),
  normal_rate_thu: z.string().optional(),
  elite_rate_thu: z.string().optional(),
  elf_rate_thu: z.string().optional(),
  ancient_rate_thu: z.string().optional(),
  rare_holy_rate_thu: z.string().optional(),
});
