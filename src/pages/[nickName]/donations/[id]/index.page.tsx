import { type NextPage, type GetServerSideProps } from 'next';
import { useRouter } from 'next/router';

import type { IDonation } from '@ts/interfaces';

import { useDonation } from '@hooks/index';

import { Head } from '@components/meta';
import { FeedHeader, TopicSection } from '@components/modules';
import { BackIcon, QRCode } from '@components/elements';

import { resolveLabelStatus, resolveStatusColor, resolveSrcQRCode } from '@utils/donation';
import { middleEndianFormat } from '@utils/date/middleEndianFormat';

import DonationInfoSkeleton from './DonationInfoSkeleton';

import { head } from './head';

import * as S from './styles';

interface DonationsIdProps {
  donationId: number;
}

const DonationsId: NextPage<DonationsIdProps> = ({ donationId }) => {
  const { back } = useRouter();
  const { handleGetDonationById } = useDonation();

  const { data, isLoading } = handleGetDonationById(donationId);

  const { title, description } = head(donationId);

  return (
    <>
      <Head
        title={title}
        description={description}
      />
      <S.Container>
        <FeedHeader />
        <S.Content>
          <TopicSection
            topic={`Doação ${donationId}`}
            topicIcon={<S.DonationsIcon />}
          >
            <S.InfoContainer>
              {isLoading && <DonationInfoSkeleton />}
              {!isLoading && (
                <S.QRCodeDetails>
                  <S.Status donationStatusColor={resolveStatusColor(data?.body.status as IDonation['status'])}>
                    {resolveLabelStatus(data?.body.status as IDonation['status'] || 'cancelled')}
                  </S.Status>
                  <S.DateValue>
                    <S.DateLabel donationStatusColor={resolveStatusColor(data?.body.status as IDonation['status'])}>
                      Criação:
                    </S.DateLabel>
                    {' '}{middleEndianFormat(new Date(data?.body.date_created as string), true)}
                  </S.DateValue>
                  {!!data?.body.date_approved && (
                    <S.DateValue>
                      <S.DateLabel donationStatusColor={resolveStatusColor(data?.body.status as IDonation['status'])}>
                        Aprovação:
                      </S.DateLabel>
                      {' '}{middleEndianFormat(new Date(data?.body.date_approved), true)}
                    </S.DateValue>
                  )}
                </S.QRCodeDetails>
              )}
              <QRCode
                src={
                  resolveSrcQRCode(
                    data?.body.status as IDonation['status'],
                    `data:image/jpeg;base64, ${data?.body.point_of_interaction.transaction_data.qr_code_base64}`
                  )
                }
                description={data?.body.description as string}
                transactionCode={data?.body.point_of_interaction.transaction_data.qr_code as string}
                isLoading={isLoading}
              />
              <S.BackButton onClick={back}>
                <BackIcon $themeColor='white' />
              </S.BackButton>
            </S.InfoContainer>
          </TopicSection>
        </S.Content>
      </S.Container>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  return {
    props: {
      donationId: query.id
    }
  };
};

export default DonationsId;
