import {defineDocumentType, makeSource} from 'contentlayer/source-files';

export const Post = defineDocumentType(() => ({
  name: 'Post',
  contentType: 'mdx',
  filePathPattern: `**/*.mdx`,
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
    url: {
      type: 'string',
      resolve: (doc) => `/posts/${doc._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  contentDirPath: 'posts',
  documentTypes: [Post],
});
