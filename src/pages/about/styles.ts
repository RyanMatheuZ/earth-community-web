import styled from 'styled-components';

import Link from 'next/link';

import { Typography } from '@mui/material';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: 100%;
`;

export const HeaderContainer = styled.div`
  margin: ${({ theme }) => theme.spacing(2, 2, 0, 2)};
`;

export const SectionContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  margin-top: ${({ theme }) => theme.spacing(4)};
  padding-inline: ${({ theme }) => theme.spacing(2)};
  gap: ${({ theme }) => theme.spacing(2)};
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  width: 100%;
`;

export const Title = styled(Typography).attrs({
  variant: 'h1'
})`
  font-size: 3.5rem;
  margin-bottom: ${({ theme }) => theme.spacing(4)};
`;

export const Subtitle = styled(Typography).attrs({
  variant: 'h2'
})`
  font-size: 3rem;
  font-weight: 600;
  margin-bottom: ${({ theme }) => theme.spacing(4)};
`;

export const Text = styled(Typography)`
  font-size: 1.25rem;
  margin-bottom: ${({ theme }) => theme.spacing(2)};

  &:before {
    content: '';
    background-color: ${({ theme }) => theme.palette.primary.main};
    border-radius: 50%;
    display: inline-block;
    margin-right: ${({ theme }) => theme.spacing(1)};
    width: 10px;
    height: 10px;
  }
`;

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.palette.common.white};
  background: ${({ theme }) => theme.palette.primary.main};
  border-radius: 0 10px 0 10px;
  padding: ${({ theme }) => theme.spacing(.35)};
`;

export const Abbreviation = styled.abbr`
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.palette.primary.main},
    ${({ theme }) => theme.palette.primary.main}
  ) repeat-x 0 100%;
  background-size: 100% 10%;
  cursor: default;
  padding: ${({ theme }) => theme.spacing(.15, .5)};
  transition: all 385ms cubic-bezier(.19,1,.22,1);

  &:hover {
    color: ${({ theme }) => theme.palette.common.white};
    background-size: 100% 100%;
  }
`;

export const UnderlinedText = styled.span`
  text-decoration: wavy underline ${({ theme }) => theme.palette.primary.main} 2.5px;
`;

export const UppercaseText = styled.span`
  color: ${({ theme }) => theme.palette.primary.main};
  text-transform: uppercase;
`;

