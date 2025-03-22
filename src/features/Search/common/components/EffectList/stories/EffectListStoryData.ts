export const increaseItemData = {
  type: 'increase',
  name: '最大ダメージ1~2増加',
  color: '#8989ff',
};

export const decreaseItemData = {
  type: 'decrease',
  name: '最大負傷率5%減少',
  color: '#ff3b3b',
};

export const designatedItemData = {
  type: 'designated',
  name: 'エンチャント装備を専用にする',
  color: '#f0f',
};

export const otherItemData = {
  type: 'hoge',
  name: 'fuga',
  color: '#f461f4',
};

export const allItemsData = {
  effects: [
    {
      type: increaseItemData.type,
      name: increaseItemData.name,
    },
    {
      type: decreaseItemData.type,
      name: decreaseItemData.name,
    },
    {
      type: designatedItemData.type,
      name: designatedItemData.name,
    },
  ],
  colors: [
    increaseItemData.color,
    decreaseItemData.color,
    designatedItemData.color,
  ],
};
