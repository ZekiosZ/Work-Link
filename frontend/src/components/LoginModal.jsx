import React, { useState } from "react";

export default function LoginModal({ open, onClose, onLogin, loading, error }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  if (!open) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({ email, senha });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-sm rounded-2xl bg-[var(--color-card)] p-6 shadow-2xl token-text">
        <h2 className="mb-4 text-lg font-semibold">Login</h2>
        <p className="mb-4 text-sm token-muted">
          Use um dos logins de demo, por exemplo:
          <br />
          <span className="font-mono text-xs">
            devjose@gmail.com — jose123 / devwalter@gmail.com — walter123 / devsievers@gmail.com — sievers123
          </span>
        </p>

        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label className="mb-1 block text-xs font-medium">Email</label>
            <input
              type="text"
              className="w-full rounded-lg border px-3 py-2 text-sm token-border bg-[var(--color-bg)]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="mb-1 block text-xs font-medium">Senha</label>
            <input
              type="password"
              className="w-full rounded-lg border px-3 py-2 text-sm token-border bg-[var(--color-bg)]"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
          </div>

          {error && (
            <p className="text-xs text-red-500">
              {error}
            </p>
          )}

          <div className="mt-4 flex items-center justify-end gap-2">
            <button
              type="button"
              className="btn btn-ghost text-sm"
              onClick={onClose}
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="btn text-sm"
              disabled={loading}
            >
              {loading ? "Entrando..." : "Entrar"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
