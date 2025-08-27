import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blockContentType";
import { postTagType } from "./postTagType";
import { postType } from "./postType";
import { redirectType } from "./redirectType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, postTagType, postType, redirectType],
};
