import React from 'react';
import CardConceito from './CardConceito';

/**
 * Componente ListaDeConceitos
 * Demonstra Renderização de Coleções com map(), Keys estáveis e Renderização Condicional de estado vazio
 */
export default function ListaDeConceitos({ conceitos, aoAlternarStatus }) {
  
  // Renderização Condicional: Estado Vazio
  if (conceitos.length === 0) {
    return (
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-12 text-center shadow-xl space-y-4">
        <div className="w-16 h-16 rounded-full bg-slate-800 text-slate-500 mx-auto flex items-center justify-center text-2xl font-bold">
          ∅
        </div>
        <div>
          <h3 className="text-lg font-bold text-white">Nenhum conceito encontrado</h3>
          <p className="text-sm text-slate-400 mt-1 max-w-md mx-auto">
            Nenhum resultado corresponde aos critérios de pesquisa ou filtros selecionados. Tente ajustar os termos de busca ou limpar os filtros.
          </p>
        </div>
      </div>
    );
  }

  // Renderização da Lista de Cards com .map() e key única
  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between text-xs text-slate-400 px-1">
        <span>Exibindo <strong>{conceitos.length}</strong> {conceitos.length === 1 ? 'conceito' : 'conceitos'}</span>
        <span className="font-mono text-cyan-400">Virtual DOM Diffing Ativo</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {conceitos.map((conceito) => (
          <CardConceito
            key={conceito.id}
            id={conceito.id}
            titulo={conceito.titulo}
            categoria={conceito.categoria}
            nivel={conceito.nivel}
            descricao={conceito.descricao}
            exemplo={conceito.exemplo}
            destaque={conceito.destaque}
            concluido={conceito.concluido}
            tags={conceito.tags}
            aoAlternarStatus={aoAlternarStatus}
          />
        ))}
      </div>
    </section>
  );
}
