import { Client } from '@notionhq/client';
import { NotionRenderer } from '@notion-render/client';
import type { BlockObjectResponse, PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';

export const client = new Client({
  auth: process.env.NEXT_PUBLIC_NOTION_SECRET_KEY
});

export const renderer = new NotionRenderer({
  client
});

export const fetchPages = () => {
  return client.databases.query({
    database_id: process.env.NEXT_PUBLIC_NOTION_DATABASE_ID,
    filter: {
      property: 'status',
      status: {
        equals: 'published'
      }
    }
  });
};

export const fetchPageBySlug = (slug: string) => {
  return client.databases
    .query({
      database_id: process.env.NEXT_PUBLIC_NOTION_DATABASE_ID,
      filter: {
        property: 'slug',
        rich_text: {
          equals: slug
        }
      }
    })
    .then(({ results }) => results[0] as PageObjectResponse | undefined);
};

export const fetchPageBlocks = (pageId: string) => {
  return client.blocks.children
    .list({ block_id: pageId })
    .then(({ results }) => results as BlockObjectResponse[]);
};
