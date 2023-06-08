import { type FC } from 'react';

import { AnchorLink, Image } from '@components/elements';

import { uNAgendaHref, onuAbbreviation } from '../utils';

import * as S from '../styles';

const SectionKnowOurHistory: FC = () => {
  const descriptionImage = 'Reflorestamento - illustration by @Storyset';

  return (
    <S.SectionContainer>
      <S.TextContainer>
        <S.Title>
          Conheça <S.UppercaseText>nossa</S.UppercaseText> <br />
          <S.UnderlinedText>história</S.UnderlinedText>!
        </S.Title>
        <S.Text>
          O Earth Community é uma comunidade online que tem como objetivo promover o engajamento de pessoas em causas ambientais e sociais.
        </S.Text>
        <S.Text>
          Criado a partir de um projeto acadêmico baseado na <S.StyledLink href={uNAgendaHref} target='_blank'>agenda 2030</S.StyledLink> da <S.Abbreviation title={onuAbbreviation}>ONU</S.Abbreviation>, oferecendo um espaço virtual para que os usuários possam se conectar, compartilhar ideias e iniciativas, e se mobilizarem em prol de um mundo mais sustentável.
        </S.Text>
        <S.Text>
          Além disso, a plataforma é uma oportunidade para que os usuários possam aprender mais sobre as temáticas que envolvem a <S.StyledLink href={uNAgendaHref} target='_blank'>agenda 2030</S.StyledLink> da <S.Abbreviation title={onuAbbreviation}>ONU</S.Abbreviation> e se inspirarem em outras iniciativas ao redor do mundo.
        </S.Text>
        <AnchorLink elementId='how-do-we-apply-the-our-resources?' />
      </S.TextContainer>
      <Image
        src='/illustrations/nature/reforestation.svg'
        alt={descriptionImage}
        title={descriptionImage}
        width='600'
        height='400'
        fill
        loading='eager'
        priority
      />
    </S.SectionContainer>
  );
};

export default SectionKnowOurHistory;
