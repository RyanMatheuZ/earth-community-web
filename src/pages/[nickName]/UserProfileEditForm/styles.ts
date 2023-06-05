import styled from 'styled-components';

import { Typography } from '@mui/material';
import { Edit } from '@mui/icons-material';

export const PictureContainer = styled.div`
  border: 1px solid ${({ theme }) => theme.palette.secondary.main};
  border-radius: 50%;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing(.5)};
  width: fit-content;
  position: relative;
`;

export const PictureErrorMessage = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacing(1)};
`;

export const EditIconContainer = styled.div`
  background-color: ${({ theme }) => theme.palette.common.white};
  border: 1px solid ${({ theme }) => theme.palette.secondary.main};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  position: absolute;
  right: 3px;
  bottom: -3px;
  transition: all 275ms cubic-bezier(.17,.15,.83,.86); // https://cubic-bezier.com/#.17,.15,.83,.86

  &:hover {
    filter: brightness(.9);
  }
`;

export const EditIcon = styled(Edit)`
  fill: ${({ theme }) => theme.palette.primary.main};
`;

export const SectionLabel = styled(Typography).attrs({ variant: 'h2' })`
  color: ${({ theme }) => theme.palette.tertiary.main};
  font-size: 1.15rem;
  margin-block: ${({ theme }) => theme.spacing(1, .5)};
`;
