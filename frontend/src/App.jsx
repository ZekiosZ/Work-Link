import React, { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import SearchBar from "./components/SearchBar.jsx";
import FilterBar from "./components/FilterBar.jsx";
import ProfileCard from "./components/ProfileCard.jsx";
import ProfileModal from "./components/ProfileModal.jsx";
import Profiles from "./pages/Profiles.jsx";
import "./App.css";

function MainContent({ dark, setDark, query, setQuery, filters, setFilters, selected, setSelected }) {
  return (
    <div className="min-h-screen token-bg token-text">
      <Navbar dark={dark} setDark={setDark} />

      <main className="mx-auto max-w-7xl px-4 pb-20 pt-8">
        {/* Headline */}
        <section className="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">Descubra profissionais e talentos</h1>
            <p className="token-muted mt-1 text-sm">Explore perfis, filtre por área e conecte-se para oportunidades.</p>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/profiles/preview" className="btn btn-secondary">Ver página de perfil</Link>
          </div>
        </section>

        {/* Busca e filtros */}
        <section className="mb-6 grid grid-cols-1 gap-3 md:grid-cols-4">
          <div className="md:col-span-2">
            <SearchBar value={query} onChange={setQuery} onSubmit={() => {}} />
          </div>
          <div className="md:col-span-2">
            <FilterBar filters={filters} onChange={setFilters} />
          </div>
        </section>

        {/* Grid de cards – apenas estrutura visual. */}
        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {/* Quando integrar o backend:
              profiles.map(p => (
                <ProfileCard key={p.id} {...p} onClick={() => setSelected(p)} />
              ))
          */}
          {/* Esqueletos visuais */}
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="card animate-pulse p-4">
              <div className="mb-4 h-32 w-full rounded-xl bg-black/5 dark:bg-white/10" />
              <div className="mb-2 h-4 w-3/5 rounded-md bg-black/5 dark:bg-white/10" />
              <div className="mb-4 h-3 w-2/5 rounded-md bg-black/5 dark:bg-white/10" />
              <div className="flex flex-wrap gap-2">
                <span className="badge h-6 w-16"></span>
                <span className="badge h-6 w-20"></span>
                <span className="badge h-6 w-14"></span>
              </div>
            </div>
          ))}
        </section>
      </main>

      {/* Modal – controle visual; ficará vazio até receber um perfil */}
      <ProfileModal open={!!selected} onClose={() => setSelected(null)} profile={selected} />
    </div>
  );
}

export default function App() {
  const [dark, setDark] = useState(false);
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState({ area: "", seniority: "" });
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);


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
            />
          }
        />
        <Route path="/profiles/:id" element={<Profiles />} />
        <Route path="/profiles/preview" element={<Profiles preview />} />
      </Routes>
    </>
  );
}
