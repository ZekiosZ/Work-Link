import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import SearchBar from "./components/SearchBar.jsx";
import FilterBar from "./components/FilterBar.jsx";
import ProfileCard from "./components/ProfileCard.jsx";
import ProfileModal from "./components/ProfileModal.jsx";
import LoginModal from "./components/LoginModal.jsx";
import Profiles from "./pages/UserProfiles.jsx";
import "./App.css";

// 🔀 Embaralhar array
function shuffleArray(arr) {
  const array = [...arr];
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function MainContent({
  dark,
  setDark,
  query,
  setQuery,
  filters,
  setFilters,
  selected,
  setSelected,
  profiles,
  user,
  onLoginClick,
  onLogout,
}) {
  return (
    <div className="min-h-screen token-bg token-text">
      <Navbar
        dark={dark}
        setDark={setDark}
        user={user}
        onLoginClick={onLoginClick}
        onLogout={onLogout}
      />

      <main className="mx-auto max-w-7xl px-4 pb-20 pt-8">
        {/* Cabeçalho */}
        <section className="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">
              Descubra profissionais e talentos
            </h1>
            <p className="token-muted mt-1 text-sm">
              Explore perfis, filtre por área e conecte-se para oportunidades.
            </p>
          </div>
        </section>

        {/* Busca e filtros */}
        <section className="mb-6 grid grid-cols-1 gap-3 md:grid-cols-4">
          <div className="md:col-span-2">
            <SearchBar
              value={query}
              onChange={setQuery}
              onSubmit={() => {}}
            />
          </div>
          <div className="md:col-span-2">
            <FilterBar filters={filters} onChange={setFilters} />
          </div>
        </section>

        {/* Lista de perfis */}
        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {profiles.length === 0 ? (
            <p>Nenhum perfil encontrado.</p>
          ) : (
            profiles.map((p) => (
              <ProfileCard
                key={p.id}
                name={p.nome}
                role={p.cargo}
                area={p.area}
                location={p.localizacao}
                avatar={p.foto}
                skills={p.habilidadesTecnicas || []}
                isCurrentUser={user?.profileId === p.id}
                onClick={() => setSelected(p)}
              />
            ))
          )}
        </section>
      </main>

      {/* Modal do perfil */}
      <ProfileModal
        open={!!selected}
        onClose={() => setSelected(null)}
        profile={selected}
        // se seu ProfileModal aceitar isso, ele sabe se é o usuário logado
        isCurrentUser={user?.profileId === selected?.id}
      />
    </div>
  );
}

export default function App() {
  const [dark, setDark] = useState(false);
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState({ area: "", seniority: "" });
  const [selected, setSelected] = useState(null);
  const [profiles, setProfiles] = useState([]);

  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const [loginLoading, setLoginLoading] = useState(false);
  const [loginError, setLoginError] = useState("");

  // Alternância modo escuro
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  // Busca automática com filtros e busca de nome
  useEffect(() => {
    const params = new URLSearchParams();
    if (query) params.append("nome", query);
    if (filters.area) params.append("area", filters.area);
    if (filters.seniority) params.append("senioridade", filters.seniority);

    fetch(`http://localhost:5000/api/search?${params.toString()}`)
      .then((res) => res.json())
      .then((data) => {
        const embaralhados = shuffleArray(data);
        setProfiles(embaralhados);
      })
      .catch((err) => console.error("Erro ao buscar perfis:", err));
  }, [query, filters]);

  // Handler de login
  async function handleLogin({ email, senha }) {
    try {
      setLoginLoading(true);
      setLoginError("");

      const res = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, senha }),
      });

      if (!res.ok) {
        if (res.status === 401) {
          throw new Error("Usuário ou senha inválidos");
        }
        throw new Error("Erro ao fazer login");
      }

      const data = await res.json();

      // backend: { email, profileId, ... }
      setUser({ email: data.email, profileId: data.profileId });
      setShowLogin(false);
    } catch (err) {
      setLoginError(err.message);
    } finally {
      setLoginLoading(false);
    }
  }

  function handleLogout() {
    setUser(null);
  }

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <MainContent
              dark={dark}
              setDark={setDark}
              query={query}
              setQuery={setQuery}
              filters={filters}
              setFilters={setFilters}
              selected={selected}
              setSelected={setSelected}
              profiles={profiles}
              user={user}
              onLoginClick={() => setShowLogin(true)}
              onLogout={handleLogout}
            />
          }
        />
        <Route path="/profiles/:id" element={<Profiles />} />
        <Route path="/profiles/preview" element={<Profiles preview />} />
      </Routes>

      {/* Modal de Login */}
      <LoginModal
        open={showLogin}
        onClose={() => setShowLogin(false)}
        onLogin={handleLogin}
        loading={loginLoading}
        error={loginError}
      />
    </>
  );
}
