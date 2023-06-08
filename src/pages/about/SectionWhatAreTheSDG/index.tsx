import { type FC } from 'react';

import { AnchorLink, Image } from '@components/elements';

import { uNAgendaHref } from '../utils';

import * as S from '../styles';

const SectionWhatAreTheSDG: FC = () => {
  const descriptionImage = 'Ilustração dos Objetivos de Desenvolvimento Sustentável';

  return (
    <S.SlantedContainer id='what-are-the-SDG?'>
      <S.SlantedSectionContainer>
        <Image
          src='/illustrations/onu/logo-sdg.svg'
          alt={descriptionImage}
          title={descriptionImage}
          width='500'
          height='500'
          fill
        />
        <S.SlantedTextContainer>
          <S.Subtitle align='right'>
            O que <S.UppercaseText>são</S.UppercaseText> <br />
            os <S.UnderlinedText>ODS</S.UnderlinedText>?
          </S.Subtitle>
          <S.Text align='right'>
            Os ODS, ou Objetivos de Desenvolvimento Sustentável, são uma série de metas estabelecidas pelas Nações Unidas para orientar ações globais em direção a um futuro mais sustentável. Eles foram adotados em setembro de 2015 por todos os Estados-membros das Nações Unidas como parte da <S.StyledLink href={uNAgendaHref} target='_blank'>agenda 2030</S.StyledLink> para o Desenvolvimento Sustentável.
          </S.Text>
          <S.Text align='right'>
            Os ODS consistem em 17 objetivos interconectados e ambiciosos, que abrangem uma ampla gama de questões sociais, econômicas e ambientais. Cada objetivo é apoiado por uma série de metas específicas, totalizando 169 metas no conjunto dos ODS.
          </S.Text>
          <S.Text align='right'>
            Esses objetivos foram estabelecidos para abordar os principais desafios globais, como a pobreza, a fome, a desigualdade, a degradação ambiental, as mudanças climáticas e a promoção da paz e da justiça. Os ODS visam criar um futuro sustentável e inclusivo para todos, incentivando ações em nível global, nacional e local para alcançar as metas estabelecidas até o ano de 2030.
          </S.Text>
          <AnchorLink elementId='what-are-all-the-SDG?' />
        </S.SlantedTextContainer>
      </S.SlantedSectionContainer>
    </S.SlantedContainer>
  );
};

export default SectionWhatAreTheSDG;
