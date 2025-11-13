import React from "react";

export default function ProfileCard({
  avatar,
  name,
  role,
  area,
  location,
  skills = [],
  onClick,
}) {
  return (
    <article
      className="card group cursor-pointer p-4 transition hover:shadow-md"
      onClick={onClick}
    >
      {/* Área da Foto */}
      <div className="relative mb-3 h-36 w-full overflow-hidden rounded-xl bg-black/5 dark:bg-white/5">
        {avatar ? (
          <img
            src={avatar}
            alt={name}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 grid place-items-center token-muted">
            Foto
          </div>
        )}

        {/* Badge de Disponibilidade */}
        <span className="absolute right-2 top-2 rounded-full bg-[var(--color-secondary)] px-2 py-0.5 text-[10px] font-semibold text-[var(--color-secondary-foreground)]">
          Disponível
        </span>
      </div>

      {/* Nome */}
      <h3 className="text-base font-semibold leading-tight">
        {name || "Nome do Profissional"}
      </h3>

      {/* Cargo */}
      <p className="token-muted text-sm">
        {role || "Cargo / Função"}
      </p>

      {/* Área + Localização */}
      <p className="token-muted text-xs mt-1">
        {area ? area : "Área não informada"}
        {location ? ` • ${location}` : ""}
      </p>

      {/* Skills */}
      <div className="mt-3 flex flex-wrap gap-2">
        {(skills.length ? skills : ["Skill A", "Skill B", "Skill C"]).map(
          (s, i) => (
            <span className="badge" key={i}>
              {s}
            </span>
          )
        )}
      </div>
    </article>
  );
}
