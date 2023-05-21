import { NextPage } from 'next';

import { Head } from '@components/meta';
import { Footer, HeaderWithBackButton } from '@components/modules';

import SectionKnowOurHistory from './SectionKnowOurHistory';
import SectionHowWeApplyOurResources from './SectionHowWeApplyOurResources';
import SectionMadeForWho from './SectionMadeForWho';

import { title, description } from './head';

import * as S from './styles';

const About: NextPage = () => {
  return (
    <>
      <Head
        title={title}
        description={description}
      />
      <S.Container>
        <S.HeaderContainer>
          <HeaderWithBackButton $themeColor='green' />
        </S.HeaderContainer>
        <SectionKnowOurHistory />
        <SectionHowWeApplyOurResources />
        <SectionMadeForWho />
        <Footer />
      </S.Container>
    </>
  );
};

export default About;
