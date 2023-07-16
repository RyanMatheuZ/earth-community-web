import { type FC } from 'react';

import { copyToClipboard } from '@utils/inputs/copyToClipboard';

import * as S from './styles';

interface ShareBlogPostButtonProps {
  link: string;
}

const ShareBlogPostButton: FC<ShareBlogPostButtonProps> = ({ link }) => {
  return (
    <S.Container onClick={() => copyToClipboard(link, 'Link copiado com sucesso!')}>
      <S.ShareIcon />
    </S.Container>
  );
};

export default ShareBlogPostButton;
