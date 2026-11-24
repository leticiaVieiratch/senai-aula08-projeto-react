# AULA 08: PROJETO REACT - FUNDAMENTOS E CATÁLOGO DE CONCEITOS

**Instituição:** SENAI  
**Curso:** Especialização Técnica / Desenvolvimento Front-End  
**Disciplina:** Frameworks Front-End  
**Docente:** Prof. Me. Deivison S. Takatu  
**Atividade:** Atividade Prática - Projeto React (Aula 08 - Slide 83)  
**Aluno(a):** Letícia Vieira  

---

## 1. Visão Geral do Projeto

O **DevPulse React Catalog** é uma aplicação interativa desenvolvida com **React 18** projetada para explorar, consolidar e demonstrar todos os conceitos estruturais apresentados na **Aula 08 (Projeto React)**:
1. **JSX (JavaScript XML)** com interpolação de expressões dinâmicas;
2. **Componentização** em árvore hierárquica modular;
3. **Props** com fluxo de dados unidirecional;
4. **Virtual DOM** e reconciliação (*diffing algorithm*);
5. **Renderização de Listas com Chaves Únicas (Keys)** via `map()`;
6. **Renderização Condicional** adaptativa a dados e filtros.

A aplicação inclui um catálogo completo dos conceitos com filtragem em tempo real por termos de busca, por categoria técnica e por status de aprendizado, com contador de reconciliações do estado e barra de progresso.

---

## 2. Aprofundamento dos Conceitos Estudados na Aula 08

### 2.1 JSX (JavaScript XML)
O **JSX** é uma extensão de sintaxe para JavaScript desenvolvida pelo ecossistema React. Ele permite descrever como a interface deve se comportar de forma declarativa utilizando uma marcação muito próxima ao HTML.

- **Expressões com Chaves `{}`:** No JSX, qualquer valor ou expressão JavaScript válida (variáveis, chamadas de função, operações matemáticas, operadores ternários) pode ser injetada entre chaves.
  ```jsx
  const total = 10;
  const elemento = <h2>Total de Itens: {total * 2}</h2>;
  ```
- **Diferenças Fundamentais em Relação ao HTML Clássico:**
  - `class` torna-se `className` (evitando conflito com a palavra reservada de classes JS);
  - `for` torna-se `htmlFor`;
  - Tags sem elementos filhos obrigatoriamente devem ser auto-fechadas (ex.: `<input />`, `<img />`, `<br />`);
  - Todo componente JSX deve retornar **um único elemento raiz** ou utilizar **Fragmentos** (`<React.Fragment>` ou `<> ... </>`).

---

### 2.2 Componentização e Árvore de Componentes
Em React, a interface é decomposta em blocos autônomos, reutilizáveis e com responsabilidade única chamados **Componentes**.

#### Árvore Hierárquica do Projeto:
```text
App (Componente Raiz com Estado e Filtros)
├── Cabecalho (Logo, Metadados, Progresso do Aluno)
├── BarraDePesquisa (Input de Busca, Filtro de Categoria, Toggle de Concluídos)
├── ListaDeConceitos (Gerenciador da Coleção com map e Estado Vazio)
│   ├── CardConceito (Card individual com badges, código e tags)
│   └── CardConceito ...
└── Rodape (Créditos Acadêmicos, SENAI e Docente)
```

**Regra de Ouro:** Funções de componentes React sempre iniciam com letra maiúscula (ex.: `Cabecalho()`), o que permite ao compilador JSX diferenciá-las de tags HTML padrão (ex.: `<header>`).

---

### 2.3 Props (Passagem de Propriedades)
As **Props** (propriedades) representam a forma padrão de transferir informações de um componente pai para um componente filho.

1. **Unidirecionalidade:** Os dados sempre fluem de cima para baixo na árvore hierárquica.
2. **Imutabilidade:** O componente filho que recebe as props não pode alterá-las diretamente (são *read-only*).
3. **Comunicação Filho &rarr; Pai via Callbacks:** Quando o filho necessita notificar o pai de uma alteração (como o clique no botão "Dominado"), o pai repassa uma função através de props (ex.: `aoAlternarStatus={alternarStatusConceito}`), garantindo a integridade do estado na raiz.

```jsx
// Exemplo no CardConceito:
function CardConceito({ titulo, nivel, aoAlternarStatus, id }) {
  return (
    <article>
      <h3>{titulo}</h3>
      <button onClick={() => aoAlternarStatus(id)}>Alterar Status</button>
    </article>
  );
}
```

---

### 2.4 DOM Tradicional vs Virtual DOM & Reconciliação
Manipular o DOM real do navegador diretamente (`document.getElementById`, `innerHTML`, `appendChild`) é computacionalmente caro, pois força o motor do navegador a recalcular o layout geométrico (*reflow*) e repintar a tela (*repaint*).

#### Como o Virtual DOM Funciona:
1. **Representação em Memória:** O React mantém uma representação virtual em árvore de toda a interface em JavaScript leve.
2. **Renderização:** Quando o estado muda (por exemplo, ao digitar no filtro de busca), o React executa novamente as funções dos componentes afetados e gera uma **nova árvore do Virtual DOM**.
3. **Reconciliação (Diffing Algorithm):** O algoritmo de reconciliação compara a nova árvore com a árvore anterior (*Diffing* com complexidade $O(n)$ baseada em heurísticas e chaves estáveis).
4. **Atualização Mínima no DOM Real:** Apenas os nós e nós de texto que realmente mudaram sofrem mutação no DOM real do navegador, garantindo performance e 60 FPS estáveis.

---

### 2.5 Listas e Propriedade Especial `key`
A renderização de coleções dinâmicas no React é feita utilizando a função nativa `Array.prototype.map()`.

```jsx
{conceitos.map((conceito) => (
  <CardConceito
    key={conceito.id}
    id={conceito.id}
    titulo={conceito.titulo}
  />
))}
```

#### Por que a `key` é Obrigatória?
- A propriedade `key` deve ser um identificador estável, persistente e único entre os nós irmãos (preferencialmente IDs do banco de dados ou do objeto, nunca o índice numérico do array se a lista for passível de ordenação ou filtragem).
- Ela orienta o algoritmo de Reconciliação para identificar exatamente **qual item foi inserido, removido ou reposicionado**, evitando renderizações desnecessárias e preservando o estado interno dos componentes.

---

### 2.6 Renderização Condicional
A aplicação utiliza três padrões consolidados de renderização condicional:

1. **Operador Ternário (`condicao ? <A /> : <B />`):**
   ```jsx
   {concluido ? '✓ Dominado' : '○ Em Estudo'}
   ```
2. **Curto-Circuito Lógico (`condicao && <Componente />`):**
   ```jsx
   {destaque && <span className="badge-destaque">★ Essencial</span>}
   ```
3. **Instrução `if` com Retorno Antecipado (*Early Return*):**
   Utilizada no componente `ListaDeConceitos` quando a lista filtrada está vazia (`conceitos.length === 0`), exibindo o painel informativo de estado vazio.

---

## 3. Estrutura do Diretório da Atividade

```text
04-Fundamentos-React/
├── index.html                  # Execução instantânea no navegador (React 18 + Babel Standalone + Tailwind)
├── package.json                # Configuração npm para Vite
├── vite.config.js              # Configuração do Vite React Plugin
├── README.md                   # Documentação conceitual e instruções
└── src/
    ├── main.jsx                # Ponto de entrada React 18 createRoot
    ├── App.jsx                 # Componente raiz, estado e composição
    ├── styles.css              # Tipografia e estilos base
    ├── data/
    │   └── conceitos.js        # Dataset com 8 conceitos estruturados
    └── components/
        ├── Cabecalho.jsx       # Topo com métricas de aprendizado
        ├── BarraDePesquisa.jsx # Formulário controlado de busca e filtros
        ├── CardConceito.jsx    # Card individual com props e condicional
        ├── ListaDeConceitos.jsx# Mapeamento com chaves estáveis
        └── Rodape.jsx          # Rodapé acadêmico institucional
```

---

## 4. Instruções de Execução

### Opção 1: Execução Direta no Navegador (Zero Setup / Recomendada para Avaliação)
1. Navegue até a pasta: `c:\Users\Letícia Vieira\Desktop\DevisonProjeto\08-Projeto-React\`
2. Abra o arquivo `index.html` em qualquer navegador web (Google Chrome, Microsoft Edge, Firefox).
3. A aplicação utiliza React 18, Babel Standalone e Tailwind CSS via CDN, funcionando perfeitamente sem exigir qualquer instalação prévia de pacotes.

### Opção 2: Execução com Servidor de Desenvolvimento Vite (Node.js)
```bash
# Entrar na pasta do projeto
cd "08-Projeto-React"

# Instalar dependências
npm install

# Iniciar servidor local
npm run dev
```
Acesse `http://localhost:3000` no seu navegador.

---

## 5. Versionamento e Publicação no GitHub e Vercel

```bash
# Inicializar o repositório Git
git init
git add .
git commit -m "feat: implementa catalogo de fundamentos do React 18 com JSX, props, listas e virtual dom"

# Conectar ao repositório remoto do GitHub
git branch -M main
git remote add origin https://github.com/leticiavieira/devpulse-react-fundamentos.git
git push -u origin main
```

Para deploy na Vercel:
1. Acesse `https://vercel.com/new`;
2. Importe o repositório do GitHub;
3. Framework Preset: **Vite** (ou Other caso use o `index.html` estático);
4. Clique em **Deploy**.
