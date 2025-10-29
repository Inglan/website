import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blockContentType";
import { categoryType } from "./categoryType";
import { postType } from "./postType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [postType, categoryType, blockContentType],
};
