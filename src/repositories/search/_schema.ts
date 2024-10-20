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
  disp_val: z.number().optional(),
});

export const EffectNameSchema = z.object({
  effect_id: z.string(),
  effect: z.string(),
});

export const EnchantDataDetailSchema = z.object({
  effect_kbn: EnchantDataSchema.shape.effect_kbn,
  effect_name: EnchantDataSchema.shape.effect_name,
  enchant_id: EnchantDataSchema.shape.enchant_id,
  enchant_name: EnchantDataSchema.shape.enchant_name,
  enchant_name_2: EnchantDataSchema.shape.enchant_name_2,
  enchant_name_en: EnchantDataSchema.shape.enchant_name_en,
  imp_flg: EnchantDataSchema.shape.imp_flg,
  position_id: EnchantDataSchema.shape.position_id,
  rank: EnchantDataSchema.shape.rank,
  route_name: EnchantDataSchema.shape.route_name,
  target_code: EnchantDataSchema.shape.target_code,
  target_name: EnchantDataSchema.shape.target_name,
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
