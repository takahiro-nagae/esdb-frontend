import { EffectInterface } from '../../form/common/interface/effectInterface';
import { RankInterFace } from '../../form/common/interface/rankInterFace';
import { TargetInterFace } from '../../form/common/interface/targetInterFace';

export interface FormInit {
    effect: Array<EffectInterface>;
    rank: Array<RankInterFace>;
    target: Array<TargetInterFace>;
}
