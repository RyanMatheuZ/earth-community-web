import { type FC } from 'react';

import { queryClient } from '@services/tanstackQuery';

import { resolveCategoryIcon } from '@utils/datas/categories';
import { type CategoriesOptions } from '@utils/datas/categories/utils';

import * as S from './styles';

interface GroupCardProps {
  backgroundImageURL: string;
  title: string;
  membersLength: number;
  category: CategoriesOptions;
  visitGroupLink: string;
}

const GroupCard: FC<GroupCardProps> = ({ backgroundImageURL, title, membersLength, category, visitGroupLink }) => {
  return (
    <S.Card backgroundImageURL={backgroundImageURL}>
      <S.Header>
        <S.MembersLength>
          <S.MembersIcon /> {membersLength}
        </S.MembersLength>
        <S.Category>
          {resolveCategoryIcon(category)}
        </S.Category>
      </S.Header>
      <S.Title>
        {title}
      </S.Title>
      <S.VisitGroupLink
        href={visitGroupLink}
        onClick={() => queryClient.invalidateQueries(['all-posts-by-group-id'])}
      >
        <S.VisitGroupIcon /> Visitar
      </S.VisitGroupLink>
    </S.Card>
  );
};

export default GroupCard;
