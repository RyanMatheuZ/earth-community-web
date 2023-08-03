import { type FC } from 'react';

import { AnchorLink, Image } from '@components/elements';

import { onuAbbreviation } from '../utils';

import * as s from './styles';
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
          width='650'
          height='450'
          fill
        />
        <S.SlantedTextContainer>
          <S.Subtitle align='right'>
            Como <S.UppercaseText>aplicamos</S.UppercaseText> os <br />
            nossos <S.UnderlinedText>recursos</S.UnderlinedText>?
          </S.Subtitle>
          <S.Text align='right'>
            O Earth Community tem um compromisso forte com a transparência e a responsabilidade na aplicação dos recursos recebidos por meio de doações. Dos recursos recebidos, <s.ContinuousDevelopment>10%</s.ContinuousDevelopment> são destinados ao <s.ContinuousDevelopment>desenvolvimento e aprimoramento contínuo</s.ContinuousDevelopment>, garantindo a manutenção e o desenvolvimento da plataforma. Além disso, <s.Divulgation>10%</s.Divulgation> são reservados para a <s.Divulgation>divulgação de ONGs parceiras</s.Divulgation>, a fim de ampliar o alcance e o conhecimento sobre seus projetos.
          </S.Text>
          <S.Text align='right'>
            Para enfrentar <s.Emergencies>emergências e catástrofes</s.Emergencies>, <s.Emergencies>25%</s.Emergencies> dos recursos são direcionados para uma resposta imediata, visando ajudar comunidades afetadas por eventos adversos.
          </S.Text>
          <S.Text align='right'>
            Os <s.Transfer>55%</s.Transfer> restantes são <s.Transfer>repassados para ONGs</s.Transfer> que desenvolvem projetos alinhados aos objetivos da agenda 2030 da <S.Abbreviation title={onuAbbreviation}>ONU</S.Abbreviation> e que atuam em causas sociais e ambientais relevantes. A seleção das <S.Abbreviation title={ongsAbbreviation}>ONGs</S.Abbreviation> beneficiadas é feita com base em critérios transparentes e objetivos, como a qualidade e o impacto dos projetos desenvolvidos, a idoneidade das organizações e a sua capacidade de gestão.
          </S.Text>
          <AnchorLink elementId='who-was-it-made-for?' />
        </S.SlantedTextContainer>
      </S.SlantedSectionContainer>
    </S.SlantedContainer>
  );
};

export default SectionHowWeApplyOurResources;
