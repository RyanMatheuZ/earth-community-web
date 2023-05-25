import { type NextPage } from 'next';

import { Head } from '@components/meta';
import { FeedHeader } from '@components/modules';

import { title, description } from './head';

import * as S from './styles';

const UserProfile: NextPage = () => {
  return (
    <>
      <Head
        title={title}
        description={description}
      />
      <S.Container>
        <FeedHeader />
      </S.Container>
    </>
  );
};

export default UserProfile;
