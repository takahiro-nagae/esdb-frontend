import { z } from 'zod';

import { EnchantDataSchema } from './_schema';

export type EnchantData = z.infer<typeof EnchantDataSchema>;
