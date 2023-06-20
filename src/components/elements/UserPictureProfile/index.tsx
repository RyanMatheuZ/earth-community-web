import { type FC } from 'react';

import { type PictureProfileSizeProps } from './utils';

import * as S from './styles';

interface UserPictureProfileProps extends PictureProfileSizeProps {
  pictureProfileSRC?: string;
  userName: string;
  handleClick?: () => void;
}

const UserPictureProfile: FC<UserPictureProfileProps> = ({
  $themeColor = 'green',
  pictureProfileSRC = '',
  userName,
  handleClick,
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
      draggable={false}
      onClick={handleClick}
      $themeColor={$themeColor}
      style={{ cursor: handleClick && 'pointer' }}
    />
  );
};

export default UserPictureProfile;
