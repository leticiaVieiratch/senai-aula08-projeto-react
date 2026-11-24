/**
 * DADOS DOS CONCEITOS DO REACT
 * Disciplina: Frameworks Front-End | SENAI
 * Docente: Prof. Me. Deivison S. Takatu
 */

export const CONCEITOS_REACT = [
  {
    id: 1,
    titulo: "JSX (JavaScript XML)",
    categoria: "Sintaxe & Estrutura",
    nivel: "Iniciante",
    descricao: "Extensão de sintaxe para JavaScript que permite escrever estruturas similares ao HTML dentro do código JS. As chaves {} possibilitam injetar qualquer expressão JavaScript válida.",
    exemplo: "const elemento = <h1 className=\"title\">Olá, {nome}!</h1>;",
    destaque: true,
    concluido: true,
    tags: ["Sintaxe", "Babel", "HTML-in-JS"]
  },
  {
    id: 2,
    titulo: "Componentização & Árvore",
    categoria: "Arquitetura",
    nivel: "Iniciante",
    descricao: "Funções JavaScript puras que retornam elementos React. Permitem encapsular lógica, estado e apresentação em blocos reutilizáveis, compondo uma hierarquia em árvore (App -> Filhos).",
    exemplo: "function Botao({ rotulo }) { return <button>{rotulo}</button>; }",
    destaque: true,
    concluido: true,
    tags: ["Reutilização", "Modularidade", "Funções"]
  },
  {
    id: 3,
    titulo: "Props (Properties)",
    categoria: "Comunicação",
    nivel: "Iniciante",
    descricao: "Mecanismo unidirecional de passagem de dados de um componente pai para um filho. As props são estritamente imutáveis (read-only) do ponto de vista do componente receptor.",
    exemplo: "<CardConceito titulo=\"Props\" nivel=\"Iniciante\" ativo={true} />",
    destaque: true,
    concluido: true,
    tags: ["Unidirecional", "Imutabilidade", "Comunicação"]
  },
  {
    id: 4,
    titulo: "Virtual DOM & Reconciliação",
    categoria: "Performance",
    nivel: "Intermediário",
    descricao: "Representação leve da árvore do DOM mantida em memória. Quando ocorre mudança de estado, o React compara a nova árvore com a anterior (Diffing) e aplica apenas as mutações estritamente necessárias no DOM real.",
    exemplo: "ReactDOM.createRoot(document.getElementById('root')).render(<App />);",
    destaque: true,
    concluido: true,
    tags: ["Diffing Algorithm", "Otimização", "Reconciliação"]
  },
  {
    id: 5,
    titulo: "Listas e Keys Estáveis",
    categoria: "Manipulação de Coleções",
    nivel: "Intermediário",
    descricao: "O método Array.prototype.map() transforma arrays de objetos em elementos JSX. A prop 'key' fornece uma identidade estável e única que permite ao algoritmo de reconciliação rastrear adições, remoções e reordenações.",
    exemplo: "{itens.map(item => <li key={item.id}>{item.nome}</li>)}",
    destaque: false,
    concluido: true,
    tags: ["map()", "Keys", "Coleções"]
  },
  {
    id: 6,
    titulo: "Renderização Condicional",
    categoria: "Controle de Fluxo",
    nivel: "Iniciante",
    descricao: "Técnica para renderizar diferentes blocos visuais com base em condições booleanas ou de dados, utilizando operadores ternários (condicao ? A : B), curto-circuito lógico (&&) ou instruções if/return.",
    exemplo: "{carregando ? <Spinner /> : <ListaResultados dados={itens} />}",
    destaque: false,
    concluido: true,
    tags: ["Ternário", "Curto-Circuito", "UI Adaptativa"]
  },
  {
    id: 7,
    titulo: "Fragmentos (<React.Fragment> / <>)",
    categoria: "Sintaxe & Estrutura",
    nivel: "Iniciante",
    descricao: "Permite agrupar múltiplos elementos filhos adjacentes sem adicionar um nó extra (como uma <div> redundante) à árvore real do DOM.",
    exemplo: "return (<><h1>Título</h1><p>Parágrafo</p></>);",
    destaque: false,
    concluido: false,
    tags: ["Limpeza de DOM", "Fragment", "Sintaxe"]
  },
  {
    id: 8,
    titulo: "Regras de Ouro do JSX",
    categoria: "Boas Práticas",
    nivel: "Iniciante",
    descricao: "Convenções mandatórias do React: tags sem conteúdo devem ser autofechadas (<img />), atributos HTML devem adotar camelCase (ex: className, tabIndex) e todo componente deve retornar uma raiz única.",
    exemplo: "<label htmlFor=\"email\">E-mail</label><input id=\"email\" />",
    destaque: false,
    concluido: false,
    tags: ["Convenções", "camelCase", "Acessibilidade"]
  }
];
