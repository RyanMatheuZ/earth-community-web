import { useEffect, useMemo } from 'react';

import { type NextPage } from 'next';

import { useInView } from 'react-intersection-observer';

import { Head } from '@components/meta';
import { Footer, HeaderWithBackButton } from '@components/modules';
import { DonationCardSkeleton, LoadingText, NoDonations } from '@components/elements';

import { useDonation } from '@hooks/index';
import { ResponseGetAllDonations } from '@hooks/useDonation/utils';

import { formatCurrencyBRL } from '@utils/monetary';

import DonationCard from './DonationCard';

import { title, description } from './head';

import * as S from './styles';

const Transparency: NextPage = () => {
  const { ref, inView } = useInView();
  const { handleGetAllDonations, totalAmountDonated } = useDonation();
  const { data, isLoading, isRefetching, fetchNextPage } = handleGetAllDonations();

  const isLoadingAllDonations = isLoading || isRefetching;

  const hasDonations = !!data?.pages[0]?.length;

  const allDonations = useMemo(() => {
    if (!hasDonations) return [] as ResponseGetAllDonations['donations'];
    return data?.pages.reduce((acc, page) => [
      ...acc as ResponseGetAllDonations['donations'],
      ...page as ResponseGetAllDonations['donations']
    ], []);
  }, [data?.pages, hasDonations]);

  const formattedTotalDonationsAmount = useMemo(() => {
    return formatCurrencyBRL(Number(totalAmountDonated), false);
  }, [totalAmountDonated]);

  useEffect(() => {
    if (inView) fetchNextPage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <>
      <Head
        title={title}
        description={description}
      />
      <S.Container>
        <HeaderWithBackButton />
        <S.Title>
          Conexões de <S.UppercaseText>Impacto</S.UppercaseText>: <br />
          Inspire-se nas doações da <br />
          nossa <S.UnderlinedText>comunidade</S.UnderlinedText>
        </S.Title>
        <S.Description>
          Aqui, você encontrará um registro de todas as doações realizadas. Apesar de preservar a privacidade dos nossos doadores, mostramos informações parciais para que você possa se identificar e se motivar a fazer a diferença. Junte-se a nós nessa jornada de impacto positivo e seja parte da transformação que o mundo precisa. Seu apoio é fundamental!
        </S.Description>
        {hasDonations && (
          <S.TotalDonationsContainer>
            <S.MonetaryContainer>
              <S.MonetarySymbol>R$</S.MonetarySymbol>
              <S.MonetaryValue>
                {formattedTotalDonationsAmount}
              </S.MonetaryValue>
            </S.MonetaryContainer>
            <S.Observation>(total de doações)</S.Observation>
          </S.TotalDonationsContainer>
        )}
        <S.Content>
          {allDonations?.map(({ body, infoPayer }, index) => (
            <DonationCard
              key={`donation-card-${index}`}
              donation={body}
              infoPayer={infoPayer.payer}
            />
          ))}
          {isLoadingAllDonations && (
            <DonationCardSkeleton length={10} />
          )}
          {hasDonations && (
            <LoadingText
              ref={ref}
              isLoading={isLoadingAllDonations}
              loadingText='Carregando doações...'
              notLoadingText='Não há mais doações até o momento :)'
            />
          )}
        </S.Content>
        {(!hasDonations && !isLoadingAllDonations) && (
          <NoDonations
            isBackgroundWhite={false}
            message={'Não há doações até o momento,\n seja o primeiro a doar!'}
          />
        )}
        <Footer />
      </S.Container>
    </>
  );
};

export default Transparency;
