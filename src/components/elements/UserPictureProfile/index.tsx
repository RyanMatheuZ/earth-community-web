import { type FC } from 'react';

import { type PictureProfileSizeProps } from './utils';

import * as S from './styles';

interface UserPictureProfileProps extends PictureProfileSizeProps {
  pictureProfileSRC?: string;
  userName: string;
}

const UserPictureProfile: FC<UserPictureProfileProps> = ({
  pictureProfileSRC = '',
  userName,
  width = '50',
  height = '50'
}) => {
  return (
    <S.PictureProfile
      src={pictureProfileSRC}
      alt={userName}
      title={userName}
      width={width}
      height={height}
    />
  );
};

export default UserPictureProfile;
