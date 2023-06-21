import { type FC } from 'react';

import { useRouter } from 'next/router';

import { useTheme } from 'styled-components';

import { useMutation } from '@tanstack/react-query';

import type { IGroup } from '@ts/interfaces';

import { useAuth } from '@context/auth';

import { useGroup } from '@hooks/index';
import { type ActionGroupParams } from '@hooks/useGroup/utils';

import { queryClient } from '@services/tanstackQuery';

import { isGroupOwner, isUserGroupMember } from '@utils/group';

import * as S from './styles';

interface ActionButtonsProps {
  group: IGroup;
}

const ActionButtons: FC<ActionButtonsProps> = ({ group }) => {
  const { replace } = useRouter();
  const { palette } = useTheme();
  const { user } = useAuth();

  const userId = user?._id as string;
  const groupId = group?._id as string;
  const groupOwnerId = group?.createdByUser.user._id as string;
  const groupMembers = group?.members as IGroup['members'];

  const { handleAddMemberGroup, handleRemoveMemberGroup, handleDeleteGroup } = useGroup();

  const { mutate: addMemberGroupMutation } = useMutation(
    ({ groupId, userId }: ActionGroupParams) => handleAddMemberGroup({ groupId, userId }),
    {
      onSuccess: () => queryClient.invalidateQueries(['group-by-id'])
    }
  );

  const { mutate: removeMemberGroupMutation } = useMutation(
    ({ groupId, userId }: ActionGroupParams) => handleRemoveMemberGroup({ groupId, userId }),
    {
      onSuccess: () => queryClient.invalidateQueries(['group-by-id'])
    }
  );

  const { mutate: deleteGroupMutation } = useMutation(
    ({ groupId, userId }: ActionGroupParams) => handleDeleteGroup({ groupId, userId }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['all-groups']);
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
      action: () => removeMemberGroupMutation({ groupId, userId }),
      showAction: !isGroupOwner(userId, groupOwnerId) && isUserGroupMember(userId, groupMembers)
    },
    {
      label: 'Excluir grupo',
      icon: <S.DeleteTheIcon />,
      color: palette.error.main,
      action: () => deleteGroupMutation({ groupId, userId }),
      showAction: isGroupOwner(userId, groupOwnerId)
    }
  ];

  const availableActions = actions.filter(({ showAction }) => showAction);

  return (
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
  );
};

export default ActionButtons;
