// fetchJsonData.js
import { LocaleType, genMessage } from "../helper";
const modules = import.meta.glob('./zh_CN/**/*.{json,ts,js}', { eager: true });

console.log(genMessage(modules, LocaleType.zh_CN));


export default {
  message: {
    ...genMessage(modules, LocaleType.zh_CN),
  },
};
