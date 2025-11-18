import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar({ dark, setDark, user, onLoginClick, onLogout }) {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleProfileClick = () => {
    if (!user?.profileId) return;
    navigate(`/profiles/${user.profileId}`);
  };

  return (
    <header className="sticky top-0 z-40 border-b token-border bg-[var(--color-card)]/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-xl bg-[var(--color-primary)]" />
          <span className="text-base font-semibold">WorkTech Link</span>
        </Link>

        {/* Navegação */}
        <nav className="flex items-center gap-3">
          {/* Login / Usuário logado */}
          {!user ? (
            <button
              onClick={onLoginClick}
              className={`
                flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium
                transition-colors shadow-sm
                border-[var(--color-primary)]
                ${pathname === "/"
                  ? "bg-[var(--color-primary)] text-white"
                  : "bg-transparent text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white"
                }
              `}
            >
              {/* Ícone de login */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6A2.25 2.25 0 005.25 5.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9l3 3m0 0l-3 3m3-3H8.25"
                />
              </svg>
              <span>Login</span>
            </button>
          ) : (
            <div className="flex items-center gap-2">
              {/* Chip clicável com nome do usuário */}
              <button
                type="button"
                onClick={handleProfileClick}
                className="flex flex-col items-start rounded-full border token-border bg-[var(--color-bg)] px-3 py-1 text-xs shadow-sm hover:bg-[var(--color-bg-soft)] transition-colors"
              >
                <span className="token-muted leading-none">Logado como</span>
                <span className="font-semibold leading-none">
                  {user.name || user.email}
                </span>
              </button>

              {/* Botão de sair */}
              <button
                onClick={onLogout}
                className="btn btn-ghost text-xs"
              >
                Sair
              </button>
            </div>
          )}

          {/* Botão de tema */}
          <button
            className="btn btn-ghost flex items-center gap-2"
            onClick={() => setDark((v) => !v)}
            aria-label="Alternar tema"
          >
            <span className="hidden text-sm sm:inline">
              {dark ? "Modo Claro" : "Modo Escuro"}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path d="M21.64 13a9 9 0 01-10.64-10.64A9 9 0 1021.64 13z" />
            </svg>
          </button>
        </nav>
      </div>
    </header>
  );
}
