import { Rank, RankProps } from '../Rank';

import { ModalContainer } from '@/common/ModalContainer';

export const RankModal: React.FC<RankProps> = ({ rank }) => {
  return (
    <>
      <ModalContainer
        buttonMsgEl={rank}
        height={70}
        openComponent={<Rank rank={rank} />}
        width={85}
      />
    </>
  );
};
