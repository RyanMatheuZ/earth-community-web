import { type FC } from 'react';

import * as S from './styles';

interface EmptyGroupCardProps {
  message: string;
  handleClick: () => void;
}

const EmptyGroupCard: FC<EmptyGroupCardProps> = ({ message, handleClick }) => {
  return (
    <S.Container>
      <S.Message>
        {message}
      </S.Message>
      <S.StyledIconButton onClick={handleClick}>
        <S.CreateGroupIcon />
      </S.StyledIconButton>
    </S.Container>
  );
};

export default EmptyGroupCard;
