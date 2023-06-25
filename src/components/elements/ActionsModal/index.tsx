import { type FC } from 'react';

import { StyledModal } from '@components/elements';

import * as S from './styles';

interface ActionsModalProps {
  isOpen: boolean;
  handleToggleModal: () => void;
  handleBackButton: () => void;
  handleConfirmButton: () => void;
  message: string;
  isLoading?: boolean;
  width?: number;
  height?: number;
}

const ActionsModal: FC<ActionsModalProps> = ({
  isOpen,
  handleToggleModal,
  handleBackButton,
  handleConfirmButton,
  message,
  isLoading,
  width = 500,
  height = 400
}) => {
  return (
    <StyledModal
      isOpen={isOpen}
      showCloseIcon={false}
      handleToggleModal={handleToggleModal}
      modalTitle='Leia atentamente antes de prosseguir!'
      width={width}
      height={height}
      content={
        <S.Container>
          <S.Content>
            <S.WarningIcon />
            <S.Message>
              {message}
            </S.Message>
          </S.Content>
          <S.ActionsContainer>
            <S.BackButton
              onClick={handleBackButton}
              disabled={isLoading}
            >
              Voltar
            </S.BackButton>
            <S.ConfirmButton
              onClick={handleConfirmButton}
              disabled={isLoading}
            >
              Confirmar
            </S.ConfirmButton>
          </S.ActionsContainer>
        </S.Container>
      }
    />
  );
};

export default ActionsModal;
