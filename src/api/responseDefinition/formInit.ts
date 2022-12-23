import { EffectType } from "../../form/common/type/effectType";
import { RankType } from "../../form/common/type/rankType";
import { TargetType } from "../../form/common/type/targetType";

export interface FormInit {
    effect: Array<EffectType>;
    rank: Array<RankType>;
    target: Array<TargetType>;
}