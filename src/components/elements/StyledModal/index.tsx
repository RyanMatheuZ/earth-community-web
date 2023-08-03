import { type FC, type ReactNode } from 'react';

import * as S from './styles';

interface StyledModalProps {
  isOpen: boolean;
  showCloseIcon?: boolean;
  handleToggleModal: () => void;
  modalTitle: string;
  content: ReactNode;
  actions?: ReactNode;
  width?: number;
  height?: number;
}

const StyledModal: FC<StyledModalProps> = ({
  isOpen,
  showCloseIcon = true,
  handleToggleModal,
  modalTitle,
  content,
  actions,
  width = 800,
  height = 650
}) => {
  return (
    <S.Container
      open={isOpen}
      onClose={handleToggleModal}
      width={width}
      height={height}
    >
      <S.StyledHeader>
        {modalTitle}
      </S.StyledHeader>
      <S.StyledDialogContent dividers={true}>
        {content}
      </S.StyledDialogContent>
      {!!actions && (
        <S.StyledActions>
          {actions}
        </S.StyledActions>
      )}
      {showCloseIcon && (
        <S.CloseModalButton onClick={handleToggleModal}>
          <S.CloseIcon />
        </S.CloseModalButton>
      )}
    </S.Container>
  );
};

export default StyledModal;
