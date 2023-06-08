import styled from 'styled-components';

import { Typography } from '@mui/material';

import { type SDGTheme } from '../utils';

export const Subtitle = styled(Typography) <SDGTheme>`
  color: ${({ $sdgColor }) => $sdgColor};
  font-size: 1.15rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`;

export const TopicContainer = styled.article`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
`;

export const SubtopicContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(1)};
`;

export const SubtopicTitle = styled(Typography) <SDGTheme>`
  color: ${({ $sdgColor }) => $sdgColor};
  font-size: 1.1rem;
  font-weight: 600;
`;

export const Goal = styled(Typography) <SDGTheme>`
  color: ${({ $sdgColor }) => $sdgColor};
  font-weight: 600;
  display: inline;
  margin-right: ${({ theme }) => theme.spacing(1)};
`;

export const Description = styled(Typography)`
  color: ${({ theme }) => theme.palette.tertiary.main};
  display: inline;
`;

export const NoteContainer = styled.article`
  margin-top: ${({ theme }) => theme.spacing(2)};
`;

export const NoteMarking = styled(Typography)`
  font-weight: 500;
  display: inline;
  margin-right: ${({ theme }) => theme.spacing(.5)};
`;

export const NoteDescription = styled(Typography)`
  font-style: italic;
  display: inline;
`;
