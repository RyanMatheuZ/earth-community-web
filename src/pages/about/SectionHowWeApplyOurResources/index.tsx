import { type FC } from 'react';

import { AnchorLink, Image } from '@components/elements';

import { uNAgendaHref, onuAbbreviation } from '../utils';

import * as S from '../styles';

const SectionHowWeApplyOurResources: FC = () => {
  const descriptionImage = 'Gráfico - Como aplicamos os nossos recursos?';
  const ongsAbbreviation = 'Organizações não governamentais';

  return (
    <S.SlantedContainer id='how-do-we-apply-the-our-resources?'>
      <S.SlantedSectionContainer>
        <Image
          src='/illustrations/chart/resources.svg'
          alt={descriptionImage}
          title={descriptionImage}
          width='600'
          height='400'
          fill
        />
        <S.SlantedTextContainer>
          <S.Subtitle align='right'>
            Como <S.UppercaseText>aplicamos</S.UppercaseText> os <br />
            nossos <S.UnderlinedText>recursos</S.UnderlinedText>?
          </S.Subtitle>
          <S.Text align='right'>
            O Earth Community tem um compromisso forte com a transparência e a responsabilidade na aplicação dos recursos recebidos por meio de doações. Dos recursos recebidos, 40% são destinados a despesas operacionais e administrativas, garantindo a manutenção e o desenvolvimento contínuo da plataforma.
          </S.Text>
          <S.Text align='right'>
            Os 60% restantes são repassados para <S.Abbreviation title={ongsAbbreviation}>ONGs</S.Abbreviation> que desenvolvem projetos alinhados aos objetivos da <S.StyledLink href={uNAgendaHref} target='_blank'>agenda 2030</S.StyledLink> da <S.Abbreviation title={onuAbbreviation}>ONU</S.Abbreviation> e que atuam em causas sociais e ambientais relevantes. A seleção das <S.Abbreviation title={ongsAbbreviation}>ONGs</S.Abbreviation> beneficiadas é feita com base em critérios transparentes e objetivos, como a qualidade e o impacto dos projetos desenvolvidos, a idoneidade das organizações e a sua capacidade de gestão.
          </S.Text>
          <AnchorLink elementId='who-was-it-made-for?' />
        </S.SlantedTextContainer>
      </S.SlantedSectionContainer>
    </S.SlantedContainer>
  );
};

export default SectionHowWeApplyOurResources;
