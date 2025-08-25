import { dataset, projectId, apiVersion } from "./env";
import { createClient } from "next-sanity";

export const client = createClient({
  projectId: projectId,
  dataset: dataset,
  apiVersion: apiVersion,
  useCdn: false,
});
