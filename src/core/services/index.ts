import { GET, xhr } from "./util"

export const getForexRates = () => {
  let uri =
    "https://api.exchangeratesapi.io/latest?base=USD&symbols=USD,CAD,IDR,GBP,CHF,SGD,INR,MYR,JPY,KRW";
  return xhr(uri, GET);
};