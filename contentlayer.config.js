import {defineDocumentType, makeSource} from 'contentlayer/source-files';
import readingTime from 'reading-time';

export const Blog = defineDocumentType(() => ({
  name: 'Blog',
  contentType: 'mdx',
  filePathPattern: `blog/**/*.mdx`,
  fields: {
    title: {
      type: 'string',
      description: 'The title of the post',
      required: true,
    },
    category: {
      type: 'string',
      description: 'The category of the post',
      required: true,
    },
    createdDate: {
      type: 'date',
      description: 'The created date of the post',
      required: true,
    },
    modifiedDate: {
      type: 'date',
      description: 'The modified date of the post',
      required: true,
    },
    tags: {
      type: 'list',
      of: {type: 'string'},
      description: 'The tag of the post',
      required: true,
    },
    image: {
      type: 'string',
      description: 'The image of the post',
      required: true,
    },
  },
  computedFields: {
    readingTime: {type: 'json', resolve: (doc) => readingTime(doc.body.raw)},
    url: {
      type: 'string',
      resolve: (doc) => doc._raw.sourceFileName.replace('.mdx', ''),
    },
  },
}));
export const Note = defineDocumentType(() => ({
  name: 'Note',
  contentType: 'mdx',
  filePathPattern: `note/**/*.mdx`,
  fields: {
    title: {
      type: 'string',
      description: 'The title of the post',
      required: true,
    },
    createdDate: {
      type: 'date',
      description: 'The created date of the post',
      required: true,
    },
    modifiedDate: {
      type: 'date',
      description: 'The modified date of the post',
      required: true,
    },
  },
  computedFields: {
    id: {
      type: 'string',
      resolve: (doc) => doc._raw.sourceFileName.replace('.mdx', ''),
    },
  },
}));

export default makeSource({
  contentDirPath: 'mdx',
  documentTypes: [Blog, Note],
});
