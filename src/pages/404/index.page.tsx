import { type NextPage } from 'next';

import { useAuth } from '@context/auth';

import { Head } from '@components/meta';
import { Image } from '@components/elements';

import { title, description } from './head';

import * as S from './styles';

const NotFound: NextPage = () => {
  const { user } = useAuth();

  const descriptionImage = 'Página não encontrada - illustration by @Storyset';

  const redirectLink = user ? '/feed' : '/welcome';
  const redirectText = user ? 'para o feed' : 'ao início';

  return (
    <>
      <Head
        title={title}
        description={description}
      />
      <S.Container>
        <S.Content>
          <S.Message>
            <S.StyledMessage>
              Oops...
            </S.StyledMessage>
            Página não encontrada!
          </S.Message>
          <S.RedirectLink href={redirectLink}>
            Voltar {redirectText}
          </S.RedirectLink>
        </S.Content>
        <Image
          src='/illustrations/error/404-error.svg'
          alt={descriptionImage}
          title={descriptionImage}
          width='500'
          height='500'
          fill
        />
      </S.Container>
    </>
  );
};

export default NotFound;
