interface Modules {
  [key: string]: any;
}
export enum LocaleType {
  zh_CN = 'zh_CN',
  en = 'en',
}
export const genMessage = (modules: Modules, locale: LocaleType) => {
  const obj: Modules = {};
  Object.keys(modules).forEach((key) => {
    const mod = modules[key];
    const pattern = `^\\.\\/${locale}\\/(.*)\\.\\w+$`;
    const modKey = key.replace(new RegExp(pattern), '$1');
    const pageKey = modKey.replace(/\/(\w)/g, (m, c) => c.toUpperCase());
    const modValue = mod.default || mod;
    if (locale === LocaleType.zh_CN) {
      obj[pageKey] = modValue;
    } else {
      obj[modKey] = modValue;
    }
  });
  return obj;
}