import React from 'react';

/**
 * Componente BarraDePesquisa
 * Demonstra passagem de funções callbacks por Props e formulários controlados
 */
export default function BarraDePesquisa({ 
  termoBusca, 
  aoMudarBusca, 
  categoriaSelecionada, 
  aoMudarCategoria, 
  categorias,
  apenasConcluidos,
  aoAlternarConcluidos,
  aoLimparFiltros
}) {
  return (
    <section className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-xl space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h2 className="text-base font-bold text-white tracking-tight flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
            Filtros & Navegação no Catálogo
          </h2>
          <p className="text-xs text-slate-400">Pesquise por conceitos, palavras-chave ou filtre por área de conhecimento</p>
        </div>
        
        {/* Botão de Limpar Filtros */}
        {(termoBusca || categoriaSelecionada !== 'ALL' || apenasConcluidos) && (
          <button 
            onClick={aoLimparFiltros}
            className="text-xs font-semibold text-rose-400 hover:text-rose-300 self-start sm:self-auto transition-colors"
          >
            ✕ Limpar Filtros
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
        {/* Input de Busca Textual */}
        <div className="sm:col-span-6 relative">
          <input
            type="text"
            value={termoBusca}
            onChange={(e) => aoMudarBusca(e.target.value)}
            placeholder="Buscar por JSX, Props, Virtual DOM..."
            className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
          />
        </div>

        {/* Dropdown de Categorias */}
        <div className="sm:col-span-3">
          <select
            value={categoriaSelecionada}
            onChange={(e) => aoMudarCategoria(e.target.value)}
            className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
          >
            <option value="ALL">Todas as Categorias</option>
            {categorias.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        {/* Checkbox Apenas Concluídos */}
        <div className="sm:col-span-3 flex items-center bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2">
          <label className="flex items-center gap-2 text-xs font-medium text-slate-300 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={apenasConcluidos}
              onChange={(e) => aoAlternarConcluidos(e.target.checked)}
              className="w-4 h-4 rounded text-cyan-500 focus:ring-cyan-500 bg-slate-900 border-slate-700 cursor-pointer"
            />
            <span>Apenas Dominados</span>
          </label>
        </div>
      </div>
    </section>
  );
}
