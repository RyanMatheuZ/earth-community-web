import { type FC } from 'react';

import * as S from './styles';

import { type SustainableDevelopmentGoal } from '@utils/datas/sustainableDevelopmentGoals/utils';

interface TopicsProps {
  topic: SustainableDevelopmentGoal;
}

const Topics: FC<TopicsProps> = ({ topic: { color, subtitle, topics, notes } }) => {
  return (
    <>
      <S.Subtitle $sdgColor={color}>
        {subtitle}
      </S.Subtitle>
      <S.TopicContainer>
        {topics.map(({ goal, description, title, subtopics }, index) => (
          <div key={`topic-${index}`}>
            {(goal && description) && (
              <>
                <S.Goal $sdgColor={color}>{goal}</S.Goal>
                <S.Description>{description}</S.Description>
              </>
            )}
            {(title && subtopics?.length) && (
              <S.SubtopicContainer>
                <S.SubtopicTitle $sdgColor={color}>{title}</S.SubtopicTitle>
                {subtopics.map(({ goal, description }, index) => (
                  <div key={`subtopic-${index}`}>
                    <S.Goal $sdgColor={color}>{goal}</S.Goal>
                    <S.Description>{description}</S.Description>
                  </div>
                ))}
              </S.SubtopicContainer>
            )}
          </div>
        ))}
      </S.TopicContainer>
      {notes?.map(({ marking, description }, index) => (
        <S.NoteContainer key={`note-${description}-${index}`}>
          <S.NoteMarking>
            {marking}
          </S.NoteMarking>
          <S.NoteDescription>
            {description}
          </S.NoteDescription>
        </S.NoteContainer>
      ))}
    </>
  );
};

export default Topics;
