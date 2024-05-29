// fetchJsonData.js
import { LocaleType, genMessage } from "../helper";
const modules = import.meta.glob('./en/**/*.{json,ts,js}', { eager: true });


export default {
    message: {
        ...genMessage(modules, LocaleType.en),
    },
};
