import { type FC } from 'react';

import * as S from './styles';

interface EmptyGroupCardProps {
  handleToggleModal: () => void;
}

const EmptyGroupCard: FC<EmptyGroupCardProps> = ({ handleToggleModal }) => {
  return (
    <S.Container>
      <S.Message>
        Não há grupos até o momento, <br />
        seja o primeiro a criar!
      </S.Message>
      <S.StyledIconButton onClick={handleToggleModal}>
        <S.CreateGroupIcon />
      </S.StyledIconButton>
    </S.Container>
  );
};

export default EmptyGroupCard;
