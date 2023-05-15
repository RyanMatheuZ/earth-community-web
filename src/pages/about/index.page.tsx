import { NextPage } from 'next';

import { Head } from '@components/meta';
import { Footer, HeaderWithBackButton } from '@components/modules';

import SectionKnowOurHistory from './SectionKnowOurHistory';
import SectionHowWeApplyOurResources from './SectionHowWeApplyOurResources';
import SectionMadeForWho from './SectionMadeForWho';

import { title, description } from './head';

import { Container, HeaderContainer } from './styles';

const About: NextPage = () => {
  return (
    <>
      <Head
        title={title}
        description={description}
      />
      <Container>
        <HeaderContainer>
          <HeaderWithBackButton $themeColor='green' />
        </HeaderContainer>
        <SectionKnowOurHistory />
        <SectionHowWeApplyOurResources />
        <SectionMadeForWho />
        <Footer />
      </Container>
    </>
  );
};

export default About;
