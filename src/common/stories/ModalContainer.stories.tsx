import { Meta, StoryFn } from '@storybook/react';

import { Footer } from '../Footer';
import { ModalContainer } from '../ModalContainer';

export default {
  title: 'common/ModalContainer',
  component: ModalContainer,
  decorators: [
    Story => {
      return <Story />;
    },
  ],
} as Meta<typeof ModalContainer>;

const Template: StoryFn<typeof ModalContainer> = () => {
  return (
    <ModalContainer
      buttonMsgEl={'test'}
      height={80}
      openComponent={<Footer />}
      width={80}
    />
  );
};

export const Default = Template.bind({});
