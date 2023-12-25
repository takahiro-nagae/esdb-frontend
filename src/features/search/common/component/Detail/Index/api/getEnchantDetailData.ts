import { getApi } from "../../../../../../../api/ApiBase";

export const getEnchantDetailData = async (enchantId: string) => {
    const response = await getApi('detail/' + enchantId)
        .then(res => {
            if (res.data) {
                return res.data;
            }
        }).catch(error => {
            console.log(error);
        });

    return response;
};