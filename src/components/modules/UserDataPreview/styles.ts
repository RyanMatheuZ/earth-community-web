import styled from 'styled-components';

import Image from 'next/image';
import Link from 'next/link';

export const Container = styled.div`
  border: 1px solid ${({ theme }) => theme.palette.primary.main};
  border-radius: 5px;
`;

export const UserBackgroundProfile = styled(Image)`
  border-bottom: 1px solid ${({ theme }) => theme.palette.primary.main};
  border-radius: 5px 5px 0 0;
  object-fit: cover;
  object-position: center;
  position: static !important;
  height: 80px !important;
`;

export const UserPictureProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
  transform: translateY(-40%);
`;

export const UserName = styled(Link)`
  color: ${({ theme }) => theme.palette.tertiary.main};
  font-weight: 600;

  &:visited {
    color: ${({ theme }) => theme.palette.tertiary.main};
  }
`;
