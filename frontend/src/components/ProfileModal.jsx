import React from "react";
export default function ProfileModal({ open, onClose, profile }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/40 p-4">
      <div className="card max-h-[90vh] w-full max-w-3xl overflow-hidden">
        <div className="flex items-center justify-between border-b token-border p-4">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 overflow-hidden rounded-xl bg-black/5 dark:bg-white/10">
              {profile?.avatar ? <img src={profile.avatar} alt="avatar" /> : null}
            </div>
            <div>
              <h3 className="text-lg font-semibold">{profile?.name || "Nome do Profissional"}</h3>
              <p className="token-muted text-sm">{profile?.role || "Cargo / Função"}</p>
            </div>
          </div>
          <button className="btn btn-ghost" onClick={onClose}>Fechar</button>
        </div>
        <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-3">
          <section className="md:col-span-2">
            <h4 className="mb-2 text-sm font-semibold">Sobre</h4>
            <div className="rounded-xl border token-border p-3">
              <p className="text-sm token-muted">
                Aqui entram informações pessoais, acadêmicas e profissionais.
              </p>
            </div>
            <h4 className="mt-4 mb-2 text-sm font-semibold">Experiências & Habilidades técnicas</h4>
            <div className="rounded-xl border token-border p-3">
              <ul className="list-disc pl-5 text-sm token-muted">
                <li>Experiência 1 / Tecnologia</li>
                <li>Experiência 2 / Tecnologia</li>
              </ul>
            </div>
          </section>
          <aside>
            <h4 className="mb-2 text-sm font-semibold">Soft skills & Hobbies</h4>
            <div className="rounded-xl border token-border p-3">
              <div className="flex flex-wrap gap-2">
                {Array.from({ length: 6 }).map((_, i) => (
                  <span className="badge" key={i}>Soft {i + 1}</span>
                ))}
              </div>
            </div>
            <div className="mt-4 flex gap-2">
              <button className="btn btn-primary w-full">Recomendar</button>
              <button className="btn btn-secondary w-full">Enviar mensagem</button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}