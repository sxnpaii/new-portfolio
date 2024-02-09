import { XataClient } from "./xata";
const envKey = process.env.NEXT_PUBLIC_XATA_API_KEY;

const xataClientReq = new XataClient({
  apiKey: envKey,
  enableBrowser: true,
});


export { xataClientReq };
