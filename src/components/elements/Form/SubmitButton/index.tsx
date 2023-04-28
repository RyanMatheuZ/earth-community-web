import { type FC } from 'react';

import { Container, SendIcon, StyledButton } from './styles';

interface SubmitButtonProps {
  label: string;
  isLoadingAction?: boolean;
}

const SubmitButton: FC<SubmitButtonProps> = ({ label, isLoadingAction }) => {
  return (
    <Container>
      <StyledButton
        type='submit'
        variant='contained'
        disabled={isLoadingAction}
      >
        {label}
        <SendIcon />
      </StyledButton>
    </Container>
  );
};

export default SubmitButton;
