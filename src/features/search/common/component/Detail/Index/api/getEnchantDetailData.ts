import { internalApiClient } from "../../../../../../../repositories/_client";

export const getEnchantDetailData = async (enchantId: string) => {
    const response = await internalApiClient('detail/' + enchantId)
        .then(res => {
            if (res.data) {
                return res.data;
            }
        }).catch(error => {
            console.log(error);
        });

    return response;
};