import { ModalContainer } from '@/common/modalContainer';
import { Rank, RankProps } from '../Rank';

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
