import { type NextPage } from 'next';

import { MenuItem } from '@mui/material';

import { useForm, type SubmitHandler } from 'react-hook-form';

import type { IContact } from '@ts/interfaces';

import { useSendEmail } from '@hooks/index';

import { Head } from '@components/meta';
import { Footer, HalfToHalfContainer, HeaderWithBackButton } from '@components/modules';
import { Field, Image, Select, SubmitButton } from '@components/elements';

import { formWhoAreYouOptions } from '@utils/datas/formWhoAreYouOptions';
import { formSubjectsOptions } from '@utils/datas/formSubjectsOptions';

import { title, description } from './head';

import { contactDefaultValues, schema } from './utils';

import * as S from './styles';

const Contact: NextPage = () => {
  const { handleSend, isLoading: isLoadingSendingMessage } = useSendEmail();

  const { control, handleSubmit, formState: { errors }, reset } = useForm<IContact>({
    mode: 'onChange',
    defaultValues: contactDefaultValues,
    resolver: schema
  });

  const descriptionImage = 'Pessoas conversando - illustration by @Storyset';

  const onSubmit: SubmitHandler<IContact> = async (contactValues) => {
    await handleSend(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      contactValues as unknown as Record<string, unknown>,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    );
    reset();
  };

  return (
    <>
      <Head
        title={title}
        description={description}
      />
      <S.Container>
        <HeaderWithBackButton />
        <S.Title>
          Gostaria de <S.UppercaseText>entrar</S.UppercaseText> <br />
          em <S.UnderlinedText>contato</S.UnderlinedText>?
        </S.Title>
        <S.Description>
          Escreva abaixo sua mensagem e dados de contato para que alguém <br /> da nossa equipe possa atendê-lo.
        </S.Description>
        <S.FormContainer>
          <form onSubmit={handleSubmit(onSubmit)}>
            <S.FormTitle>
              Preencha os campos abaixo:
            </S.FormTitle>
            <HalfToHalfContainer>
              <Field
                control={control}
                errors={errors}
                type='text'
                name='name'
                label='Nome:*'
              />
              <Field
                control={control}
                errors={errors}
                type='text'
                name='email'
                label='E-mail:*'
              />
            </HalfToHalfContainer>
            <HalfToHalfContainer>
              <Field
                control={control}
                errors={errors}
                type='text'
                name='company'
                label='Empresa:'
              />
              <Select
                control={control}
                errors={errors}
                type='text'
                name='whoAreYou'
                label='Quem é você?:*'
                style={{ maxWidth: '260px' }}
              >
                {formWhoAreYouOptions.map((option, index) => (
                  <MenuItem
                    key={`who-are-you-${option}-${index}`}
                    value={option}
                  >
                    {option}
                  </MenuItem>
                ))}
              </Select>
            </HalfToHalfContainer>
            <Select
              control={control}
              errors={errors}
              type='text'
              name='subject'
              label='Assunto:*'
            >
              {formSubjectsOptions.map((option, index) => (
                <MenuItem
                  key={`subject-${option}-${index}`}
                  value={option}
                >
                  {option}
                </MenuItem>
              ))}
            </Select>
            <Field
              control={control}
              errors={errors}
              multiline
              minRows={4}
              spellCheck={false}
              type='text'
              name='message'
              label='Mensagem:*'
            />
            <SubmitButton
              label='Enviar'
              isLoadingAction={isLoadingSendingMessage}
            />
          </form>
          <Image
            src='/illustrations/contact/get-in-touch.svg'
            alt={descriptionImage}
            title={descriptionImage}
            width='400'
            height='300'
            fill
          />
        </S.FormContainer>
        <Footer />
      </S.Container>
    </>
  );
};

export default Contact;
