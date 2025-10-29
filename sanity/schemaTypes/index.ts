import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blockContentType";
import { postCategoryType } from "./posts/categoryType";
import { projectCategoryType } from "./projects/categoryType";
import { projectType } from "./projects/projectType";
import { postType } from "./posts/postType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    postType,
    postCategoryType,
    projectCategoryType,
    projectType,
    blockContentType,
  ],
};
