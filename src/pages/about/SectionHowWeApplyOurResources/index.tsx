import { type FC } from 'react';

import { Image } from '@components/elements';

import { uNAgendaHref, onuAbbreviation } from '../utils';

import { StyledSectionContainer, SlantedContainer } from './styles';
import {
  TextContainer,
  Subtitle,
  Text,
  StyledLink,
  Abbreviation,
  UnderlinedText,
  UppercaseText
} from '../styles';

const SectionHowWeApplyOurResources: FC = () => {
  const descriptionImage = 'Gráfico - Como aplicamos os nossos recursos?';
  const ongsAbbreviation = 'Organizações não governamentais';

  return (
    <SlantedContainer>
      <StyledSectionContainer>
        <Image
          src='/illustrations/chart/resources.svg'
          alt={descriptionImage}
          title={descriptionImage}
          width='600'
          height='400'
          fill
        />
        <TextContainer>
          <Subtitle align='right'>
            Como <UppercaseText>aplicamos</UppercaseText> os <br />
            nossos <UnderlinedText>recursos</UnderlinedText>?
          </Subtitle>
          <Text align='right'>
            O Earth Community tem um compromisso forte com a transparência e a responsabilidade na aplicação dos recursos recebidos por meio de doações. Dos recursos recebidos, 65% são destinados a despesas operacionais e administrativas, garantindo a manutenção e o desenvolvimento contínuo da plataforma.
          </Text>
          <Text align='right'>
            Os 35% restantes são repassados para <Abbreviation title={ongsAbbreviation}>ONGs</Abbreviation> que desenvolvem projetos alinhados aos objetivos da <StyledLink href={uNAgendaHref} target='_blank'>agenda 2030</StyledLink> da <Abbreviation title={onuAbbreviation}>ONU</Abbreviation> e que atuam em causas sociais e ambientais relevantes. A seleção das <Abbreviation title={ongsAbbreviation}>ONGs</Abbreviation> beneficiadas é feita com base em critérios transparentes e objetivos, como a qualidade e o impacto dos projetos desenvolvidos, a idoneidade das organizações e a sua capacidade de gestão.
          </Text>
        </TextContainer>
      </StyledSectionContainer>
    </SlantedContainer>
  );
};

export default SectionHowWeApplyOurResources;
