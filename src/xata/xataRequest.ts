import { XataClient } from "./xata";

const xataClientReq = new XataClient({
  apiKey: process.env.NEXT_PUBLIC_XATA_API_KEY,
  enableBrowser: true,
});

export { xataClientReq };