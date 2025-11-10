import React from "react";
export default function SearchBar({ value = "", onChange = () => {}, onSubmit = () => {} }) {
  return (
    <form onSubmit={(e)=>{e.preventDefault(); onSubmit(value);}} className="flex items-center gap-2">
      <input className="input" placeholder="Buscar por nome, cargo ou skill..." value={value} onChange={(e)=>onChange(e.target.value)} />
      <button className="btn btn-primary" type="submit">Buscar</button>
    </form>
  );
}
