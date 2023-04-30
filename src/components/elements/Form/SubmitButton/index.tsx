import { type FC } from 'react';

import type { ITheme } from '@ts/interfaces';

import { Container, SendIcon, StyledButton } from './styles';

interface SubmitButtonProps extends ITheme {
  label: string;
  isLoadingAction?: boolean;
}

const SubmitButton: FC<SubmitButtonProps> = ({ label, isLoadingAction, $themeColor }) => {
  return (
    <Container>
      <StyledButton
        type='submit'
        variant='contained'
        $themeColor={$themeColor}
        disabled={isLoadingAction}
      >
        {label}
        <SendIcon $themeColor={$themeColor} />
      </StyledButton>
    </Container>
  );
};

export default SubmitButton;
