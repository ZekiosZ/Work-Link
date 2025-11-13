import React from "react";

export default function ProfileModal({ open, onClose, profile }) {
  if (!open || !profile) return null;

  const handleSendMessage = () => {
    alert(
      `Você enviou uma mensagem para ${profile.nome}.`
    );
  };

  const handleAddFriend = () => {
    alert(
      `Você adicionou ${profile.nome} à sua rede.`
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="relative w-full max-w-5xl rounded-2xl bg-[var(--color-bg)] p-6 shadow-xl overflow-y-auto max-h-[90vh] token-text">
        {/* Botão de fechar */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-lg bg-red-500 px-3 py-1 text-sm text-white hover:bg-red-600 z-10"
        >
          Fechar
        </button>

        {/* Cabeçalho */}
        <div className="relative mb-8">
          {/* Cover */}
          <div className="h-40 rounded-xl bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)]" />

          {/* Conteúdo sobreposto */}
          <div className="-mt-16 flex flex-col gap-4 px-6 pb-4 sm:flex-row sm:items-end sm:justify-between">
            {/* Avatar + infos */}
            <div className="flex items-end gap-4">
              <img
                src={profile.foto}
                alt={profile.nome}
                className="h-28 w-28 rounded-2xl border-4 border-[var(--color-bg)] object-cover shadow-lg"
              />
              <div>
                <h1 className="text-2xl font-semibold">{profile.nome}</h1>
                <p className="text-sm token-muted">
                  {profile.cargo} • {profile.area} • {profile.localizacao}
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {profile.habilidadesTecnicas?.slice(0, 5).map((skill, i) => (
                    <span key={i} className="badge shadow-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Botões de ação */}
            <div className="flex flex-row gap-3 sm:items-end">
              <button
                onClick={handleSendMessage}
                className="btn left-4 w-full sm:w-auto"
              >
                Enviar mensagem
              </button>
              <button
                onClick={handleAddFriend}
                className="btn btn-secondary w-full sm:w-auto"
              >
                Adicionar à rede
              </button>
            </div>
          </div>
        </div>

        {/* SOBRE */}
        {profile.resumo && (
          <section className="mb-8">
            <h2 className="mb-2 text-sm font-semibold">Sobre</h2>
            <div className="card p-4 text-sm token-muted">{profile.resumo}</div>
          </section>
        )}

        {/* EXPERIÊNCIAS */}
        {profile.experiencias?.length > 0 && (
          <section className="mb-8">
            <h2 className="mb-2 text-sm font-semibold">Experiências</h2>
            <div className="card divide-y token-border">
              {profile.experiencias.map((exp, i) => (
                <div key={i} className="p-4">
                  <p className="text-sm font-medium">{exp.empresa}</p>
                  <p className="text-xs token-muted">{exp.periodo}</p>
                  <p className="mt-2 text-sm token-muted">{exp.descricao}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* FORMAÇÃO */}
        {profile.formacao?.length > 0 && (
          <section className="mb-8">
            <h2 className="mb-2 text-sm font-semibold">Formação acadêmica</h2>
            <div className="card divide-y token-border">
              {profile.formacao.map((form, i) => (
                <div key={i} className="p-4">
                  <p className="text-sm font-medium">
                    {form.curso} • {form.instituicao}
                  </p>
                  <p className="text-xs token-muted">
                    Conclusão: {form.conclusao}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* PROJETOS */}
        {profile.projetos?.length > 0 && (
          <section className="mb-8">
            <h2 className="mb-2 text-sm font-semibold">Projetos</h2>
            <div className="card divide-y token-border">
              {profile.projetos.map((proj, i) => (
                <div key={i} className="p-4">
                  <p className="text-sm font-medium">{proj.titulo}</p>
                  <p className="text-sm token-muted">{proj.descricao}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* CERTIFICAÇÕES */}
        {profile.certificacoes?.length > 0 && (
          <section className="mb-8">
            <h2 className="mb-2 text-sm font-semibold">Certificações</h2>
            <div className="card flex flex-wrap gap-2 p-4">
              {profile.certificacoes.map((cert, i) => (
                <span key={i} className="badge shadow-sm">
                  {cert}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* IDIOMAS */}
        {profile.idiomas?.length > 0 && (
          <section className="mb-8">
            <h2 className="mb-2 text-sm font-semibold">Idiomas</h2>
            <div className="card flex flex-wrap gap-2 p-4">
              {profile.idiomas.map((lang, i) => (
                <span key={i} className="badge shadow-sm">
                  {lang}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* ÁREAS DE INTERESSE */}
        {profile.areaInteresses?.length > 0 && (
          <section className="mb-8">
            <h2 className="mb-2 text-sm font-semibold">Áreas de interesse</h2>
            <div className="card flex flex-wrap gap-2 p-4">
              {profile.areaInteresses.map((area, i) => (
                <span key={i} className="badge shadow-sm">
                  {area}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* SOFT SKILLS */}
        {profile.softSkills?.length > 0 && (
          <section>
            <h2 className="mb-2 text-sm font-semibold">Soft skills</h2>
            <div className="card p-4">
              <ul className="list-disc pl-5 text-sm token-muted">
                {profile.softSkills.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
