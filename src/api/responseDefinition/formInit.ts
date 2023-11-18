import { EffectInterface } from '../../features/form/common/interface/effectInterface';
import { RankInterFace } from '../../features/form/common/interface/rankInterFace';
import { TargetInterFace } from '../../features/form/common/interface/targetInterFace';

export interface FormInit {
    effect: Array<EffectInterface>;
    rank: Array<RankInterFace>;
    target: Array<TargetInterFace>;
}
