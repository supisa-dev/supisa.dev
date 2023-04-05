const {defineDocumentType, makeSource} = require('contentlayer/source-files');

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.mdx`,
  fields: {
    title: {
      type: 'string',
      description: 'The title of the post',
      required: true,
    },
    date: {
      type: 'date',
      description: 'The date of the post',
      required: true,
    },
    description: {
      type: 'string',
      description: 'The descript onf the post',
      required: true,
    },
  },
  // computedFields: {
  //   url: {
  //     type: 'string',
  //     resolve: (post) => `/posts/${post._raw.flattenedPath}`,
  //   },
  // },
}));

export default makeSource({
  contentDirPath: 'posts',
  documentTypes: [Post],
});
