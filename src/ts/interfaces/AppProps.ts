import { type AppProps } from 'next/app';

import { type DehydratedState } from '@tanstack/react-query';

import { type EmotionCache } from '@emotion/react';

interface IAppProps extends AppProps<{ dehydratedState: DehydratedState }> {
  emotionCache?: EmotionCache;
}

export default IAppProps;
