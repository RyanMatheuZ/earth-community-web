import { type FC, type PropsWithChildren, type ReactNode } from 'react';

import * as S from './styles';

interface TopicSectionProps extends PropsWithChildren {
  topic?: string;
  topicIcon?: ReactNode;
}

const TopicSection: FC<TopicSectionProps> = ({ topic, topicIcon, children }) => {
  return (
    <S.Container>
      {(topic && topicIcon) && (
        <S.TopicItem>
          {topicIcon} • {topic}
        </S.TopicItem>
      )}
      {children && (
        <S.Content>
          {children}
        </S.Content>
      )}
    </S.Container>
  );
};

export default TopicSection;
