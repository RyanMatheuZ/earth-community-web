import { type FC } from 'react';

import { Image } from '@components/elements';

import { uNAgendaHref, onuAbbreviation } from '../utils';

import * as S from './styles';
import * as AboutS from '../styles';

const SectionHowWeApplyOurResources: FC = () => {
  const descriptionImage = 'Gráfico - Como aplicamos os nossos recursos?';
  const ongsAbbreviation = 'Organizações não governamentais';

  return (
    <S.SlantedContainer>
      <S.StyledSectionContainer>
        <Image
          src='/illustrations/chart/resources.svg'
          alt={descriptionImage}
          title={descriptionImage}
          width='600'
          height='400'
          fill
        />
        <AboutS.TextContainer>
          <AboutS.Subtitle align='right'>
            Como <AboutS.UppercaseText>aplicamos</AboutS.UppercaseText> os <br />
            nossos <AboutS.UnderlinedText>recursos</AboutS.UnderlinedText>?
          </AboutS.Subtitle>
          <AboutS.Text align='right'>
            O Earth Community tem um compromisso forte com a transparência e a responsabilidade na aplicação dos recursos recebidos por meio de doações. Dos recursos recebidos, 40% são destinados a despesas operacionais e administrativas, garantindo a manutenção e o desenvolvimento contínuo da plataforma.
          </AboutS.Text>
          <AboutS.Text align='right'>
            Os 60% restantes são repassados para <AboutS.Abbreviation title={ongsAbbreviation}>ONGs</AboutS.Abbreviation> que desenvolvem projetos alinhados aos objetivos da <AboutS.StyledLink href={uNAgendaHref} target='_blank'>agenda 2030</AboutS.StyledLink> da <AboutS.Abbreviation title={onuAbbreviation}>ONU</AboutS.Abbreviation> e que atuam em causas sociais e ambientais relevantes. A seleção das <AboutS.Abbreviation title={ongsAbbreviation}>ONGs</AboutS.Abbreviation> beneficiadas é feita com base em critérios transparentes e objetivos, como a qualidade e o impacto dos projetos desenvolvidos, a idoneidade das organizações e a sua capacidade de gestão.
          </AboutS.Text>
        </AboutS.TextContainer>
      </S.StyledSectionContainer>
    </S.SlantedContainer>
  );
};

export default SectionHowWeApplyOurResources;
