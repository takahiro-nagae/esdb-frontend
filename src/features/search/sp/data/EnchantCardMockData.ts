import { EnchantData } from "../../common/interface/enchantData";

export const BeginnerData: EnchantData = {
    enchant_id: "00000005",
    enchant_name: "初歩の",
    enchant_name_2: "ビギナー",
    enchant_name_en: "Beginner's",
    position: "接頭(prefix)",
    position_id: "1",
    rank: "F",
    rank_seq: 0,
    target_name: "全て",
    effect_kbn: "decrease@increase",
    effect_name: "レベルが5以下の場合、Str 1減少@レベルが5以下の場合、最大生命力3増加",
    route_name: "■ビギナー ショートボウ<br>　- お化け白アリ@■初歩の 木の棒<br>　- コウモリ/巨大コウモリ@■ES<br>　- 巨大ボス：イフリート@■ビギナー モンゴスマートキャップ/ストライプキャップ<br>　- 地下トンネル 宝箱@■ビギナー マンドリン<br>　- ブリアナが販売 (23,000G)",
    imp_flg: "1",
    invalid_target_flg: "",
    disp_val: ""
};

export const ScarecrowDataAll: EnchantData = {
    enchant_id: "00000250",
    enchant_name: "かかしの",
    enchant_name_2: "スケアクロウ",
    enchant_name_en: "Scarecrow",
    position: "接尾(suffix)",
    position_id: "2",
    rank: "D",
    rank_seq: 2,
    target_name: "全て",
    effect_kbn: "decrease",
    effect_name: "Dex 6~9減少",
    route_name: "■かかしの 鎌<br>　- ダンバートン郊外のかかし@■かかしの（スケアクロウ） 帽子/ストライプグローブ/革シューズ（♂/♀）/ポポスカート/ポポシャツとズボン/裁縫キット<br>　- 各種ランダムボックス",
    imp_flg: "0",
    invalid_target_flg: "1",
    disp_val: "-9"
};