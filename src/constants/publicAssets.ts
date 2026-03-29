import { asset } from "./basePath";

/** Ficheiros estáticos em /public */
export const publicAssets = {
  logoWhite: asset("/eavbankbrancasemfundo-logo.png"),
  logoDefault: asset("/images/eavbank-logo.png"),
  appIcon: asset("/icone.png"),
  heroBackground: asset("/promo-card-bg.png"),
  cardEav: asset("/cartão.png"),
  cardGraphene: asset("/cartão black.png"),
  cardGrabtium: asset("/cartão premium.png"),
} as const;
