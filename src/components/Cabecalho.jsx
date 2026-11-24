import React from 'react';

/**
 * Componente Cabecalho
 * Demonstra Props, JSX com expressões e classes camelCase
 */
export default function Cabecalho({ titulo, subtitulo, totalConceitos, concluidos }) {
  const percentual = totalConceitos > 0 ? Math.round((concluidos / totalConceitos) * 100) : 0;

  return (
    <header className="bg-slate-900 border-b border-slate-800 sticky top-0 z-30 shadow-lg backdrop-blur-md bg-slate-900/90">
      <div className="max-w-6xl mx-auto px-4 py-4 sm:px-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        
        {/* Identificação e Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 flex items-center justify-center font-bold text-lg shadow-sm">
            ⚛
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-extrabold text-white tracking-tight">{titulo}</h1>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                React 18
              </span>
            </div>
            <p className="text-xs text-slate-400">{subtitulo}</p>
          </div>
        </div>

        {/* Indicadores de Progresso de Estudo */}
        <div className="flex items-center gap-4 bg-slate-950/60 px-4 py-2 rounded-xl border border-slate-800">
          <div className="text-right">
            <div className="text-xs text-slate-400">Progresso de Aprendizado</div>
            <div className="text-sm font-bold text-slate-100">
              {concluidos} de {totalConceitos} conceitos ({percentual}%)
            </div>
          </div>
          <div className="w-16 bg-slate-800 rounded-full h-2 overflow-hidden">
            <div 
              className="bg-cyan-400 h-2 rounded-full transition-all duration-300" 
              style={{ width: `${percentual}%` }}
            ></div>
          </div>
        </div>

      </div>
    </header>
  );
}
