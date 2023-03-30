const reviews = [
  {
    id: 1,
    name: "Facebook",
    job: "Midia social",
    img: "https://cdn-icons-png.flaticon.com/512/145/145802.png",
    text: "Facebook é uma rede social que conecta usuários em todo o mundo. Por meio de perfis pessoais e profissionais, é possível encontrar e conhecer pessoas, acompanhar personalidades públicas e marcas, criar, consumir e compartilhar conteúdos e muito mais.",
  },
  {
    id: 2,
    name: "Whatsapp",
    job: "App mensagem",
    img: "https://cdn-icons-png.flaticon.com/512/174/174879.png",
    text: "WhatsApp é um aplicativo multiplataforma de mensagens instantâneas e chamadas de voz para smartphones. Além de mensagens de texto, os usuários podem enviar imagens, vídeos e documentos em PDF, além de fazer ligações grátis por meio de uma conexão com a internet.",
  },
  {
    id: 3,
    name: "Linkedin",
    job: "Midia social",
    img: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
    text: "LinkedIn é uma plataforma de mídia social focada em negócios e emprego que funciona através de sites e aplicativos móveis. fundada em dezembro de 2002 e lançada em 5 de maio de 2003, de propriedade da Microsoft.",
  },
  {
    id: 4,
    name: "Instagram",
    job: "Midia social",
    img: "https://icon-library.com/images/instragram-icon/instragram-icon-16.jpg",
    text: "O Instagram é uma rede social online de compartilhamento de fotos e vídeos entre seus usuários, que permite aplicar filtros digitais e compartilhá-los em uma variedade de serviços de redes sociais, como Facebook, Twitter, Tumblr e Flickr. ",
  },
];

const imgSrcEl = document.querySelector("#img");
const authorEl = document.querySelector("#author");
const jobEl = document.querySelector("#job");
const infoEl = document.querySelector("#info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let currentId = 0;

window.addEventListener("DOMContentLoaded", function () {
  argumento();
});

function argumento() {
  const item = reviews[currentId];
  imgSrcEl.src = item.img;
  authorEl.textContent = item.name;
  jobEl.textContent = item.job;
  infoEl.textContent = item.text;
}

function prevId() {
  currentId--;
  if (currentId < 0) {
    currentId = reviews.length - 1;
  }
  argumento();
}

function nextId() {
  currentId++;
  if (currentId > reviews.length - 1) {
    currentId = 0;
  }
  argumento();
}

function randomId() {
  currentId = Math.floor(Math.random() * reviews.length);
  argumento(currentId);
}

prevBtn.addEventListener("click", prevId);
nextBtn.addEventListener("click", nextId);
randomBtn.addEventListener("click", randomId);
