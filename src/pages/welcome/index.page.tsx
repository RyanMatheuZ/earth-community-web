import { type NextPage } from 'next';

import { AccountButton, Image } from '@components/elements';
import { Head } from '@components/meta';
import { Footer, WelcomeHeader } from '@components/modules';

import { title, description } from './head';

import * as S from './styles';

const Welcome: NextPage = () => {
  const descriptionImage = 'Super Heroi - illustration by @Storyset';

  return (
    <>
      <Head
        title={title}
        description={description}
      />
      <S.Container>
        <WelcomeHeader />
        <S.Content>
          <S.SectionContainer>
            <S.PhraseContainer>
              <S.HighlightedText>Juntos</S.HighlightedText>, <br />
              nós podemos <br />
              <S.UnderlinedText>restaurar</S.UnderlinedText> o planeta
            </S.PhraseContainer>
            <Image
              src='/illustrations/people/superhero.svg'
              alt={descriptionImage}
              title={descriptionImage}
              width='375'
              height='335'
              fill
            />
          </S.SectionContainer>
          <S.ButtonContainer>
            <AccountButton />
            <S.TextButtonContainer>
              Começar a mudança...
            </S.TextButtonContainer>
          </S.ButtonContainer>
        </S.Content>
        <Footer />
      </S.Container>
    </>
  );
};

export default Welcome;
