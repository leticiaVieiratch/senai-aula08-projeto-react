import React, { useState, useMemo } from 'react';
import { CONCEITOS_REACT } from './data/conceitos';
import Cabecalho from './components/Cabecalho';
import BarraDePesquisa from './components/BarraDePesquisa';
import ListaDeConceitos from './components/ListaDeConceitos';
import Rodape from './components/Rodape';

/**
 * Componente Raiz App
 * Demonstra Composição de Componentes em Árvore, Estado Local com useState,
 * Filtros em Tempo Real e Fluxo Unidirecional de Dados
 */
export default function App() {
  // Estado das Tarefas e Filtros
  const [conceitos, setConceitos] = useState(CONCEITOS_REACT);
  const [termoBusca, setTermoBusca] = useState('');
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('ALL');
  const [apenasConcluidos, setApenasConcluidos] = useState(false);
  const [contadorReconciliacao, setContadorReconciliacao] = useState(0);

  // Lista única de categorias extraída dinamicamente
  const categorias = useMemo(() => {
    return Array.from(new Set(CONCEITOS_REACT.map(c => c.categoria)));
  }, []);

  // Alternar status de concluído de um conceito (Fluxo Unidirecional)
  const alternarStatusConceito = (id) => {
    setConceitos(prev => prev.map(c => {
      if (c.id === id) {
        return { ...c, concluido: !c.concluido };
      }
      return c;
    }));
    setContadorReconciliacao(prev => prev + 1);
  };

  // Limpar todos os filtros
  const limparFiltros = () => {
    setTermoBusca('');
    setCategoriaSelecionada('ALL');
    setApenasConcluidos(false);
  };

  // Filtragem dos conceitos
  const conceitosFiltrados = useMemo(() => {
    return conceitos.filter(c => {
      const matchBusca = !termoBusca || 
        c.titulo.toLowerCase().includes(termoBusca.toLowerCase()) ||
        c.descricao.toLowerCase().includes(termoBusca.toLowerCase()) ||
        c.tags.some(t => t.toLowerCase().includes(termoBusca.toLowerCase()));

      const matchCategoria = categoriaSelecionada === 'ALL' || c.categoria === categoriaSelecionada;
      const matchConcluido = !apenasConcluidos || c.concluido;

      return matchBusca && matchCategoria && matchConcluido;
    });
  }, [conceitos, termoBusca, categoriaSelecionada, apenasConcluidos]);

  // Contagem de concluídos
  const totalConcluidos = useMemo(() => {
    return conceitos.filter(c => c.concluido).length;
  }, [conceitos]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col antialiased selection:bg-cyan-500 selection:text-white">
      
      {/* 1. Componente Cabecalho */}
      <Cabecalho
        titulo="DevPulse React Catalog"
        subtitulo="Explorador Interativo de Fundamentos do React • SENAI"
        totalConceitos={conceitos.length}
        concluidos={totalConcluidos}
      />

      <main className="max-w-6xl w-full mx-auto px-4 sm:px-6 py-8 flex-1 space-y-8">
        
        {/* Banner de Demonstração Arquitetural do Virtual DOM */}
        <section className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
          <div className="max-w-2xl">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full mb-3">
              Árvore de Componentes & Virtual DOM
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Aprenda React com Componentes Reutilizáveis
            </h2>
            <p className="mt-2 text-sm text-slate-300 leading-relaxed">
              Esta aplicação demonstra os 6 pilares exigidos na <strong>Aula 08</strong>: 
              sintaxe <strong>JSX</strong>, decomposição em <strong>Componentes</strong>, fluxo de dados via <strong>Props</strong>, 
              otimização com <strong>Virtual DOM</strong>, renderização de coleções com <strong>map() e keys</strong>, e <strong>Renderização Condicional</strong>.
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-800 flex flex-wrap items-center gap-4 text-xs text-slate-400">
            <span>Reconciliações disparadas no estado: <strong className="text-cyan-400 font-mono">{contadorReconciliacao}</strong></span>
            <span>•</span>
            <span>Conceitos filtrados: <strong className="text-white font-mono">{conceitosFiltrados.length} / {conceitos.length}</strong></span>
          </div>
        </section>

        {/* 2. Componente BarraDePesquisa */}
        <BarraDePesquisa
          termoBusca={termoBusca}
          aoMudarBusca={setTermoBusca}
          categoriaSelecionada={categoriaSelecionada}
          aoMudarCategoria={setCategoriaSelecionada}
          categorias={categorias}
          apenasConcluidos={apenasConcluidos}
          aoAlternarConcluidos={setApenasConcluidos}
          aoLimparFiltros={limparFiltros}
        />

        {/* 3. Componente ListaDeConceitos */}
        <ListaDeConceitos
          conceitos={conceitosFiltrados}
          aoAlternarStatus={alternarStatusConceito}
        />

      </main>

      {/* 4. Componente Rodape */}
      <Rodape
        ano={2026}
        autor="Letícia Vieira"
        instituicao="SENAI"
        docente="Prof. Me. Deivison S. Takatu"
      />

    </div>
  );
}
