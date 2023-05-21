import { type FC } from 'react';

import { Image } from '@components/elements';

import * as AboutS from '../styles';

const SectionMadeForWho: FC = () => {
  const descriptionImage = 'Aperto de mão amigável - illustration by @Storyset';

  return (
    <AboutS.SectionContainer>
      <AboutS.TextContainer>
        <AboutS.Subtitle>
          Foi feito <AboutS.UppercaseText>pensando</AboutS.UppercaseText> <br />
          em <AboutS.UnderlinedText>quem</AboutS.UnderlinedText>?
        </AboutS.Subtitle>
        <AboutS.Text>
          Para qualquer pessoa que esteja genuinamente interessada em contribuir para a construção de um mundo melhor. A plataforma acolhe indivíduos de diferentes idades, origens e habilidades, desde estudantes apaixonados por questões ambientais, profissionais engajados em causas sociais, até ativistas experientes que buscam amplificar seu impacto.
        </AboutS.Text>
        <AboutS.Text>
          Se você se preocupa com o meio ambiente, está comprometido com a justiça social e deseja tomar medidas concretas para promover mudanças positivas, o Earth Community é o lugar ideal para você. Independentemente de sua localização geográfica, é possível que pessoas de todo o Brasil se conectem e se envolvam em uma comunidade virtual engajada.
        </AboutS.Text>
        <AboutS.Text>
          O Earth Community valoriza a diversidade de perspectivas e incentiva a participação ativa de todos os membros. Seja você um defensor dos direitos humanos, um entusiasta da conservação da natureza, um empreendedor social ou simplesmente alguém que deseja aprender mais e agir.
        </AboutS.Text>
      </AboutS.TextContainer>
      <Image
        src='/illustrations/people/friendly-handshake.svg'
        alt={descriptionImage}
        title={descriptionImage}
        width='600'
        height='400'
        fill
      />
    </AboutS.SectionContainer>
  );
};

export default SectionMadeForWho;
