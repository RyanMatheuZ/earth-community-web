import { useState } from 'react';

import { type NextPage } from 'next';

import type { IGroup } from '@ts/interfaces';

import { useGroup } from '@hooks/index';

import { Head } from '@components/meta';
import { FeedHeader, TopicSection } from '@components/modules';
import { AbsoluteBackButton, StyledModal } from '@components/elements';

import { title, description } from './head';

import CreateGroupForm from './CreateGroupForm';
import OtherGroups from './OtherGroups';
import TrendingGroups from './TrendingGroups';

import * as S from './styles';

const Groups: NextPage = () => {
  const { handleGetAllGroups, handleGetAllTrendingGroups } = useGroup();

  const { data: allTrendingGroups, isLoading: isLoadingAllTrendingGroups } = handleGetAllTrendingGroups();
  const { data: allGroups, isLoading: isLoadingAllGroups } = handleGetAllGroups();

  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleToggleModal = () => {
    setIsOpenModal((prevState) => !prevState);
  };

  return (
    <>
      <Head
        title={title}
        description={description}
      />
      <S.Container>
        <FeedHeader />
        <S.Content>
          <TopicSection>
            <S.Title>
              Explore nossos grupos
            </S.Title>
            <S.Description>
              Ao participar de nossos grupos, você terá a oportunidade de compartilhar conhecimentos, ideias e experiências com membros engajados que compartilham dos mesmos valores.
            </S.Description>
            <S.Description>
              Desde tópicos abrangentes, como conservação de recursos naturais, energias renováveis e reciclagem, até questões sociais urgentes, como igualdade de gênero, justiça racial e combate à pobreza.
            </S.Description>
            <AbsoluteBackButton $themeColor='white' />
            <S.CreateGroupButton onClick={handleToggleModal}>
              <S.CreateGroupIcon />  Criar grupo
            </S.CreateGroupButton>
          </TopicSection>
          {!!allTrendingGroups?.length && (
            <TrendingGroups
              trendinGroups={allTrendingGroups as IGroup[]}
              isLoading={isLoadingAllTrendingGroups}
            />
          )}
          <OtherGroups
            groups={allGroups as IGroup[]}
            isLoading={isLoadingAllGroups}
            handleToggleModal={handleToggleModal}
          />
        </S.Content>
      </S.Container>
      <StyledModal
        isOpen={isOpenModal}
        handleToggleModal={handleToggleModal}
        modalTitle='Criação do grupo'
        content={<CreateGroupForm handleToggleModal={handleToggleModal} />}
      />
    </>
  );
};

export default Groups;
