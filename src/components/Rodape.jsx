import React from 'react';

/**
 * Componente Rodape
 * Demonstra expressões JSX e créditos acadêmicos
 */
export default function Rodape({ ano, autor, instituicao, docente }) {
  return (
    <footer className="mt-12 border-t border-slate-800 bg-slate-950 py-8 px-4 text-center text-xs text-slate-500">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <p className="font-semibold text-slate-400">{instituicao} • Especialização Front-End ({ano})</p>
          <p className="mt-0.5">Atividade 04: Fundamentos do React • Docente: <strong>{docente}</strong></p>
        </div>
        <div className="flex items-center gap-4 text-slate-400">
          <a 
            href="https://react.dev" 
            target="_blank" 
            rel="noreferrer"
            className="hover:text-cyan-400 transition-colors underline"
          >
            Documentação React Oficial
          </a>
          <span>•</span>
          <span className="font-mono text-cyan-400">Desenvolvido por {autor}</span>
        </div>
      </div>
    </footer>
  );
}
