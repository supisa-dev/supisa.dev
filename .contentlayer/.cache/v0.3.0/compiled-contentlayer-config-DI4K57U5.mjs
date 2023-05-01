// contentlayer.config.js
import { defineDocumentType, makeSource } from "contentlayer/source-files";
var Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.mdx`,
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true
    },
    category: {
      type: "string",
      description: "The category of the post",
      required: true
    },
    createdDate: {
      type: "date",
      description: "The created date of the post",
      required: true
    },
    modifiedDate: {
      type: "date",
      description: "The modified date of the post",
      required: true
    },
    description: {
      type: "string",
      description: "The descript onf the post",
      required: true
    },
    image: {
      type: "string",
      description: "The image of the post",
      required: true
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "posts",
  documentTypes: [Post]
});
export {
  Post,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-DI4K57U5.mjs.map
