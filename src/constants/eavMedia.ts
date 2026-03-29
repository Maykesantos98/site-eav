import { asset } from "./basePath";

/** Imagens do EAV Bank — servidas localmente de /public/images */
export const eavImages = {
  moedas: asset("/images/moedas.png"),
  globo: asset("/images/globo.png"),
  olho: asset("/images/olho.png"),
  circleTransacoes: asset("/images/circle-transacoes.png"),
  circleVelocidade: asset("/images/circle-velocidade.png"),
  circleDisponibilidade: asset("/images/circle-disponibilidade.png"),
  chicara: asset("/images/chicara.png"),
  iphone: asset("/images/iphone.png"),
  footer1: asset("/images/footer1.png"),
  footer2: asset("/images/footer2.png"),
  pixBox: asset("/images/pix-box.png"),
} as const;
