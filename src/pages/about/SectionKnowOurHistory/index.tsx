import { type FC } from 'react';

import { Image } from '@components/elements';

import { uNAgendaHref, onuAbbreviation } from '../utils';

import * as AboutS from '../styles';

const SectionKnowOurHistory: FC = () => {
  const descriptionImage = 'Reflorestamento - illustration by @Storyset';

  return (
    <AboutS.SectionContainer>
      <AboutS.TextContainer>
        <AboutS.Title>
          Conheça <AboutS.UppercaseText>nossa</AboutS.UppercaseText> <br />
          <AboutS.UnderlinedText>história</AboutS.UnderlinedText>!
        </AboutS.Title>
        <AboutS.Text>
          O Earth Community é uma comunidade online que tem como objetivo promover o engajamento de pessoas em causas ambientais e sociais.
        </AboutS.Text>
        <AboutS.Text>
          Criado a partir de um projeto acadêmico baseado na <AboutS.StyledLink href={uNAgendaHref} target='_blank'>agenda 2030</AboutS.StyledLink> da <AboutS.Abbreviation title={onuAbbreviation}>ONU</AboutS.Abbreviation>, oferecendo um espaço virtual para que os usuários possam se conectar, compartilhar ideias e iniciativas, e se mobilizarem em prol de um mundo mais sustentável.
        </AboutS.Text>
        <AboutS.Text>
          Além disso, a plataforma é uma oportunidade para que os usuários possam aprender mais sobre as temáticas que envolvem a <AboutS.StyledLink href={uNAgendaHref} target='_blank'>agenda 2030</AboutS.StyledLink> da <AboutS.Abbreviation title={onuAbbreviation}>ONU</AboutS.Abbreviation> e se inspirarem em outras iniciativas ao redor do mundo.
        </AboutS.Text>
      </AboutS.TextContainer>
      <Image
        src='/illustrations/nature/reforestation.svg'
        alt={descriptionImage}
        title={descriptionImage}
        width='600'
        height='400'
        fill
      />
    </AboutS.SectionContainer>
  );
};

export default SectionKnowOurHistory;
