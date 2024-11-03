import { vi } from 'vitest';
import 'vitest-dom/extend-expect';

vi.mock('./src/repositories/form/fetchInitData');
vi.mock('./src/repositories/search/fetchRankData');
vi.mock('./src/repositories/search/fetchSearchEnchantData');
vi.mock('./src/repositories/search/fetchEnchantDetailData');
