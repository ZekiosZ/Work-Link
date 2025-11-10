import React from "react";
export default function FilterBar({ filters = {}, onChange = () => {} }) {
  const set = (k, v) => onChange({ ...filters, [k]: v });
  return (
    <div className="card grid grid-cols-2 gap-3 p-3 md:grid-cols-4">
      <select className="input" value={filters.area || ""} onChange={(e)=>set("area", e.target.value)}>
        <option value="">Área</option>
        <option value="Tecnologia">Tecnologia</option>
        <option value="Design">Design</option>
        <option value="Dados">Dados</option>
        <option value="Marketing">Marketing</option>
      </select>
      <select className="input" value={filters.seniority || ""} onChange={(e)=>set("seniority", e.target.value)}>
        <option value="">Senioridade</option>
        <option value="Júnior">Júnior</option>
        <option value="Pleno">Pleno</option>
        <option value="Sênior">Sênior</option>
      </select>
      <button className="btn btn-secondary">Aplicar filtros</button>
      <button className="btn btn-ghost" onClick={()=>onChange({ area: "", seniority: "" })}>Limpar</button>
    </div>
  );
}