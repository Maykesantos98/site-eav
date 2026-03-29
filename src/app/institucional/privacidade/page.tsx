"use client";

import { motion } from "framer-motion";
import { useLang } from "@/constants/LangContext";

const fade = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function PrivacidadePage() {
  const { lang } = useLang();
  const isPt = lang === "pt";

  const sections = isPt
    ? [
        { title: "1. Introdução", content: "O EAV Bank, operado pela EAV7 Tecnologia e Pagamentos Ltda., está comprometido com a proteção da privacidade e dos dados pessoais de seus clientes e usuários, em conformidade com a LGPD (Lei nº 13.709/2018)." },
        { title: "2. Dados que Coletamos", content: "Dados de identificação (nome, CPF/CNPJ, data de nascimento), contato (e-mail, telefone, endereço), financeiros (histórico de transações), de acesso (IP, dispositivo, localização), biométricos (para autenticação) e de uso (navegação no app e site)." },
        { title: "3. Finalidade do Tratamento", content: "Abertura e manutenção de conta, processamento de transações, cumprimento de obrigações legais, prevenção a fraudes, melhoria dos serviços e comunicação sobre produtos (com consentimento)." },
        { title: "4. Base Legal", content: "Execução de contrato, cumprimento de obrigação legal ou regulatória, prevenção à fraude, legítimo interesse do controlador e consentimento do titular quando necessário." },
        { title: "5. Compartilhamento de Dados", content: "Parceiros envolvidos na prestação dos serviços (bandeiras de cartão, processadoras), órgãos reguladores, empresas do grupo EAV7 e prestadores de serviços sob obrigações de confidencialidade." },
        { title: "6. Segurança dos Dados", content: "Criptografia AES-256, controle de acesso baseado em funções, monitoramento contínuo, auditorias periódicas, treinamento de colaboradores e planos de resposta a incidentes." },
        { title: "7. Retenção de Dados", content: "Dados armazenados pelo período necessário para cumprimento das finalidades, incluindo obrigações legais e fiscais. Após o período, são eliminados ou anonimizados." },
        { title: "8. Seus Direitos (LGPD)", content: "Confirmar tratamento, acessar dados, corrigir dados, solicitar anonimização ou eliminação, solicitar portabilidade, revogar consentimento e obter informações sobre compartilhamento." },
        { title: "9. Cookies", content: "Utilizamos cookies para melhorar experiência, personalizar conteúdo, analisar tráfego e proteger contra fraudes. Gerencie suas preferências nas configurações do navegador." },
        { title: "10. Transferência Internacional", content: "Dados podem ser transferidos para outros países com salvaguardas adequadas, em conformidade com a LGPD." },
        { title: "11. Encarregado (DPO)", content: "Contato para questões de privacidade e proteção de dados: dpo@eavbank.com." },
        { title: "12. Alterações", content: "Esta política pode ser atualizada periodicamente. Alterações significativas serão comunicadas pelo app, e-mail ou site." },
      ]
    : [
        { title: "1. Introduction", content: "EAV Bank, operated by EAV7 Technology and Payments Ltd., is committed to protecting the privacy and personal data of its customers and users, in compliance with LGPD (Law No. 13.709/2018)." },
        { title: "2. Data We Collect", content: "Identification data (name, tax ID, date of birth), contact (email, phone, address), financial (transaction history), access (IP, device, location), biometric (for authentication), and usage data (app and site browsing)." },
        { title: "3. Purpose of Processing", content: "Account opening and maintenance, transaction processing, legal compliance, fraud prevention, service improvement, and product communication (with consent)." },
        { title: "4. Legal Basis", content: "Contract execution, legal or regulatory obligation, fraud prevention, legitimate interest, and consent when necessary." },
        { title: "5. Data Sharing", content: "Partners involved in service provision (card brands, processors), regulatory bodies, EAV7 group companies, and service providers under confidentiality obligations." },
        { title: "6. Data Security", content: "AES-256 encryption, role-based access control, continuous monitoring, periodic audits, employee training, and incident response plans." },
        { title: "7. Data Retention", content: "Data stored for the period necessary to fulfill purposes, including legal and tax obligations. After the period, data is securely deleted or anonymized." },
        { title: "8. Your Rights (LGPD)", content: "Confirm processing, access data, correct data, request anonymization or deletion, request portability, revoke consent, and obtain sharing information." },
        { title: "9. Cookies", content: "We use cookies to improve experience, personalize content, analyze traffic, and protect against fraud. Manage preferences in browser settings." },
        { title: "10. International Transfer", content: "Data may be transferred to other countries with appropriate safeguards, in compliance with LGPD." },
        { title: "11. DPO", content: "Contact for privacy and data protection questions: dpo@eavbank.com." },
        { title: "12. Changes", content: "This policy may be updated periodically. Significant changes will be communicated through the app, email, or website." },
      ];

  return (
    <div className="space-y-10">
      <motion.div initial="hidden" animate="visible" variants={fade}>
        <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          {isPt ? "Política de Privacidade" : "Privacy Policy"}
        </h1>
        <p className="mt-3 text-xs text-stone-600">
          {isPt ? "Última atualização: março de 2025" : "Last updated: March 2025"}
        </p>
        <div className="mt-4 inline-flex items-center gap-2 rounded-lg border border-emerald-500/15 bg-emerald-500/[0.03] px-3 py-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          <span className="text-[11px] font-semibold text-emerald-400/80">
            {isPt ? "Em conformidade com a LGPD" : "LGPD compliant"}
          </span>
        </div>
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
            ? "Para exercer seus direitos, entre em contato com nosso DPO: dpo@eavbank.com."
            : "To exercise your rights, contact our DPO: dpo@eavbank.com."}
        </p>
      </motion.div>
    </div>
  );
}
