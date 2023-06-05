import { useRef, useEffect, type FC, type ReactNode } from 'react';

import { DialogContent, DialogContentText } from '@mui/material';

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
  const descriptionElementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (isOpen) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [isOpen]);

  return (
    <S.Container
      open={isOpen}
      onClose={handleToggleModal}
    >
      <Header title={modalTitle} />
      <DialogContent dividers={true}>
        <DialogContentText
          ref={descriptionElementRef}
          tabIndex={-1}
        >
          {content}
        </DialogContentText>
      </DialogContent>
      {!!actions && (
        <Actions>
          {actions}
        </Actions>
      )}
    </S.Container>
  );
};

export default StyledModal;
