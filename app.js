// function sendEmail() {
//   const serviceID = 'service_7zrfvbs';
//   const templateID = 'template_uw13ejr';

//   emailjs.sendForm(serviceID, templateID, '#contact-form')
//     .then(() => {
//       document.getElementById('success-message').style.display = 'block'; // Exibe mensagem de sucesso
//       document.getElementById('contact-form').reset(); // Reseta o formulário
//     }, (err) => {
//       alert('Erro ao enviar o formulário! Tente novamente mais tarde.');
//       console.error('Erro:', err);
//     });
// }

function sendEmail() {
  const form = document.getElementById('contact-form');

  if (!form.checkValidity()) {
    alert("Por favor, preencha todos os campos do formulário antes do envio.");
    return;
  }

  const formData = {
    como_deseja_acompanhamento: form.elements[0].value,
    como_gestao_adocoes: form.elements[1].value,
    produtos_relevantes: form.elements[2].value,
    organizar_centralizar_dados: form.elements[3].value,
    facilitar_compartilhamento_redes_sociais: form.elements[4].value,
    comunicacao_doadores_voluntarios: form.elements[5].value,
    secao_noticias_blog: form.elements[6].value,
    funcionalidades_essenciais: form.elements[7].value,
    secao_doacoes: form.elements[8].value,
    gerenciar_eventos_campanhas: form.elements[9].value,
    expectativa_crescimento_projeto: form.elements[10].value,
    relatorios_visualizacoes: form.elements[11].value,
    identidade_visual_missao: form.elements[12].value,
    integracao_outras_plataformas: form.elements[13].value,
    secao_denuncias: form.elements[14].value,
    gerenciamento_resgate_animais: form.elements[15].value,
    meios_contato_disponiveis: form.elements[16].value,
    area_faqs: form.elements[17].value
  };

  emailjs.send('service_7zrfvbs', 'template_uw13ejr', formData)
    .then(function (response) {
      document.getElementById('success-message').style.display = 'block';
      console.log('Email enviado com sucesso', response.status, response.text);
    }, function (error) {
      console.log('Erro ao enviar email, tente novamente mais tarde ou entre em contato.', error);
    });
}