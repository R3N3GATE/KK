const ideas = [
  {
    number: "01",
    title: "Caixa das Memórias",
    short: "Uma caixa personalizada com fotos, cartas e pequenas lembranças.",
    description: "Crie uma caixa especial reunindo momentos importantes do relacionamento. Personalize cada detalhe e escreva pequenas mensagens para tornar o presente único.",
    materials: ["Caixa decorativa", "Fotografias", "Cartões ou folhas", "Fitas e pequenos detalhes"],
    steps: ["Escolha as fotos e lembranças.", "Escreva mensagens para cada momento.", "Decore a caixa.", "Organize tudo de forma criativa."]
  },
  {
    number: "02",
    title: "Carta Especial",
    short: "Uma carta feita à mão para transformar sentimentos em palavras.",
    description: "Um presente simples, mas cheio de significado. Escreva uma carta contando momentos que marcaram a relação e desejos para o futuro.",
    materials: ["Papel bonito", "Envelope", "Caneta", "Elementos decorativos"],
    steps: ["Escolha um papel.", "Escreva a mensagem com calma.", "Decore o envelope.", "Guarde a carta em um local especial."]
  },
  {
    number: "03",
    title: "Álbum de Fotos",
    short: "Um álbum contando a história de vocês através de fotografias.",
    description: "Organize fotografias em uma sequência que conte uma história. Em cada página, acrescente uma pequena descrição ou lembrança.",
    materials: ["Álbum", "Fotos", "Canetas", "Adesivos decorativos"],
    steps: ["Selecione as fotos.", "Organize-as por momentos.", "Adicione descrições.", "Finalize a decoração."]
  },
  {
    number: "04",
    title: "Kit de Surpresas",
    short: "Vários pequenos presentes reunidos em um único momento.",
    description: "Monte um conjunto de pequenos itens escolhidos de acordo com os gostos da pessoa. O objetivo é transformar a abertura do presente numa experiência.",
    materials: ["Caixa", "Pequenos presentes", "Papel de embrulho", "Cartões"],
    steps: ["Escolha os itens.", "Crie uma ordem para as surpresas.", "Embale cada item.", "Monte a caixa final."]
  },
  {
    number: "05",
    title: "Pote de Mensagens",
    short: "Mensagens curtas para serem lidas em diferentes momentos.",
    description: "Prepare vários pequenos papéis com frases, memórias ou mensagens positivas. A pessoa poderá escolher uma mensagem sempre que quiser.",
    materials: ["Pote ou frasco", "Papéis", "Caneta", "Fita"],
    steps: ["Corte os papéis.", "Escreva as mensagens.", "Dobre cada papel.", "Coloque tudo no pote e decore."]
  },
  {
    number: "06",
    title: "Noite Temática",
    short: "Uma experiência planejada em casa com detalhes personalizados.",
    description: "Escolha um tema e transforme o ambiente com decoração, música e uma atividade especial. O presente é a experiência criada.",
    materials: ["Decoração", "Música", "Comida ou lanche", "Itens relacionados ao tema"],
    steps: ["Escolha o tema.", "Prepare o ambiente.", "Organize a atividade.", "Revele a surpresa."]
  },
  {
    number: "07",
    title: "Playlist de Memórias",
    short: "Uma seleção de músicas associadas a momentos especiais.",
    description: "Monte uma playlist e escreva uma pequena explicação para cada música, contando por que ela foi escolhida.",
    materials: ["Telemóvel ou computador", "Aplicação de música", "Cartão com QR Code opcional"],
    steps: ["Escolha as músicas.", "Organize a sequência.", "Escreva as pequenas histórias.", "Partilhe a playlist."]
  },
  {
    number: "08",
    title: "Vale-Presentes",
    short: "Cupons personalizados para experiências e momentos juntos.",
    description: "Crie cartões que possam ser trocados por experiências simples e divertidas, como escolher um filme, preparar um lanche ou fazer uma atividade juntos.",
    materials: ["Cartões", "Canetas", "Envelope", "Elementos decorativos"],
    steps: ["Crie os cupons.", "Defina o que cada um representa.", "Decore os cartões.", "Coloque-os no envelope."]
  }
];

const gallery = [
  ["01", "Momento especial", "Escreva aqui a descrição desta imagem."],
  ["02", "Presente personalizado", "Escreva aqui a descrição desta imagem."],
  ["03", "Detalhes com carinho", "Escreva aqui a descrição desta imagem."],
  ["04", "Surpresa", "Escreva aqui a descrição desta imagem."],
  ["05", "Memórias", "Escreva aqui a descrição desta imagem."],
  ["06", "Uma ideia diferente", "Escreva aqui a descrição desta imagem."]
];

const ideasGrid = document.getElementById("ideasGrid");
const galleryGrid = document.getElementById("galleryGrid");

ideasGrid.innerHTML = ideas.map((idea, index) => `
  <article class="idea-card reveal" data-index="${index}">
    <div class="idea-photo image-placeholder">
      <span class="idea-number">${idea.number}</span>
      <!-- COLOQUE A FOTO DA IDEIA ${idea.number} AQUI -->
      <span>♡</span>
      <small>FOTO DA IDEIA ${idea.number}</small>
    </div>
    <div class="idea-info">
      <h3>${idea.title}</h3>
      <p>${idea.short}</p>
    </div>
  </article>
`).join("");

galleryGrid.innerHTML = gallery.map(item => `
  <article class="gallery-item reveal">
    <div class="gallery-photo image-placeholder">
      <!-- COLOQUE A IMAGEM ${item[0]} AQUI -->
      <span>♡</span>
      <small>IMAGEM ${item[0]}</small>
    </div>
    <h3>${item[1]}</h3>
    <p>${item[2]}</p>
  </article>
`).join("");

const ideaModal = document.getElementById("ideaModal");
const ideaDetail = document.getElementById("ideaDetail");

function openIdea(index) {
  const idea = ideas[index];
  ideaDetail.innerHTML = `
    <div class="detail-photo image-placeholder">
      <!-- COLOQUE A FOTO DA IDEIA ${idea.number} AQUI -->
      <span>♡</span>
      <small>FOTO DA IDEIA ${idea.number}</small>
    </div>
    <div class="detail-content">
      <p class="eyebrow">IDEIA ${idea.number}</p>
      <h2>${idea.title}</h2>
      <p>${idea.description}</p>
      <div class="detail-columns">
        <div>
          <h3>Materiais necessários</h3>
          <ul>${idea.materials.map(x => `<li>${x}</li>`).join("")}</ul>
        </div>
        <div>
          <h3>Como fazer</h3>
          <ol>${idea.steps.map(x => `<li>${x}</li>`).join("")}</ol>
        </div>
      </div>
    </div>
  `;
  ideaModal.classList.add("open");
  ideaModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeIdea() {
  ideaModal.classList.remove("open");
  ideaModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

document.querySelectorAll(".idea-card").forEach(card => {
  card.addEventListener("click", () => openIdea(Number(card.dataset.index)));
});

document.getElementById("modalClose").addEventListener("click", closeIdea);
document.getElementById("backBtn").addEventListener("click", closeIdea);
ideaModal.addEventListener("click", e => {
  if (e.target === ideaModal) closeIdea();
});

const menuBtn = document.getElementById("menuBtn");
const sideMenu = document.getElementById("sideMenu");
const overlay = document.getElementById("menuOverlay");

function toggleMenu(open) {
  sideMenu.classList.toggle("open", open);
  overlay.classList.toggle("show", open);
  menuBtn.setAttribute("aria-expanded", String(open));
  sideMenu.setAttribute("aria-hidden", String(!open));
}

menuBtn.addEventListener("click", () => toggleMenu(true));
document.getElementById("closeMenu").addEventListener("click", () => toggleMenu(false));
overlay.addEventListener("click", () => toggleMenu(false));
document.querySelectorAll(".menu-link").forEach(link => link.addEventListener("click", () => toggleMenu(false)));

const topBtn = document.getElementById("topBtn");
topBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: .12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

/* Autenticação DEMO:
   Esta versão guarda a sessão no navegador usando localStorage.
   Para um site real com várias pessoas, substitua esta parte por um backend
   e um sistema de autenticação/banco de dados. */
const authModal = document.getElementById("authModal");
const authContent = document.getElementById("authContent");
const authArea = document.getElementById("authArea");
const commentsList = document.getElementById("commentsList");
const USERS_KEY = "kk_users";
const SESSION_KEY = "kk_session";
const COMMENTS_KEY = "kk_comments";

function getUsers() { return JSON.parse(localStorage.getItem(USERS_KEY) || "[]"); }
function getComments() { return JSON.parse(localStorage.getItem(COMMENTS_KEY) || "[]"); }
function getSession() { return JSON.parse(localStorage.getItem(SESSION_KEY) || "null"); }

function openAuth(mode = "login") {
  authModal.classList.add("open");
  authModal.setAttribute("aria-hidden", "false");
  renderAuth(mode);
}

function closeAuth() {
  authModal.classList.remove("open");
  authModal.setAttribute("aria-hidden", "true");
}

document.getElementById("authClose").addEventListener("click", closeAuth);
authModal.addEventListener("click", e => {
  if (e.target === authModal) closeAuth();
});

function renderAuth(mode) {
  const login = mode === "login";
  authContent.innerHTML = `
    <p class="eyebrow">${login ? "BEM-VINDO" : "JUNTE-SE"}</p>
    <h2>${login ? "Iniciar sessão" : "Criar conta"}</h2>
    <p>${login ? "Entre na sua conta para deixar um comentário." : "Crie a sua conta para participar nos comentários."}</p>
    <form class="auth-form" id="authForm">
      ${!login ? '<input id="name" type="text" placeholder="Nome" required>' : ""}
      <input id="email" type="email" placeholder="E-mail" required>
      <input id="password" type="password" placeholder="Palavra-passe" minlength="6" required>
      <button type="submit">${login ? "Entrar" : "Criar conta"}</button>
    </form>
    <button class="auth-switch" id="authSwitch">${login ? "Ainda não tenho conta" : "Já tenho uma conta"}</button>
  `;
  document.getElementById("authSwitch").onclick = () => renderAuth(login ? "register" : "login");

  document.getElementById("authForm").onsubmit = e => {
    e.preventDefault();
    const email = document.getElementById("email").value.trim().toLowerCase();
    const password = document.getElementById("password").value;
    const users = getUsers();

    if (login) {
      const user = users.find(u => u.email === email && u.password === password);
      if (!user) return alert("E-mail ou palavra-passe incorretos.");
      localStorage.setItem(SESSION_KEY, JSON.stringify({ name: user.name, email: user.email }));
      closeAuth();
      renderComments();
    } else {
      const name = document.getElementById("name").value.trim();
      if (users.some(u => u.email === email)) return alert("Este e-mail já possui uma conta.");
      users.push({ name, email, password });
      localStorage.setItem(USERS_KEY, JSON.stringify(users));
      localStorage.setItem(SESSION_KEY, JSON.stringify({ name, email }));
      closeAuth();
      renderComments();
    }
  };
}

function renderComments() {
  const session = getSession();

  if (!session) {
    authArea.innerHTML = `
      <div class="auth-area">
        <span>Quer deixar a sua opinião?</span>
        <button class="login-btn" id="loginBtn">Iniciar sessão para comentar</button>
      </div>
    `;
    document.getElementById("loginBtn").onclick = () => openAuth("login");
  } else {
    authArea.innerHTML = `
      <div class="auth-area">
        <span>Olá, <strong>${escapeHtml(session.name)}</strong>! Deixe o seu comentário:</span>
        <button class="logout-btn" id="logoutBtn">Sair</button>
      </div>
      <form class="comment-form" id="commentForm">
        <textarea id="commentText" maxlength="500" placeholder="Escreva o seu comentário..." required></textarea>
        <button type="submit">Publicar comentário</button>
      </form>
    `;
    document.getElementById("logoutBtn").onclick = () => {
      localStorage.removeItem(SESSION_KEY);
      renderComments();
    };
    document.getElementById("commentForm").onsubmit = e => {
      e.preventDefault();
      const text = document.getElementById("commentText").value.trim();
      if (!text) return;
      const comments = getComments();
      comments.unshift({
        name: session.name,
        text,
        date: new Date().toLocaleDateString("pt-PT")
      });
      localStorage.setItem(COMMENTS_KEY, JSON.stringify(comments));
      document.getElementById("commentText").value = "";
      renderComments();
    };
  }

  const comments = getComments();
  commentsList.innerHTML = comments.length ? comments.map(c => `
    <article class="comment">
      <strong>${escapeHtml(c.name)}</strong>
      <p>${escapeHtml(c.text)}</p>
      <small>${escapeHtml(c.date)}</small>
    </article>
  `).join("") : "<p style='color:#a9949d;margin-top:25px'>Ainda não existem comentários. Seja a primeira pessoa a comentar.</p>";
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, char => ({
    "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#039;"
  }[char]));
}

renderComments();
