import { NextPage } from 'next';
import { useRouter } from 'next/router';

import { Head } from '@components/meta';
import { Footer, HeaderWithBackButton } from '@components/modules';

import SectionKnowOurHistory from './SectionKnowOurHistory';
import SectionHowWeApplyOurResources from './SectionHowWeApplyOurResources';
import SectionMadeForWho from './SectionMadeForWho';
import SectionWhatAreTheSDG from './SectionWhatAreTheSDG';
import SectionWhatAreAllTheSDG from './SectionWhatAreAllTheSDG';

import { title, description } from './head';

import * as S from './styles';

const About: NextPage = () => {
  const { push } = useRouter();

  return (
    <>
      <Head
        title={title}
        description={description}
      />
      <S.Container>
        <S.HeaderContainer>
          <HeaderWithBackButton
            handleClickBackButton={() => push('/welcome')}
            $themeColor='green'
          />
        </S.HeaderContainer>
        <SectionKnowOurHistory />
        <SectionHowWeApplyOurResources />
        <SectionMadeForWho />
        <SectionWhatAreTheSDG />
        <SectionWhatAreAllTheSDG />
        <Footer />
      </S.Container>
    </>
  );
};

export default About;
