import { Detail } from '../Detail';

import { ModalContainer } from '@/common/ModalContainer';
import { GetEnchantDetailsQuery } from '@/repositories/generated/graphql';

type DetailModalProps = {
  enchant: GetEnchantDetailsQuery['details']['enchants'][number];
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
        // TODO: Searchをなおすときに、isImpをなおす
        openComponent={
          <Detail
            enchant={{
              id: enchant.id,
              name: enchant.name,
              nameEn: enchant.nameEn,
              position: enchant.position,
              positionName: enchant.positionName,
              rank: enchant.rank,
              route: enchant.route,
              target: enchant.target,
              effect: enchant.effect,
              isImp: true,
              impName: '',
            }}
          />
        }
        width={95}
      />
    </>
  );
};
