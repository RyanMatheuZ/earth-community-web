import { Client } from '@notionhq/client';
import { NotionRenderer } from '@notion-render/client';
import type { BlockObjectResponse, PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';

const client = new Client({
  auth: process.env.NEXT_PUBLIC_NOTION_SECRET_KEY
});

const renderer = new NotionRenderer({
  client
});

const fetchPages = () => {
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

const fetchPageBySlug = (slug: string) => {
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

const fetchPageBlocks = (pageId: string) => {
  return client.blocks.children
    .list({ block_id: pageId })
    .then(({ results }) => results as BlockObjectResponse[]);
};

export {
  client,
  renderer,
  fetchPages,
  fetchPageBySlug,
  fetchPageBlocks
};
