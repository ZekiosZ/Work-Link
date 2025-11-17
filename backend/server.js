import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// === Configuração de caminhos ===
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataPath = path.join(__dirname, "data", "profiles.json");

const app = express();
const PORT = 5000;

// === Middlewares ===
app.use(cors());
app.use(express.json());

// === Carregar os perfis do arquivo JSON ===
let profiles = [];

try {
  const jsonData = fs.readFileSync(dataPath, "utf-8");
  profiles = JSON.parse(jsonData);
  console.log(`✅ Perfis carregados com sucesso! (${profiles.length} perfis)`);
} catch (error) {
  console.error("❌ Erro ao ler o arquivo profiles.json:", error.message);
}

// === Usuários especiais de DEMO (login) ===
// profileId PRECISA existir dentro do profiles.json
const demoUsers = [
  { email: "devjose@gmail.com",   senha: "jose123",   profileId: 101 },
  { email: "devwalter@gmail.com", senha: "walter123", profileId: 102 },
  { email: "devsievers@gmail.com",senha: "sievers123",profileId: 103 },
];

// === Rota principal - retorna todos os perfis ===
app.get("/api/profiles", (req, res) => {
  res.json(profiles);
});

// === Rota de busca e filtros ===
app.get("/api/search", (req, res) => {
  const { nome, area, senioridade } = req.query;
  let filtrados = profiles;

  if (nome) {
    filtrados = filtrados.filter((p) =>
      p.nome.toLowerCase().includes(nome.toLowerCase())
    );
  }

  if (area) {
    filtrados = filtrados.filter(
      (p) => p.area.toLowerCase() === area.toLowerCase()
    );
  }

  if (senioridade) {
    filtrados = filtrados.filter(
      (p) => p.senioridade.toLowerCase() === senioridade.toLowerCase()
    );
  }

  res.json(filtrados);
});

// === Rota para obter perfil individual por ID ===
app.get("/api/profile/:id", (req, res) => {
  const perfil = profiles.find((p) => p.id === parseInt(req.params.id));
  if (!perfil) return res.status(404).json({ erro: "Perfil não encontrado" });
  res.json(perfil);
});

// === Rota de LOGIN para perfis de demo ===
app.post("/api/login", (req, res) => {
  const { email, senha } = req.body;

  console.log("🔐 Tentativa de login:", req.body);

  if (!email || !senha) {
    return res.status(400).json({ erro: "Informe e-mail e senha" });
  }

  const user = demoUsers.find(
    (u) => u.email === email && u.senha === senha
  );

  if (!user) {
    console.log("❌ Credenciais inválidas para:", email);
    return res.status(401).json({ erro: "Credenciais inválidas" });
  }

  // Busca o perfil correspondente no JSON
  const perfil = profiles.find((p) => p.id === user.profileId);

  if (!perfil) {
    console.error("❌ Perfil não encontrado para profileId:", user.profileId);
    return res
      .status(500)
      .json({ erro: "Perfil associado ao usuário não foi encontrado" });
  }

  console.log("✅ Login OK:", email, "-> profileId:", user.profileId);

  res.json({
    message: "Login realizado com sucesso",
    email: user.email,
    profileId: user.profileId,
    perfil,
  });
});

// === Inicia o servidor ===
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
