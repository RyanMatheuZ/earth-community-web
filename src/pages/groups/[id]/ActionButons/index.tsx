import { useState, type FC } from 'react';

import { useRouter } from 'next/router';

import { useTheme } from 'styled-components';

import { useMutation } from '@tanstack/react-query';

import type { IGroup } from '@ts/interfaces';

import { useAuth } from '@context/auth';

import { useGroup } from '@hooks/index';
import { type ActionGroupParams } from '@hooks/useGroup/utils';

import { queryClient } from '@services/tanstackQuery';

import { ActionsModal } from '@components/elements';

import { isGroupOwner, isUserGroupMember } from '@utils/group';

import * as S from './styles';

interface ActionButtonsProps {
  group?: IGroup;
}

type OpenModal = 'closed' | 'remove' | 'delete';

const ActionButtons: FC<ActionButtonsProps> = ({ group }) => {
  const { replace } = useRouter();
  const { palette } = useTheme();
  const { user } = useAuth();
  const { handleAddMemberGroup, handleRemoveMemberGroup, handleDeleteGroup } = useGroup();

  const [isOpenModal, setIsOpenModal] = useState<OpenModal>('closed');

  const userId = user?._id as string;
  const groupId = group?._id as string;
  const groupOwnerId = group?.createdByUser.user._id as string;
  const groupMembers = group?.members as IGroup['members'];

  const modalMessage = isOpenModal === 'remove'
    ? 'Você realmente quer sair do grupo?\n Você poderá entrar novamente!'
    : 'Você realmente deseja excluir o grupo?\n Essa ação é irreversível!';

  const modalHandleConfirmButton = isOpenModal === 'remove'
    ? () => removeMemberGroupMutation({ groupId, userId })
    : () => deleteGroupMutation({ groupId, userId });

  const { mutate: addMemberGroupMutation } = useMutation(
    ({ groupId, userId }: ActionGroupParams) => handleAddMemberGroup({ groupId, userId }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['group-by-id']);
        queryClient.invalidateQueries(['group-by-user-id']);
      }
    }
  );

  const { mutate: removeMemberGroupMutation, isLoading: isLoadingRemoveMemberGroup } = useMutation(
    ({ groupId, userId }: ActionGroupParams) => handleRemoveMemberGroup({ groupId, userId }),
    {
      onSuccess: async () => {
        await Promise.all([
          queryClient.invalidateQueries(['group-by-id']),
          queryClient.invalidateQueries(['group-by-user-id'])
        ]);
        setIsOpenModal('closed');
      }
    }
  );

  const { mutate: deleteGroupMutation, isLoading: isLoadingDeleteGroup } = useMutation(
    ({ groupId, userId }: ActionGroupParams) => handleDeleteGroup({ groupId, userId }),
    {
      onSuccess: () => {
        setIsOpenModal('closed');
        replace('/groups');
      }
    }
  );

  const actions = [
    {
      label: 'Entrar no grupo',
      icon: <S.JoinTheGroupIcon />,
      color: palette.primary.main,
      action: () => addMemberGroupMutation({ groupId, userId }),
      showAction: !isGroupOwner(userId, groupOwnerId) && !isUserGroupMember(userId, groupMembers)
    },
    {
      label: 'Sair do grupo',
      icon: <S.LeaveTheGroupIcon />,
      color: palette.error.main,
      action: () => setIsOpenModal('remove'),
      showAction: !isGroupOwner(userId, groupOwnerId) && isUserGroupMember(userId, groupMembers)
    },
    {
      label: 'Excluir grupo',
      icon: <S.DeleteTheIcon />,
      color: palette.error.main,
      action: () => setIsOpenModal('delete'),
      showAction: isGroupOwner(userId, groupOwnerId)
    }
  ];

  const availableActions = actions.filter(({ showAction }) => showAction);

  return (
    <>
      <S.Container>
        {availableActions.map(({ label, icon, color, action }, index) => (
          <S.ActionButton
            key={`action-button-${label}-${index}`}
            actionBackgroundColor={color}
            onClick={action}
          >
            {icon} {label}
          </S.ActionButton>
        ))}
      </S.Container>
      <ActionsModal
        isOpen={isOpenModal !== 'closed'}
        handleToggleModal={() => setIsOpenModal('closed')}
        handleBackButton={() => setIsOpenModal('closed')}
        handleConfirmButton={modalHandleConfirmButton}
        message={modalMessage}
        isLoading={isOpenModal === 'remove' ? isLoadingRemoveMemberGroup : isLoadingDeleteGroup}
      />
    </>
  );
};

export default ActionButtons;
