// Generated by Xata Codegen 0.23.2. Please do not edit.
import { buildClient } from "@xata.io/client";
import type {
  BaseClientOptions,
  SchemaInference,
  XataRecord,
} from "@xata.io/client";

const tables = [
  {
    name: "Posts",
    columns: [
      { name: "title", type: "string" },
      { name: "description", type: "string" },
      { name: "published_date", type: "datetime" },
      { name: "content", type: "text" },
      { name: "tags", type: "multiple" },
    ],
  },
  {
    name: "portfolio",
    columns: [
      { name: "source", type: "string" },
      { name: "description", type: "text" },
      { name: "project", type: "string" },
      { name: "gh_repo", type: "string" },
      { name: "file_in_tg", type: "string" },
    ],
  },
] as const;

export type SchemaTables = typeof tables;
export type InferredTypes = SchemaInference<SchemaTables>;

export type Posts = InferredTypes["Posts"];
export type PostsRecord = Posts & XataRecord;

export type Portfolio = InferredTypes["portfolio"];
export type PortfolioRecord = Portfolio & XataRecord;

export type DatabaseSchema = {
  Posts: PostsRecord;
  portfolio: PortfolioRecord;
};

const DatabaseClient = buildClient();

const defaultOptions = {
  databaseURL:
    "https://Khurshid-s-workspace-p7n7vo.us-east-1.xata.sh/db/new-portfolio",
};

export class XataClient extends DatabaseClient<DatabaseSchema> {
  constructor(options?: BaseClientOptions) {
    super({ ...defaultOptions, ...options }, tables);
  }
}

let instance: XataClient | undefined = undefined;

export const getXataClient = () => {
  if (instance) return instance;

  instance = new XataClient();
  return instance;
};