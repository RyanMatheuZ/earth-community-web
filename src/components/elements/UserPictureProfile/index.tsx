import { type FC } from 'react';

import { PictureProfile } from './styles';

import { type PictureProfileSizeProps } from './utils';

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
    <PictureProfile
      src={pictureProfileSRC}
      alt={userName}
      title={userName}
      width={width}
      height={height}
    />
  );
};

export default UserPictureProfile;
