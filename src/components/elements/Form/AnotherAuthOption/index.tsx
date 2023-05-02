import { type FC } from 'react';

import type { ITheme } from '@ts/interfaces';

import { AuthOptionsButton } from '@components/elements';

import { Container, StyledDivider, Text } from './styles';

const AnotherAuthOption: FC<ITheme> = ({ $themeColor }) => {
  return (
    <>
      <Container>
        <StyledDivider $themeColor={$themeColor} />
        <Text $themeColor={$themeColor}>
          Ou entre com
        </Text>
        <StyledDivider $themeColor={$themeColor} />
      </Container >
      <AuthOptionsButton />
    </>
  );
};

export default AnotherAuthOption;
