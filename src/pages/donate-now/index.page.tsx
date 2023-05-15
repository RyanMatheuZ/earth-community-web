/* eslint-disable react/jsx-key */
import { useState } from 'react';

import { type NextPage } from 'next';

import { useForm, FormProvider, type SubmitHandler } from 'react-hook-form';

import { useDonation } from '@hooks/index';

import { Head } from '@components/meta';
import { HeaderWithBackButton } from '@components/modules';

import DonationAddressDataFields from './DonationAddressDataFields';
import DonationAmounts from './DonationAmounts';
import DonationFinalStep from './DonationFinalStep';
import DonationPersonalDataFields from './DonationPersonalDataFields';
import DonationStepper from './DonationStepper';

import { title, description } from './head';

import { schema, giverDefaultValues, type GiverDefaultValues } from './utils';

import { Container, Content, Title, Text, MessageSection, FormSection, StyledForm } from './styles';

const DonateNow: NextPage = () => {
  const [activeStep, setActiveStep] = useState(0);

  const { donation, isLoadingDonation, handleCreateDonation } = useDonation();

  const stepComponents = [
    <DonationAmounts />,
    <DonationPersonalDataFields />,
    <DonationAddressDataFields />,
    <DonationFinalStep
      donation={donation}
      isLoadingDonation={isLoadingDonation}
    />
  ];

  const methods = useForm({
    mode: 'onChange',
    defaultValues: giverDefaultValues,
    resolver: schema
  });

  const onSubmit: SubmitHandler<GiverDefaultValues> = (giverValues) => {
    handleCreateDonation(({
      transaction_amount: +giverValues.transactionAmount,
      description: `Doação Earth Community - R$ ${giverValues.transactionAmount}`,
      payment_method_id: 'pix',
      payer: {
        email: giverValues.email,
        first_name: giverValues.firstName,
        last_name: giverValues.surname,
        identification: {
          type: 'CPF',
          number: giverValues.cpf
        }
      },
      address: {
        zip_code: giverValues.zipCode,
        street_name: giverValues.streetName,
        street_number: giverValues.streetNumber,
        neighborhood: giverValues.district,
        city: giverValues.city,
        federal_unit: giverValues.state
      }
    }));
  };

  return (
    <>
      <Head
        title={title}
        description={description}
      />
      <Container>
        <HeaderWithBackButton $themeColor='white' />
        <Content>
          <MessageSection>
            <Title>
              Conecte-se pela <br /> mudança
            </Title>
            <Text>
              Com sua ajuda, podemos promover o desenvolvimento sustentável e ações que visem a redução dos impactos ambientais e sociais!
            </Text>
          </MessageSection>
          <FormSection>
            <FormProvider {...methods}>
              <StyledForm onSubmit={methods.handleSubmit(onSubmit)}>
                <DonationStepper
                  activeStep={activeStep}
                  setActiveStep={setActiveStep}
                >
                  {stepComponents[activeStep]}
                </DonationStepper>
              </StyledForm>
            </FormProvider>
          </FormSection>
        </Content>
      </Container>
    </>
  );
};

export default DonateNow;
