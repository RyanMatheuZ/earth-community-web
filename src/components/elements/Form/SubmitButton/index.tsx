import { type FC } from 'react';

import type { ITheme } from '@ts/interfaces';

import * as S from './styles';

interface SubmitButtonProps extends ITheme {
  label: string;
  isLoadingAction?: boolean;
}

const SubmitButton: FC<SubmitButtonProps> = ({ label, isLoadingAction, $themeColor = 'green' }) => {
  return (
    <S.Container>
      <S.StyledButton
        type='submit'
        variant='contained'
        $themeColor={$themeColor}
        disabled={isLoadingAction}
      >
        {label}
        <S.SendIcon $themeColor={$themeColor} />
      </S.StyledButton>
    </S.Container>
  );
};

export default SubmitButton;
