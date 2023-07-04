import { useState, type FC } from 'react';

import { useTheme } from 'styled-components';

import { type ChartData } from 'chart.js';

import { useDonation } from '@hooks/index';

import { TopicSection } from '@components/modules';
import { DonationCard, DonationCardSkeleton, DoughnutChart, NoDonations, StyledModal } from '@components/elements';


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

  const approved = data?.filter(({ body }) => body.status === 'approved').length as number;
  const inProcess = data?.filter(({ body }) => body.status === 'in_process').length as number;
  const pending = data?.filter(({ body }) => body.status === 'pending').length as number;
  const cancelled = data?.filter(({ body }) => body.status === 'cancelled').length as number;

  const initialDonationsAmount = 3;
  const donationsAmount = data?.length ?? 0;
  const remainingDonationsAmount = donationsAmount - initialDonationsAmount;
  const remainingDonations = data?.slice(initialDonationsAmount);
  const firstDonations = data?.slice(0, initialDonationsAmount);

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
        topic={`Doações • (${data?.length ?? '...'})`}
        topicIcon={<S.MyDonationsIcon />}
      >
        {!!data?.length && (
          <S.Container>
            <DoughnutChart data={doughnutChartData} />
            <S.DonationContainer>
              {firstDonations?.map(({ body }, index) => (
                <DonationCard
                  key={`donation-card-${index}`}
                  donation={body}
                  redirectTo={`/${nickNameUser}/donations/${body.id}`}
                />
              ))}
              {(!firstDonations?.length && isLoadingDonations) && (
                <DonationCardSkeleton length={initialDonationsAmount} />
              )}
              {donationsAmount > initialDonationsAmount && (
                <S.SeeMoreDonationsButton onClick={handleToggleModal}>
                  Ver mais {remainingDonationsAmount} doaç{remainingDonationsAmount > 1 ? 'ões' : 'ão'}...
                </S.SeeMoreDonationsButton>
              )}
            </S.DonationContainer>
          </S.Container>
        )}
        {!data?.length && (
          <NoDonations
            message={'Não há doações até o momento,\n faça sua primeira doação!'}
          />
        )}
      </TopicSection >
      <StyledModal
        isOpen={isOpenModal}
        handleToggleModal={handleToggleModal}
        modalTitle={`Outras ${remainingDonationsAmount} doações`}
        content={
          <S.DonationContainer>
            {remainingDonations?.map(({ body }, index) => (
              <DonationCard
                key={`remaining-donation-card-${index}`}
                donation={body}
                redirectTo={`/${nickNameUser}/donations/${body.id}`}
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
