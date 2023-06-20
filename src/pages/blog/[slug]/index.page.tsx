/* eslint-disable @typescript-eslint/no-explicit-any */
import { type NextPage, type GetServerSideProps } from 'next';

import hljs from '@notion-render/hljs-plugin';
import bookmark from '@notion-render/bookmark-plugin';

import { Head } from '@components/meta';
import { Footer, HeaderWithBackButton } from '@components/modules';

import { renderer, fetchPageBySlug, fetchPageBlocks } from '@services/notion';

import { head } from './head';

import * as S from './styles';

interface DataFromNotion {
  blocks: any[];
  html: string;
}

const BlogSlug: NextPage<DataFromNotion> = ({ blocks, html }) => {
  const { title, description } = head(
    blocks[0].heading_1.rich_text[0].plain_text,
    blocks[3].paragraph.rich_text[0].plain_text
  );

  return (
    <>
      <Head
        title={title}
        description={description}
      />
      <S.Container>
        <HeaderWithBackButton $themeColor='green' />
        <S.Template dangerouslySetInnerHTML={{ __html: html }} />
        <Footer />
      </S.Container>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const post = await fetchPageBySlug(params?.slug as string);

  if (!post) {
    return {
      redirect: {
        destination: '/404',
        permanent: false
      },
      props: {},
    };
  }

  const blocks = await fetchPageBlocks(post.id);

  renderer.use(hljs({
    language: 'pt-BR'
  }));
  renderer.use(bookmark(null as any));

  const html = await renderer.render(...blocks);

  return {
    props: {
      blocks,
      html
    }
  };
};

export default BlogSlug;
