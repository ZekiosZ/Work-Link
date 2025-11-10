import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar({ dark, setDark }) {
  const { pathname } = useLocation();
  return (
    <header className="sticky top-0 z-40 border-b token-border bg-[var(--color-card)]/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-xl bg-[var(--color-primary)]" />
          <span className="text-base font-semibold">WorkTech Link</span>
        </Link>
        <nav className="flex items-center gap-1">
          <Link className={`btn btn-ghost ${pathname === "/" ? "token-primary" : ""}`} to="/">Explorar</Link>
          <Link className={`btn btn-ghost ${pathname.startsWith("/profiles") ? "token-primary" : ""}`} to="/profiles/preview">Perfis</Link>
          <button className="btn btn-ghost" onClick={() => setDark((v) => !v)} aria-label="Alternar tema">
            <span className="hidden sm:inline">{dark ? "Modo Claro" : "Modo Escuro"}</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
              <path d="M21.64 13a9 9 0 01-10.64-10.64A9 9 0 1021.64 13z" />
            </svg>
          </button>
        </nav>
      </div>
    </header>
  );
}
