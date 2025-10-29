import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Blog")
    .items([
      S.documentTypeListItem("post").title("Posts"),
      S.documentTypeListItem("postcategory").title("Categories"),
      S.divider(),
      S.documentTypeListItem("project").title("Projects"),
      S.documentTypeListItem("projectcategory").title("Categories"),
    ]);

