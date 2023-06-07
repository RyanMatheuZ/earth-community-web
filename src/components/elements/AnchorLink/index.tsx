import { type FC } from 'react';

import * as S from './styles';

interface AnchorLinkProps {
  elementId: string;
  showMessage?: boolean;
}

const AnchorLink: FC<AnchorLinkProps> = ({ elementId, showMessage = false }) => {
  return (
    <S.Container
      href={`#${elementId}`}
      scroll={false}
    >
      <S.ArrowIcon />
      {showMessage && (
        <S.Message>
          Role para baixo...
        </S.Message>
      )}
    </S.Container>
  );
};

export default AnchorLink;
