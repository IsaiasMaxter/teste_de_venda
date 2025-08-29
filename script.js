// Navegação simples (sem React)
const pages = {
  home: `
    <h1>Seu carro sempre impecável</h1>
    <p>Serviços profissionais de lavagem e detalhamento automotivo.</p>
  `,
  servicos: `
    <h1>Nossos Serviços</h1>
    <p>Lista de serviços aqui...</p>
  `,
  precos: `
    <h1>Preços e Pacotes</h1>
    <p>Pacotes com valores aqui...</p>
  `,
  contato: `
    <h1>Fale Conosco</h1>
    <form>
      <input type="text" placeholder="Nome" /><br>
      <input type="email" placeholder="E-mail" /><br>
      <textarea placeholder="Mensagem"></textarea><br>
      <button type="submit">Enviar</button>
    </form>
  `,
  agendamento: `
    <h1>Agende seu Horário</h1>
    <p>Formulário de agendamento aqui...</p>
  `
};

// Render Navbar
const navbar = document.getElementById("navbar");
navbar.innerHTML = `
  <button data-page="home">Início</button>
  <button data-page="servicos">Serviços</button>
  <button data-page="precos">Preços</button>
  <button data-page="contato">Contato</button>
  <button data-page="agendamento">Agendar</button>
`;

// Render Footer
const footer = document.getElementById("footer");
footer.innerHTML = `
  <p>© 2024 dobloF - Lavagem Automotiva. Todos os direitos reservados.</p>
  <p>(11) 99999-9999 • contato@doblof.com.br</p>
`;

// Função para trocar de página
const content = document.getElementById("content");
function loadPage(page) {
  content.innerHTML = pages[page] || pages.home;

  // Atualiza botão ativo
  document.querySelectorAll("nav button").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.page === page);
  });
}

// Eventos dos botões
document.querySelectorAll("nav button").forEach(btn => {
  btn.addEventListener("click", () => loadPage(btn.dataset.page));
});

// Carrega Home por padrão
loadPage("home");

