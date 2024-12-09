
import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';

import * as stories from '../stories/AccordionButton.stories';

describe('AccordionButton', () => {
    const { NotOpen, Open } = composeStories(stories);

    test('アコーディオンが開いていないことを確認', async () => {
        render(<NotOpen />);

        expect(screen.getByTestId('KeyboardArrowDownIcon')).toBeInTheDocument();
        expect(screen.queryByTestId('KeyboardArrowUpIcon')).toBeNull();
    });

    test('アコーディオンが開いていることを確認', async () => {
        render(<Open />);

        expect(screen.getByTestId('KeyboardArrowUpIcon')).toBeInTheDocument();
        expect(screen.queryByTestId('KeyboardArrowDownIcon')).toBeNull();
    });
});