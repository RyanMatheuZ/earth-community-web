/* eslint-disable @typescript-eslint/no-explicit-any */
import { type NextPage, type GetServerSideProps } from 'next';

import { Head } from '@components/meta';
import { Footer, HeaderWithBackButton } from '@components/modules';
import { ShareBlogPostButton } from '@components/elements';

import { fetchPages } from '@services/notion';

import { title, description } from './head';

import * as S from './styles';

interface DataFromNotion {
  pages: {
    results: any[];
  };
}

const Blog: NextPage<DataFromNotion> = ({ pages }) => {
  return (
    <>
      <Head
        title={title}
        description={description}
      />
      <S.Container>
        <HeaderWithBackButton $themeColor='green' />
        <S.PageTitle>
          Conheça alguns <S.UppercaseText>artigos</S.UppercaseText> <br />
          do nosso <S.UnderlinedText>Blog!</S.UnderlinedText>
        </S.PageTitle>
        <S.Posts>
          {pages.results.map((page, index) => (
            <S.Card key={`post-card-${index}`}>
              <div>
                <S.ImagePreview
                  src={page.properties['image-preview'].url}
                  alt={page.properties.page.title[0].plain_text}
                  title={page.properties.page.title[0].plain_text}
                  fill
                />
                <S.Content>
                  <S.Title>
                    {page.properties.page.title[0].plain_text}
                  </S.Title>
                  <S.Description>
                    {page.properties.description.rich_text[0].plain_text}
                  </S.Description>
                </S.Content>
              </div>
              <S.ActionsContainer>
                <S.ReadPost href={`/blog/${page.properties.slug.rich_text[0].plain_text}`}>
                  <S.ReadIcon />  Ler
                </S.ReadPost>
                <ShareBlogPostButton
                  link={`${location.host}/blog/${page.properties.slug.rich_text[0].plain_text}`}
                />
              </S.ActionsContainer>
            </S.Card>
          ))}
        </S.Posts>
        <Footer />
      </S.Container>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const pages = await fetchPages();

  return {
    props: {
      pages
    }
  };
};

export default Blog;
