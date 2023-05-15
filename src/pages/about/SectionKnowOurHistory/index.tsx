import { type FC } from 'react';

import { Image } from '@components/elements';

import { uNAgendaHref, onuAbbreviation } from '../utils';

import {
  SectionContainer,
  TextContainer,
  Title,
  Text,
  StyledLink,
  Abbreviation,
  UnderlinedText,
  UppercaseText
} from '../styles';

const SectionKnowOurHistory: FC = () => {
  const descriptionImage = 'Reflorestamento - illustration by @Storyset';

  return (
    <SectionContainer>
      <TextContainer>
        <Title>
          Conheça <UppercaseText>nossa</UppercaseText> <br />
          <UnderlinedText>história</UnderlinedText>!
        </Title>
        <Text>
          O Earth Community é uma comunidade online que tem como objetivo promover o engajamento de pessoas em causas ambientais e sociais.
        </Text>
        <Text>
          Criado a partir de um projeto acadêmico baseado na <StyledLink href={uNAgendaHref} target='_blank'>agenda 2030</StyledLink> da <Abbreviation title={onuAbbreviation}>ONU</Abbreviation>, oferecendo um espaço virtual para que os usuários possam se conectar, compartilhar ideias e iniciativas, e se mobilizarem em prol de um mundo mais sustentável.
        </Text>
        <Text>
          Além disso, a plataforma é uma oportunidade para que os usuários possam aprender mais sobre as temáticas que envolvem a <StyledLink href={uNAgendaHref} target='_blank'>agenda 2030</StyledLink> da <Abbreviation title={onuAbbreviation}>ONU</Abbreviation> e se inspirarem em outras iniciativas ao redor do mundo.
        </Text>
      </TextContainer>
      <Image
        src='/illustrations/nature/reforestation.svg'
        alt={descriptionImage}
        title={descriptionImage}
        width='600'
        height='400'
        fill
      />
    </SectionContainer>
  );
};

export default SectionKnowOurHistory;
