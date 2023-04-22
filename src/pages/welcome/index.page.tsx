import { type NextPage } from 'next';

import { AccountButton, Image } from '@components/elements';
import { Head } from '@components/meta';
import { WelcomeHeader } from '@components/modules';

import { title, description } from './head';

import {
  Container,
  Content,
  PhraseContainer,
  SectionContainer,
  HighlightedText,
  UnderlinedText,
  ButtonContainer,
  TextButtonContainer
} from './styles';

const Welcome: NextPage = () => {
  const descriptionImage = 'Super Heroi - illustration by @Storyset';

  return (
    <>
      <Head
        title={title}
        description={description}
      />
      <Container>
        <WelcomeHeader />
        <Content>
          <SectionContainer>
            <PhraseContainer>
              <HighlightedText>Juntos</HighlightedText>, <br />
              nós podemos <br />
              <UnderlinedText>restaurar</UnderlinedText> o planeta
            </PhraseContainer>
            <Image
              src='/illustrations/people/superhero.svg'
              alt={descriptionImage}
              title={descriptionImage}
              width='375'
              height='335'
              fill
            />
          </SectionContainer>
          <ButtonContainer>
            <AccountButton />
            <TextButtonContainer>
              Começar a mudança...
            </TextButtonContainer>
          </ButtonContainer>
        </Content>
      </Container>
    </>
  );
};

export default Welcome;
