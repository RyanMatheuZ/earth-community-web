import { useState, type FC, type MouseEvent } from 'react';

import { useMutation } from '@tanstack/react-query';

import { IconButton, Menu } from '@mui/material';

import { usePost } from '@hooks/index';

import { queryClient } from '@services/tanstackQuery';

import * as S from './styles';

interface PostOptionsProps {
  postId: string;
  isPostOwner: boolean;
}

const PostOptions: FC<PostOptionsProps> = ({ postId, isPostOwner }) => {
  const { handleDeletePost } = usePost();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = !!anchorEl;

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const { mutate: deletePostMutation, isLoading: isLoadingDeletePost } = useMutation(
    (postId: string) => handleDeletePost(postId),
    {
      onSuccess: async () => {
        await Promise.all([
          queryClient.invalidateQueries(['all-posts']),
          queryClient.invalidateQueries(['all-posts-by-group-id'])
        ]);
        handleClose();
      }
    }
  );

  const options = [
    {
      label: 'Apagar publicação',
      icon: <S.DeleteIcon />,
      action: () => deletePostMutation(postId),
      showAction: isPostOwner,
      isLoading: isLoadingDeletePost
    },
  ];

  const availableOptions = options.filter(({ showAction }) => showAction);

  return (
    <>
      <IconButton
        id='menu-button'
        aria-controls={open ? 'menu-button' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <S.MoreIcon />
      </IconButton>
      <Menu
        id='menu-button'
        open={open}
        anchorEl={anchorEl}
        MenuListProps={{ 'aria-labelledby': 'menu-button' }}
        onClose={handleClose}
      >
        {availableOptions.map(({ icon, label, action, isLoading }, index) => (
          <S.StyledMenuItem
            key={`post-option-${index}`}
            onClick={action}
            disabled={isLoading}
          >
            {icon} {label}
          </S.StyledMenuItem>
        ))}
      </Menu>
    </>
  );
};

export default PostOptions;
