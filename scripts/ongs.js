const ongs = [
  {
    id: 1,
    nome: "Amigos dos Gatos SP",
    descricao:
      "ONG dedicada ao resgate e adoção de gatos abandonados. Mais de 500 gatos adotados desde 2015.",
    endereco: {
      rua: "Rua das Flores",
      numero: "123",
      cidade: "São Paulo",
      estado: "SP",
    },
    telefone: "(11) 98765-4321",
    email: "contato@amigosdosgatos.org.br",
    site: "www.amigosdosgatos.org.br",
    horarioFuncionamento: "Seg-Sáb: 9h às 18h",
  },
  {
    id: 2,
    nome: "Patinhas Urbanas",
    descricao:
      "Instituição focada no acolhimento, tratamento veterinário e adoção responsável de gatos em situação de rua.",
    endereco: {
      rua: "Avenida Paulista",
      numero: "890",
      cidade: "São Paulo",
      estado: "SP",
    },
    telefone: "(11) 97654-3210",
    email: "atendimento@patinhasurbanas.org.br",
    site: "www.patinhasurbanas.org.br",
    horarioFuncionamento: "Seg-Sex: 8h às 17h",
  },
  {
    id: 3,
    nome: "Lar Felino ABC",
    descricao:
      "ONG que atua no resgate, castração e encaminhamento para adoção de gatos na região do ABC Paulista.",
    endereco: {
      rua: "Rua das Acácias",
      numero: "45",
      cidade: "Santo André",
      estado: "SP",
    },
    telefone: "(11) 96543-2109",
    email: "contato@larfelinoabc.org.br",
    site: "www.larfelinoabc.org.br",
    horarioFuncionamento: "Ter-Dom: 10h às 16h",
  },
  {
    id: 4,
    nome: "Gatinhos da Vila",
    descricao:
      "Projeto independente que promove feiras de adoção e arrecadações para alimentação e cuidados veterinários.",
    endereco: {
      rua: "Rua Harmonia",
      numero: "320",
      cidade: "São Paulo",
      estado: "SP",
    },
    telefone: "(11) 95432-1098",
    email: "contato@gatinhosdavila.org.br",
    site: "www.gatinhosdavila.org.br",
    horarioFuncionamento: "Seg-Dom: 9h às 19h",
  },
  {
    id: 5,
    nome: "Casa dos Bigodes",
    descricao:
      "Espaço de acolhimento temporário para gatos resgatados, com foco em socialização e adoção consciente.",
    endereco: {
      rua: "Rua do Sol",
      numero: "78",
      cidade: "Campinas",
      estado: "SP",
    },
    telefone: "(19) 99876-5432",
    email: "oi@casadosbigodes.org.br",
    site: "www.casadosbigodes.org.br",
    horarioFuncionamento: "Qua-Dom: 11h às 18h",
  },
  {
    id: 6,
    nome: "Miau Esperança",
    descricao:
      "Organização voluntária que resgata, reabilita e encaminha gatos para novos lares com acompanhamento pós-adoção.",
    endereco: {
      rua: "Rua Primavera",
      numero: "156",
      cidade: "Osasco",
      estado: "SP",
    },
    telefone: "(11) 94321-5678",
    email: "miauesperanca@gmail.com",
    site: "www.miauesperanca.org.br",
    horarioFuncionamento: "Seg-Sáb: 8h às 17h",
  },
];

const container = document.getElementById("ongs-container");
const input = document.getElementById("search-ong");

const render = (ongs) => {
  const html = ongs
    .map((ong) => {
      return `
      <article class="ong-card">
        <h2>${ong.nome}</h2>
        <p class="ong-description">
          ${ong.descricao}
        </p>
        <div class="ong-info-grid">
          <p class="ong-info-item">
            📍 ${ong.endereco.rua}, ${ong.endereco.numero} - ${ong.endereco.cidade}, ${ong.endereco.estado}
          </p>
          <p class="ong-info-item">
            📞 ${ong.telefone}
          </p>
          <p class="ong-info-item">
            ✉ ${ong.email}
          </p>
          <p class="ong-info-item">
            🔗 ${ong.site}
          </p>
        </div>
        <div class="ong-hours">
          <strong>Horário de funcionamento:</strong>
          <span>${ong.horarioFuncionamento}</span>
        </div>
      </article>
    `;
    })
    .join("");

  container.innerHTML = html;
};

const filterOngs = (value) => {
  return ongs.filter((ong) =>
    ong.nome.toLocaleLowerCase().includes(value.toLocaleLowerCase()),
  );
};

input.addEventListener("input", (e) => {
  const filtered = filterOngs(e.target.value);
  render(filtered);
});

render(ongs);
