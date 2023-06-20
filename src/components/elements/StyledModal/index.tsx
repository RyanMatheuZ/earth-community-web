import { type FC, type ReactNode } from 'react';

import { DialogContent } from '@mui/material';

import Header from './Header';
import Actions from './Actions';

import * as S from './styles';

interface StyledModalProps {
  isOpen: boolean;
  handleToggleModal: () => void;
  modalTitle: string;
  content: ReactNode;
  actions?: ReactNode;
}

const StyledModal: FC<StyledModalProps> = ({ isOpen, handleToggleModal, modalTitle, content, actions }) => {
  return (
    <S.Container
      open={isOpen}
      onClose={handleToggleModal}
    >
      <Header title={modalTitle} />
      <DialogContent dividers={true}>
        {content}
      </DialogContent>
      {!!actions && (
        <Actions>
          {actions}
        </Actions>
      )}
      <S.CloseModalButton onClick={handleToggleModal}>
        <S.CloseIcon />
      </S.CloseModalButton>
    </S.Container>
  );
};

export default StyledModal;
