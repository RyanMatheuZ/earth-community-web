import { useState, type FC } from 'react';

import { useMutation } from '@tanstack/react-query';

import { InputAdornment } from '@mui/material';

import { useAuth } from '@context/auth';

import { usePost } from '@hooks/index';
import { type SendCommentParams } from '@hooks/usePost/utils';

import { queryClient } from '@services/tanstackQuery';

import { StyledTextField, UserPictureProfile } from '@components/elements';

import * as S from './styles';

interface FieldToCommentProps {
  postId: string;
}

const FieldToComment: FC<FieldToCommentProps> = ({ postId }) => {
  const { user } = useAuth();

  const { handleUserSendComment } = usePost();

  const [comment, setComment] = useState('');

  const userName = `${user?.info.firstName} ${user?.info.surname}`;

  const { mutate } = useMutation(
    ({ postId, userId, comment }: SendCommentParams) => handleUserSendComment({ postId, userId, comment }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['all-posts']);
        setComment('');
      }
    }
  );

  return (
    <S.Container>
      <UserPictureProfile
        pictureProfileSRC={user?.info.pictureProfile}
        userName={userName}
        width='30'
        height='30'
      />
      <StyledTextField
        placeholder='Escreva um comentário...'
        $themeColor='green'
        fullWidth
        multiline
        minRows={2}
        value={comment}
        onChange={({ target: { value } }) => setComment(value)}
        InputProps={{
          endAdornment: <InputAdornment position='end'>
            <S.SendCommentButton
              onClick={() => mutate({ postId, userId: user?._id as SendCommentParams['userId'], comment })}
              title='Comentar'
              disabled={!comment.trim()}
            >
              <S.SendIcon />
            </S.SendCommentButton>
          </InputAdornment>
        }}
      />
    </S.Container>
  );
};

export default FieldToComment;
