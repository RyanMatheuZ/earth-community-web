import { useState, type FC } from 'react';

import { AnchorLink, Image, StyledModal } from '@components/elements';

import { sustainableDevelopmentGoals } from '@utils/datas/sustainableDevelopmentGoals';

import Topics from '../Topics';

import * as S from './styles';
import * as s from '../styles';

const SectionWhatAreAllTheSDG: FC = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [activeSDGIndex, setIsActiveSDGIndex] = useState<number>(0);

  const handleToggleModal = () => {
    setIsOpenModal((prevState) => !prevState);
  };

  const handleOpenSDG = (sdgIndex: number) => {
    setIsActiveSDGIndex(sdgIndex);
    handleToggleModal();
  };

  return (
    <>
      <s.SectionContainer id='what-are-all-the-SDG?'>
        <S.Content>
          <s.Subtitle align='center'>
            Quais são <s.UppercaseText>todos</s.UppercaseText> <br />
            os <s.UnderlinedText>ODS</s.UnderlinedText>?
          </s.Subtitle>
          <S.SDGContainer>
            {sustainableDevelopmentGoals.map(({ title }, index) => (
              <S.SDGCard key={`sdg-${title}-${index}`}>
                <Image
                  src={`/illustrations/onu/sdg-${index + 1}.jpg`}
                  alt={title}
                  title={title}
                  width='120'
                  height='120'
                  fill
                  onClick={() => handleOpenSDG(index)}
                />
                <S.ViewIcon $sdgColor={sustainableDevelopmentGoals[index].color} />
              </S.SDGCard>
            ))}
          </S.SDGContainer>
          <AnchorLink elementId='footer' />
        </S.Content>
      </s.SectionContainer>
      <StyledModal
        isOpen={isOpenModal}
        handleToggleModal={handleToggleModal}
        modalTitle={`${activeSDGIndex + 1}. ${sustainableDevelopmentGoals[activeSDGIndex].title}`}
        content={<Topics topic={sustainableDevelopmentGoals[activeSDGIndex]} />}
      />
    </>
  );
};

export default SectionWhatAreAllTheSDG;
