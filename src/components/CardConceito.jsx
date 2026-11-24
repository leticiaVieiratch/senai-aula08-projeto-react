import React from 'react';

/**
 * Componente CardConceito
 * Demonstra Props, Renderização Condicional (operador ternário e curto-circuito) e Keys em sub-listas
 */
export default function CardConceito({
  id,
  titulo,
  categoria,
  nivel,
  descricao,
  exemplo,
  destaque,
  concluido,
  tags,
  aoAlternarStatus
}) {
  return (
    <article className={`bg-slate-900 border rounded-2xl p-5 transition-all duration-200 shadow-lg flex flex-col justify-between ${
      destaque ? 'border-cyan-500/50 shadow-cyan-500/10' : 'border-slate-800 hover:border-slate-700'
    }`}>
      
      {/* Topo do Card */}
      <div className="space-y-3">
        <div className="flex items-start justify-between gap-2">
          <span className="text-xs font-semibold px-2.5 py-0.5 rounded-md bg-slate-800 text-slate-300 border border-slate-700">
            {categoria}
          </span>
          
          <div className="flex items-center gap-1.5">
            {/* Renderização Condicional 1: Destaque */}
            {destaque && (
              <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-cyan-500/15 text-cyan-400 border border-cyan-500/30">
                ★ Essencial
              </span>
            )}
            
            {/* Renderização Condicional 2: Nível */}
            <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${
              nivel === 'Iniciante' 
                ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' 
                : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
            }`}>
              {nivel}
            </span>
          </div>
        </div>

        {/* Título e Descrição */}
        <div>
          <h3 className="text-lg font-bold text-white tracking-tight">{titulo}</h3>
          <p className="mt-1 text-xs text-slate-300 leading-relaxed">{descricao}</p>
        </div>

        {/* Snippet de Exemplo Prático */}
        {exemplo && (
          <div className="bg-slate-950/80 rounded-xl p-3 border border-slate-800/80">
            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 block mb-1">
              Exemplo JSX:
            </span>
            <code className="text-xs font-mono text-cyan-300 block overflow-x-auto whitespace-pre">
              {exemplo}
            </code>
          </div>
        )}
      </div>

      {/* Rodapé do Card: Tags e Status */}
      <div className="mt-4 pt-3 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        {/* Renderização de Lista de Tags via map() */}
        <div className="flex items-center gap-1.5 flex-wrap">
          {tags.map((tag) => (
            <span key={tag} className="text-[10px] font-mono text-slate-400 bg-slate-800/60 px-2 py-0.5 rounded">
              #{tag}
            </span>
          ))}
        </div>

        {/* Botão de Toggle de Status (Fluxo Unidirecional de Eventos) */}
        <button
          onClick={() => aoAlternarStatus(id)}
          className={`text-xs font-semibold px-3 py-1.5 rounded-lg border transition-all flex items-center gap-1.5 self-start sm:self-auto ${
            concluido
              ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30 hover:bg-emerald-500/20'
              : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
          }`}
        >
          <span>{concluido ? '✓ Dominado' : '○ Em Estudo'}</span>
        </button>
      </div>

    </article>
  );
}
