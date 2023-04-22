import type { FC } from 'react';

import { usePathname } from 'next/navigation';
import HeadContainer from 'next/head';

import { useTheme } from 'styled-components';

import type { IHead } from '@ts/interfaces';

const Head: FC<IHead> = ({ title, description }) => {
  const pathName = usePathname();
  const { palette } = useTheme();

  const canonicalURL = 'https://earth-community.vercel.app';
  const currentURL = `${canonicalURL}${pathName}`;

  return (
    <HeadContainer>
      {/* https://nextjs.org/docs/messages/no-document-viewport-meta */}
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta name="robots" content='index, follow' />

      <meta name='description' content={description} />
      <meta name='keywords' content='earth community, comunidade, sustentabilidade, natureza, meio-ambiente' />
      <meta name='subject' content='Comunidade com foco na preservação do meio ambiente e causas sociais' />
      <meta name='url' content={currentURL} />
      <meta name='theme-color' content={palette.primary.main} />

      <meta property='og:title' content={title} />
      <meta property='og:site_name' content={title} />
      <meta property='og:url' content={currentURL} />
      <meta property='og:description' content={description} />
      <meta property='og:type' content='website' />

      <link rel='canonical' href={canonicalURL} />

      <title>{title}</title>
    </HeadContainer>
  );
};

export default Head;
