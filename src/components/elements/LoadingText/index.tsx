import { type FC, type RefObject } from 'react';

import * as S from './styles';

interface LoadingTextProps {
  ref?: ((instance: HTMLSpanElement | null) => void) | RefObject<HTMLSpanElement> | null | undefined;
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
