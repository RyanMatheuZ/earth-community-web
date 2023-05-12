import styled from 'styled-components';

import Image from 'next/image';

import { StyledTextField } from '@components/elements';

import { ContentCopy } from '@mui/icons-material';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const QRCode = styled(Image)`
  border: 2px dashed ${({ theme }) => theme.palette.primary.main};
  border-radius: 15px;
`;

export const QRCodeDescription = styled.span`
  color: ${({ theme }) => theme.palette.primary.main};
  font-weight: 600;
  margin-block: ${({ theme }) => theme.spacing(1, 2)};
`;

export const QRCodeInput = styled(StyledTextField)`
  input {
    color: ${({ theme }) => theme.palette.tertiary.main};
  }
`;

export const CopyIcon = styled(ContentCopy)`
  fill: ${({ theme }) => theme.palette.primary.main};
  cursor: pointer;
  width: 20px;
  height: 20px;
`;
