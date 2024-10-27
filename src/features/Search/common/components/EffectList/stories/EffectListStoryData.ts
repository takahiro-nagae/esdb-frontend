export const increaseItemData = {
    effectKbn: 'increase',
    effectName: '最大ダメージ1~2増加',
    color: '#8989ff',
};

export const decreaseItemData = {
    effectKbn: 'decrease',
    effectName: '最大負傷率5%減少',
    color: '#ff3b3b',
};

export const designatedItemData = {
    effectKbn: 'designated',
    effectName: 'エンチャント装備を専用にする',
    color: '#f0f',
};

export const otherItemData = {
    effectKbn: 'hoge',
    effectName: 'fuga',
    color: '#f461f4',
};

export const allItemsData = {
    effectKbn: `${increaseItemData.effectKbn}@${decreaseItemData.effectKbn}@${designatedItemData.effectKbn}`,
    effectName: `${increaseItemData.effectName}@${decreaseItemData.effectName}@${designatedItemData.effectName}`,
    colors: [
        increaseItemData.color,
        decreaseItemData.color,
        designatedItemData.color,
    ]
};