import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function UserProfile() {
  const { id } = useParams(); // /profiles/:id
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Busca o perfil no backend
  useEffect(() => {
    if (!id) {
      setError("ID de perfil não informado.");
      setLoading(false);
      return;
    }

    setLoading(true);
    setError("");

    fetch(`http://localhost:5000/api/profile/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Perfil não encontrado");
        }
        return res.json();
      })
      .then((data) => {
        setProfile(data);
      })
      .catch((err) => {
        setError(err.message || "Erro ao carregar perfil");
      })
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <div className="min-h-screen token-bg token-text">
      <div className="mx-auto max-w-5xl px-4 py-8">
        {/* Estados básicos */}
        {loading && (
          <div className="card p-6 text-sm token-muted">
            Carregando perfil...
          </div>
        )}

        {!loading && error && (
          <div className="card p-6 text-sm text-red-500">
            Erro ao carregar perfil: {error}
          </div>
        )}

        {!loading && !error && profile && (
          <div className="card overflow-hidden">
            {/* HEADER / CAPA */}
            <div className="relative h-32 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)]" />

            <div className="-mt-12 flex items-end gap-4 px-6 pb-4">
              {/* Avatar */}
              <div className="z-100 h-24 w-24 shrink-0 overflow-hidden rounded-2xl border-4 border-[var(--color-card)] bg-black/10 dark:border-[var(--color-bg)] shadow-lg">
                {profile.foto && (
                  <img
                    src={profile.foto}
                    alt={profile.nome}
                    className="h-full w-full object-cover"
                  />
                )}
              </div>

              {/* Nome + infos */}
              <div className="z-100 pb-0 text-sm text-shadow-md font-medium">
                <h1 className="text-xl font-semibold leading-tight">
                  {profile.nome}
                </h1>
                <p className="token-muted text-sm">
                  {profile.cargo} • {profile.area} • {profile.localizacao}
                </p>

                {profile.habilidadesTecnicas?.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {profile.habilidadesTecnicas.slice(0, 5).map((skill, i) => (
                      <span key={i} className="badge shadow-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>  
            {/* CONTEÚDO PRINCIPAL */}
            <div className="grid grid-cols-1 gap-6 px-6 pb-8 md:grid-cols-3">
              <section className="md:col-span-2 space-y-6">
                {/* Sobre */}
                {profile.resumo && (
                  <div>
                    <h2 className="mb-2 text-sm font-semibold">Sobre</h2>
                    <div className="card p-4">
                      <p className="text-sm token-muted">{profile.resumo}</p>
                    </div>
                  </div>
                )}

                {/* Experiência */}
                {profile.experiencias?.length > 0 && (
                  <div>
                    <h2 className="mb-2 text-sm font-semibold">Experiência</h2>
                    <div className="card divide-y token-border">
                      {profile.experiencias.map((exp, i) => (
                        <div key={i} className="p-4">
                          <p className="text-sm font-medium">
                            {exp.empresa}
                            {exp.cargo ? ` • ${exp.cargo}` : ""}
                          </p>
                          {exp.periodo && (
                            <p className="text-xs token-muted">{exp.periodo}</p>
                          )}
                          {exp.descricao && (
                            <p className="mt-2 text-sm token-muted">
                              {exp.descricao}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Formação acadêmica */}
                {profile.formacao?.length > 0 && (
                  <div>
                    <h2 className="mb-2 text-sm font-semibold">
                      Formação acadêmica
                    </h2>
                    <div className="card divide-y token-border">
                      {profile.formacao.map((form, i) => (
                        <div key={i} className="p-4">
                          <p className="text-sm font-medium">
                            {form.curso} • {form.instituicao}
                          </p>
                          {form.conclusao && (
                            <p className="text-xs token-muted">
                              Conclusão: {form.conclusao}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </section>

              {/* SIDEBAR */}
              <aside className="space-y-6">
                {/* Tecnologias */}
                {profile.habilidadesTecnicas?.length > 0 && (
                  <div className="card p-4">
                    <h3 className="mb-2 text-sm font-semibold">
                      Tecnologias
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {profile.habilidadesTecnicas.map((tech, i) => (
                        <span key={i} className="badge">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Soft skills */}
                {profile.softSkills?.length > 0 && (
                  <div className="card p-4">
                    <h3 className="mb-2 text-sm font-semibold">Soft skills</h3>
                    <ul className="list-disc pl-5 text-sm token-muted">
                      {profile.softSkills.map((skill, i) => (
                        <li key={i}>{skill}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </aside>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
