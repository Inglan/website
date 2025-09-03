import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blockContentType";
import { postTagType } from "./postTagType";
import { postType } from "./postType";
import { redirectType } from "./redirectType";
import { projectType } from "./projectType";
import { projectTagType } from "./projectTagType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    postTagType,
    postType,
    redirectType,
    projectType,
    projectTagType,
  ],
};
