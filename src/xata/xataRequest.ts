import { XataClient, getXataClient } from "./xata";

export const xataServerReq = getXataClient();

export const xataClientReq = new XataClient({
  apiKey: process.env.XATA_API_KEY,
  enableBrowser: true,
});
