import { type FC } from 'react';

import * as S from './styles';

interface LoadingTextProps {
  isLoading: boolean;
  loadingText: string;
  notLoadingText: string;
}

const LoadingText: FC<LoadingTextProps> = ({ isLoading, loadingText, notLoadingText }) => {
  return (
    <S.Container>
      {isLoading ? loadingText : notLoadingText}
    </S.Container>
  );
};

export default LoadingText;
