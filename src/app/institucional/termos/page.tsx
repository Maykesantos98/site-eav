"use client";

import { motion } from "framer-motion";
import { useLang } from "@/constants/LangContext";

const fade = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function TermosPage() {
  const { lang } = useLang();
  const isPt = lang === "pt";

  const sections = isPt
    ? [
        { title: "1. Aceitação dos Termos", content: "Ao acessar ou utilizar os serviços do EAV Bank, incluindo nosso site, aplicativo móvel, APIs e quaisquer outros produtos e serviços disponibilizados, você concorda em cumprir e ficar vinculado a estes Termos de Uso. Se você não concorda com estes termos, não utilize nossos serviços." },
        { title: "2. Descrição dos Serviços", content: "O EAV Bank oferece serviços financeiros digitais, incluindo, mas não se limitando a: conta digital, cartão de débito e crédito internacional, transferências nacionais e internacionais, câmbio, Pix, investimentos, pagamentos e serviços para pessoas jurídicas." },
        { title: "3. Cadastro e Conta", content: "Para utilizar nossos serviços, você deve criar uma conta fornecendo informações verdadeiras, completas e atualizadas. Você é responsável por manter a confidencialidade de suas credenciais de acesso e por todas as atividades realizadas em sua conta." },
        { title: "4. Elegibilidade", content: "Os serviços do EAV Bank estão disponíveis para pessoas físicas com 18 anos ou mais e pessoas jurídicas legalmente constituídas." },
        { title: "5. Tarifas e Cobranças", content: "Algumas operações podem estar sujeitas a tarifas. Todas as tarifas aplicáveis serão informadas previamente antes da confirmação da transação. Reservamo-nos o direito de alterar tarifas mediante aviso prévio de 30 dias." },
        { title: "6. Investimentos", content: "Os investimentos disponibilizados pelo EAV Bank envolvem riscos. Rentabilidade passada não garante resultados futuros. Antes de investir, considere cuidadosamente seus objetivos financeiros e os riscos envolvidos." },
        { title: "7. Câmbio e Transferências", content: "As operações de câmbio e transferências internacionais estão sujeitas à regulamentação vigente e podem estar sujeitas a tributos e encargos governamentais." },
        { title: "8. Propriedade Intelectual", content: "Todo o conteúdo disponibilizado pelo EAV Bank, incluindo marcas, logotipos, textos, gráficos, softwares, interfaces e a tecnologia EAV7 Smart Chain, são de propriedade exclusiva da EAV7 Tecnologia e Pagamentos Ltda." },
        { title: "9. Limitação de Responsabilidade", content: "O EAV Bank não será responsável por danos indiretos, incidentais, especiais ou consequenciais decorrentes do uso ou impossibilidade de uso dos serviços, exceto nos casos previstos em lei." },
        { title: "10. Encerramento de Conta", content: "Você pode solicitar o encerramento de sua conta a qualquer momento. O EAV Bank pode encerrar ou suspender sua conta em caso de violação destes termos, atividade suspeita ou determinação judicial." },
        { title: "11. Alterações nos Termos", content: "O EAV Bank reserva-se o direito de modificar estes Termos a qualquer momento. Alterações significativas serão comunicadas com antecedência de 30 dias." },
        { title: "12. Legislação e Foro", content: "Estes termos são regidos pelas leis da República Federativa do Brasil. Para dirimir controvérsias, as partes elegem o foro da comarca de São Paulo — SP." },
      ]
    : [
        { title: "1. Acceptance of Terms", content: "By accessing or using EAV Bank services, including our website, mobile app, APIs, and any other products and services, you agree to comply with and be bound by these Terms of Use." },
        { title: "2. Description of Services", content: "EAV Bank offers digital financial services, including but not limited to: digital account, international debit and credit card, national and international transfers, foreign exchange, Pix, investments, payments, and business services." },
        { title: "3. Registration and Account", content: "To use our services, you must create an account providing true, complete, and up-to-date information. You are responsible for maintaining the confidentiality of your access credentials." },
        { title: "4. Eligibility", content: "EAV Bank services are available to individuals aged 18 or older and legally constituted legal entities." },
        { title: "5. Fees and Charges", content: "Some operations may be subject to fees. All applicable fees will be informed before transaction confirmation. We reserve the right to change fees with 30 days' prior notice." },
        { title: "6. Investments", content: "Investments made available by EAV Bank involve risks. Past performance does not guarantee future results. Before investing, carefully consider your financial goals and the risks involved." },
        { title: "7. Foreign Exchange and Transfers", content: "Foreign exchange and international transfer operations are subject to current regulations and may be subject to government taxes and charges." },
        { title: "8. Intellectual Property", content: "All content made available by EAV Bank, including trademarks, logos, texts, graphics, software, interfaces, and EAV7 Smart Chain technology, are the exclusive property of EAV7 Technology and Payments Ltd." },
        { title: "9. Limitation of Liability", content: "EAV Bank shall not be liable for indirect, incidental, special, or consequential damages arising from the use or inability to use the services, except as provided by law." },
        { title: "10. Account Termination", content: "You may request account closure at any time. EAV Bank may close or suspend your account in case of violation of these terms, suspected fraud, or judicial determination." },
        { title: "11. Changes to Terms", content: "EAV Bank reserves the right to modify these Terms at any time. Significant changes will be communicated 30 days in advance." },
        { title: "12. Governing Law", content: "These terms are governed by the laws of the Federative Republic of Brazil. To resolve disputes, the parties elect the jurisdiction of São Paulo — SP." },
      ];

  return (
    <div className="space-y-10">
      <motion.div initial="hidden" animate="visible" variants={fade}>
        <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          {isPt ? "Termos de Uso" : "Terms of Use"}
        </h1>
        <p className="mt-3 text-xs text-stone-600">
          {isPt ? "Última atualização: março de 2025" : "Last updated: March 2025"}
        </p>
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} className="space-y-8">
        {sections.map((s) => (
          <div key={s.title}>
            <h2 className="text-sm font-bold text-stone-300">{s.title}</h2>
            <p className="mt-2 text-xs leading-[1.9] text-stone-500">{s.content}</p>
          </div>
        ))}
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}
        className="rounded-xl border border-white/[0.04] bg-white/[0.01] p-4"
      >
        <p className="text-xs text-stone-600">
          {isPt
            ? "Dúvidas? Entre em contato pelo e-mail juridico@eavbank.com."
            : "Questions? Contact us at legal@eavbank.com."}
        </p>
      </motion.div>
    </div>
  );
}
