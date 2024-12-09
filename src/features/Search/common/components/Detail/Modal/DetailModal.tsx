import { Detail } from '../Detail';

import { ModalContainer } from '@/common/ModalContainer';
import { EnchantData } from '@/repositories/search/_types';

type DetailModalProps = {
  enchant: EnchantData;
  count: number;
};

export const DetailModal: React.FC<DetailModalProps> = ({ enchant, count }) => {
  if (count <= 0) return <></>;
  return (
    <>
      <ModalContainer
        buttonMsgEl={
          <a>
            <small>&#187;{count}件省略しました</small>
          </a>
        }
        height={80}
        openComponent={<Detail enchant={enchant} />}
        width={95}
      />
    </>
  );
};
