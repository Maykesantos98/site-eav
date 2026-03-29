import { asset } from "./basePath";

/** Ficheiros estáticos em /public */
export const publicAssets = {
  logoWhite: asset("/eavbankbrancasemfundo-logo.png"),
  logoDefault: asset("/images/eavbank-logo.png"),
  cardEav: asset("/cartão.png"),
  cardGraphene: asset("/cartão black.png"),
  cardGrabtium: asset("/cartão premium.png"),
} as const;
