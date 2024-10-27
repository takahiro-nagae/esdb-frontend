export const displayAmongAd = (index: number) => {
    return index != 0 && index % 5 == 0;
};

export const displayLastAd = (index: number, length: number) => {
    return index == length - 1;
};