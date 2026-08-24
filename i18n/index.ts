import en from "./en";
import fa from "./fa";

export type Language = "en" | "fa";

export const languages: { code: Language; label: string; dir: "ltr" | "rtl" }[] = [
  { code: "en", label: "English", dir: "ltr" },
  { code: "fa", label: "فارسی", dir: "rtl" },
];

// Deep mutable version of the translation type that accepts any string values
type DeepStringify<T> = {
  [K in keyof T]: T[K] extends readonly (infer U)[]
    ? DeepStringify<U>[]
    : T[K] extends object
      ? DeepStringify<T[K]>
      : string;
};

export type Translations = DeepStringify<typeof en>;

export const translations: Record<Language, Translations> = {
  en: en as Translations,
  fa: fa as Translations,
};

export function getDir(lang: Language): "ltr" | "rtl" {
  return lang === "fa" ? "rtl" : "ltr";
}

export function t(lang: Language): Translations {
  return translations[lang];
}
