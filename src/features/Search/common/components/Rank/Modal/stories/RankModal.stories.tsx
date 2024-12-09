import { Meta, StoryObj } from "@storybook/react";

import { RankModal } from "../RankModal";

export default {
    title: 'search/common/component/Rank/Modal/RankModal',
    component: RankModal,
} as Meta<typeof RankModal>;

export const RankF: StoryObj<typeof RankModal> = {
    args: {
        rank: 'F',
    }
};