import React from "react";
export default function Profiles({ preview }) {
  // Sem integração: layout visual pronto para receber dados por params/props
  return (
    <div className="min-h-screen token-bg token-text">
      <div className="mx-auto max-w-5xl px-4 py-8">
        <div className="card overflow-hidden">
          {/* Header do perfil */}
          <div className="relative h-40 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)]" />
          <div className="-mt-10 flex items-end gap-4 px-6">
            <div className="h-24 w-24 shrink-0 overflow-hidden rounded-2xl border-4 border-[var(--color-card)] bg-black/10 dark:border-[var(--color-bg)]">
              {/* <img src={avatar} alt="avatar"/> */}
            </div>
            <div className="pb-2">
              <h1 className="text-xl font-semibold leading-tight">Nome do Profissional</h1>
              <p className="token-muted text-sm">Cargo / Área • Cidade • Disponível para contratação</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="badge">Skill {i + 1}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Ações */}
          <div className="flex flex-wrap gap-2 px-6 pb-4 pt-3">
            <button className="btn btn-primary">Recomendar profissional</button>
            <button className="btn btn-secondary">Enviar mensagem</button>
            <button className="btn btn-ghost">Salvar</button>
          </div>

          {/* Conteúdo */}
          <div className="grid grid-cols-1 gap-6 px-6 pb-8 md:grid-cols-3">
            <section className="md:col-span-2">
              <div className="mb-6">
                <h2 className="mb-2 text-sm font-semibold">Sobre</h2>
                <div className="card p-4">
                  <p className="text-sm token-muted">Resumo profissional breve e objetivos de carreira.</p>
                </div>
              </div>
              <div className="mb-6">
                <h2 className="mb-2 text-sm font-semibold">Experiência</h2>
                <div className="card divide-y token-border">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <div key={i} className="p-4">
                      <p className="text-sm font-medium">Empresa {i + 1} • Cargo</p>
                      <p className="text-xs token-muted">Jan 2023 — Atual • Local</p>
                      <p className="mt-2 text-sm token-muted">Atividades e resultados alcançados.</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="mb-2 text-sm font-semibold">Formação acadêmica</h2>
                <div className="card divide-y token-border">
                  {Array.from({ length: 2 }).map((_, i) => (
                    <div key={i} className="p-4">
                      <p className="text-sm font-medium">Universidade {i + 1} • Curso</p>
                      <p className="text-xs token-muted">2019 — 2023</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
            <aside className="space-y-6">
              <div className="card p-4">
                <h3 className="mb-2 text-sm font-semibold">Tecnologias</h3>
                <div className="flex flex-wrap gap-2">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <span key={i} className="badge">Tech {i + 1}</span>
                  ))}
                </div>
              </div>
              <div className="card p-4">
                <h3 className="mb-2 text-sm font-semibold">Soft skills</h3>
                <ul className="list-disc pl-5 text-sm token-muted">
                  <li>Comunicação</li>
                  <li>Trabalho em equipe</li>
                  <li>Resolução de problemas</li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}
