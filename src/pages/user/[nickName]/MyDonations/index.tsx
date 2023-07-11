import { useState, useMemo, type FC } from 'react';

import { useTheme } from 'styled-components';

import { type ChartData } from 'chart.js';

import { useDonation } from '@hooks/index';

import { TopicSection } from '@components/modules';
import { DonationCard, DonationCardSkeleton, DoughnutChart, NoDonations, StyledModal } from '@components/elements';

import { formatCurrencyBRL } from '@utils/monetary';

import * as S from './styles';

interface MyDonationsProps {
  userId: string;
  nickNameUser: string;
}

const MyDonations: FC<MyDonationsProps> = ({ userId, nickNameUser }) => {
  const { palette } = useTheme();
  const { handleGetAllDonationsByUserId } = useDonation();
  const { data, isLoading, isRefetching } = handleGetAllDonationsByUserId(userId);

  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleToggleModal = () => {
    setIsOpenModal((prevState) => !prevState);
  };

  const isLoadingDonations = isLoading || isRefetching;

  const approved = data?.info.approvedAmount as number;
  const inProcess = data?.info.inProcessAmount as number;
  const pending = data?.info.pendingAmount as number;
  const cancelled = data?.info.cancelledAmount as number;
  const totalDonationsAmount = data?.totalData as number;

  const initialDonationsAmount = 3;
  const remainingDonationsAmount = totalDonationsAmount - initialDonationsAmount;
  const remainingDonationText = `doaç${remainingDonationsAmount > 1 ? 'ões' : 'ão'}...`;
  const modalTitle = `${remainingDonationsAmount > 1 ? 'Outras' : 'Outra'} ${remainingDonationsAmount} ${remainingDonationText}`;

  const formattedTotalDonationsAmount = useMemo(() => {
    return formatCurrencyBRL(Number(data?.info.totalAmountDonated), false);
  }, [data?.info.totalAmountDonated]);

  const firstDonations = data?.donations.slice(0, initialDonationsAmount);
  const remainingDonations = data?.donations.slice(initialDonationsAmount);

  const doughnutChartData: ChartData<'doughnut'> = {
    labels: ['Aprovado', 'Processando', 'Pendente', 'Expirado'],
    datasets: [{
      label: 'Doações',
      data: [approved, inProcess, pending, cancelled],
      backgroundColor: [palette.primary.main, palette.info.main, palette.warning.main, palette.error.main],
      hoverOffset: 5
    }]
  };

  return (
    <>
      <TopicSection
        topic={`Doações • (${totalDonationsAmount ?? '...'})`}
        topicIcon={<S.MyDonationsIcon />}
      >
        {!!data?.donations.length && (
          <>
            <S.TotalDonationsContainer>
              <S.MonetarySymbol>R$</S.MonetarySymbol>
              <S.MonetaryValue>
                {formattedTotalDonationsAmount}{' '}
                <S.Observation>(total de doações)</S.Observation>
              </S.MonetaryValue>
            </S.TotalDonationsContainer>
            <S.Container>
              <DoughnutChart data={doughnutChartData} />
              <S.DonationContainer>
                {firstDonations?.map((donation, index) => (
                  <DonationCard
                    key={`donation-card-${index}`}
                    donation={donation}
                    redirectTo={`/user/${nickNameUser}/donations/${donation.id}`}
                  />
                ))}
                {(!firstDonations?.length && isLoadingDonations) && (
                  <DonationCardSkeleton length={initialDonationsAmount} />
                )}
                {totalDonationsAmount > initialDonationsAmount && (
                  <S.SeeMoreDonationsButton onClick={handleToggleModal}>
                    Ver mais {remainingDonationsAmount} {remainingDonationText}
                  </S.SeeMoreDonationsButton>
                )}
              </S.DonationContainer>
            </S.Container>
          </>
        )}
        {!data?.donations.length && (
          <NoDonations
            message={'Não há doações até o momento,\n faça sua primeira doação!'}
          />
        )}
      </TopicSection >
      <StyledModal
        isOpen={isOpenModal}
        handleToggleModal={handleToggleModal}
        modalTitle={modalTitle}
        content={
          <S.DonationContainer>
            {remainingDonations?.map((donation, index) => (
              <DonationCard
                key={`remaining-donation-card-${index}`}
                donation={donation}
                redirectTo={`/user/${nickNameUser}/donations/${donation.id}`}
              />
            ))}
            {(!remainingDonations?.length && isLoadingDonations) && (
              <DonationCardSkeleton length={10} />
            )}
          </S.DonationContainer>
        }
      />
    </>
  );
};

export default MyDonations;
