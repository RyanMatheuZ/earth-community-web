import styled from 'styled-components';

import Image from 'next/image';
import Link from 'next/link';

import { Typography } from '@mui/material';
import { AutoStories } from '@mui/icons-material';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.palette.lightGray.main};
  padding: ${({ theme }) => theme.spacing(2)};
  min-height: 100vh;
  height: 100%;
`;

export const PageTitle = styled(Typography).attrs({
  variant: 'h1'
})`
  font-size: 3rem;
  font-weight: 600;
  text-align: center;
  margin-block: ${({ theme }) => theme.spacing(6)};
`;

export const Posts = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing(4)};
  margin-top: ${({ theme }) => theme.spacing(4)};
`;

export const Card = styled.article`
  background-color: ${({ theme }) => theme.palette.common.white};
  box-shadow: rgba(100, 100, 111, .2) 0px 7px 29px 0px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing(2)};
  max-width: 300px;
  width: 100%;
`;

export const ImagePreview = styled(Image)`
  box-shadow: rgba(99, 99, 99, .2) 0px 2px 8px 0px;
  border-radius: 10px;
  object-fit: cover;
  object-position: center;
  position: static !important;
  width: 100% !important;
  height: 120px !important;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${({ theme }) => theme.spacing(2)};
`;

export const Title = styled(Typography).attrs({
  variant: 'h2'
})`
  color: ${({ theme }) => theme.palette.tertiary.main};
  font-size: 1.15rem;
  margin-bottom: ${({ theme }) => theme.spacing(1)};
`;

export const Description = styled(Typography)`
  color: ${({ theme }) => theme.palette.tertiary.main};
`;

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const ReadPost = styled(Link)`
  color: ${({ theme }) => theme.palette.common.white};
  background-color: ${({ theme }) => theme.palette.primary.main};
  box-shadow: rgba(99, 99, 99, .2) 0px 2px 8px 0px;
  border-radius: 10px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(2)};
  margin-top: ${({ theme }) => theme.spacing(2)};
  padding: ${({ theme }) => theme.spacing(1, 2)};
  width: 120px;
  transition: all 500ms ease;

  &:visited {
    color: ${({ theme }) => theme.palette.common.white};
  }

  &:hover {
    background-color: ${({ theme }) => theme.palette.primary.main};
    filter: brightness(.9);
  }
`;

export const ReadIcon = styled(AutoStories)`
  fill: ${({ theme }) => theme.palette.common.white};
  width: 20px;
  height: 20px;
`;

export const UnderlinedText = styled.span`
  text-decoration: wavy underline ${({ theme }) => theme.palette.primary.main} 2.5px;
`;

export const UppercaseText = styled.span`
  color: ${({ theme }) => theme.palette.primary.main};
  text-transform: uppercase;
`;
