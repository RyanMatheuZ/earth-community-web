import styled from 'styled-components';

export const Container = styled.div`
    background-color: ${({ theme }) => theme.palette.lightGray.main};

  padding: ${({ theme }) => theme.spacing(2)};
`;

export const Template = styled.article`
  margin: ${({ theme }) => theme.spacing(4)} auto;
  max-width: 800px;
  width: 100%;

  h1 {
    color: ${({ theme }) => theme.palette.primary.main};
    font-size: 2.5rem;
    font-weight: 600;
  }

  p {
    color: ${({ theme }) => theme.palette.tertiary.main};
    font-size: 1.2rem;
    line-height: 2;
  }

  blockquote {
    background-color: ${({ theme }) => theme.palette.secondary.main};
    box-shadow: rgba(100, 100, 111, .2) 0px 7px 29px 0px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing(2)};
    margin: ${({ theme }) => theme.spacing(4, 0)};
    padding: ${({ theme }) => theme.spacing(2)};

    div:first-child {
      background-color: ${({ theme }) => theme.palette.common.white};
      box-shadow: rgba(100, 100, 111, .2) 0px 7px 29px 0px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: ${({ theme }) => theme.spacing(2)};
      width: 40px;
      height: 40px;
    }

    div:last-child {
      color: ${({ theme }) => theme.palette.common.white};
      font-weight: 600;
    }
  }

  strong,
  b {
    color: ${({ theme }) => theme.palette.primary.main};
    font-weight: 600;
  }

  img {
    box-shadow: rgba(149, 157, 165, .2) 0px 8px 24px;
    border-radius: 10px;
    width: 100%;
  }

  legend {
    color: ${({ theme }) => theme.palette.primary.main};
    font-weight: 600;
    margin-top: ${({ theme }) => theme.spacing(1)};
  }

  ul,
  ol {
    list-style-type: auto;
  }

  li {
    font-size: 1.2rem;
    line-height: 2;

    &::marker {
      color: ${({ theme }) => theme.palette.primary.main};
      font-weight: 600;
    }
  }
`;
