import { type FC, type PropsWithChildren } from 'react';

import { type SearchResults } from '@hooks/useSearch/utils';

import { Image, UserPictureProfile } from '@components/elements';

import * as S from './styles';

interface Results extends PropsWithChildren {
  results: SearchResults;
  isLoading: boolean;
  handleToggleModal: () => void;
}

const Results: FC<Results> = ({ results, isLoading, handleToggleModal, children }) => {
  const descriptionImage = 'Turbina de vento - illustration by @Storyset';

  return (
    <S.Container>
      {children}
      {results?.map(({ info, _id, image, name }, index) => (
        <S.Card key={`result-${index}`}>
          <UserPictureProfile
            pictureProfileSRC={info ? info.pictureProfile : image}
            userName={info ? `${info.firstName} ${info.surname}` : name}
            width='50'
            height='50'
          />
          <S.Info>
            <div>
              <S.Name>{info ? `${info.firstName} ${info.surname}` : name}</S.Name>
              <S.Identifier>{info ? 'Pessoa' : 'Grupo'}</S.Identifier>
            </div>
            <S.VisitLink
              href={info ? `${info.nickName}` : `/groups/${_id}`}
              onClick={handleToggleModal}
            >
              <S.VisitIcon /> Visitar
            </S.VisitLink>
          </S.Info>
        </S.Card>
      ))}
      {(!results?.length && !isLoading) && (
        <>
          <Image
            src='/illustrations/nature/wind-turbine.svg'
            alt={descriptionImage}
            title={descriptionImage}
            width='250'
            height='250'
            fill
          />
          <S.NoResultsMessage>Sem resultados...</S.NoResultsMessage>
        </>
      )}
      {isLoading && Array.from({ length: 10 }).map((_, index) => (
        <S.CardSkeleton key={`card-skeleton-${index}`} />
      ))}
    </S.Container>
  );
};

export default Results;
