import styled from 'styled-components';

export const Container = styled.header`
  background-color: ${({ theme }) => theme.palette.common.white};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
  padding: ${({ theme }) => theme.spacing(2)};
`;

export const MaxWidthContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-inline: auto;
  max-width: 1200px;
  width: 100%;
`;

export const LogoAndSearchBar = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
  margin-right: ${({ theme }) => theme.spacing(1)};
  width: 100%;
`;
