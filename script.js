/* ============================================
   CONVITE DIGITAL — VILMA & ZOLA
   Configuração do WhatsApp
   ============================================ */

// ---------------------------------------------
// ALTERE AQUI: número de WhatsApp do proprietário
// Formato: código do país + número, sem "+", sem espaços
// Exemplo: "244949723172"
// ---------------------------------------------
const WHATSAPP_NUMBER = "244949723172";

// ---------------------------------------------
// ALTERE AQUI: mensagem automática enviada ao clicar no botão
// ---------------------------------------------
const WHATSAPP_MESSAGE =
  "Olá! Com muita alegria, confirmo a minha presença para celebrar convosco este momento tão especial. Será uma honra fazer parte deste dia!";

// ============================================
// Não é necessário alterar nada abaixo desta linha
// ============================================

(function () {
  "use strict";

  const botao = document.getElementById("whatsapp-btn");
  const link =
    "https://wa.me/" +
    WHATSAPP_NUMBER +
    "?text=" +
    encodeURIComponent(WHATSAPP_MESSAGE);

  if (botao) {
    botao.setAttribute("href", link);
    botao.setAttribute("target", "_blank");
  }
})();
