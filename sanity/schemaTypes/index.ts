import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blockContentType";
import { postCategoryType } from "./postCategoryType";
import { postType } from "./postType";
import { redirectType } from "./redirectType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, postCategoryType, postType, redirectType],
};
