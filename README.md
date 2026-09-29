# Track Shipping

Aplicação web para consulta de rastreamento de pedidos. O usuário informa um código de rastreio e visualiza o status atual, os detalhes da entrega e a linha do tempo das movimentações.

Este é um projeto de estudos, criado para praticar e manter atualizados os conhecimentos em **React** e **TypeScript** por meio de uma interface funcional, responsiva e integrada a uma API externa.

## Objetivos de estudo

- Modelar dados de uma API com interfaces TypeScript;
- Trabalhar com componentes React reutilizáveis e tipados;
- Gerenciar estados de formulário, carregamento, erro e resultado vazio;
- Fazer requisições HTTP assíncronas com Axios;
- Organizar uma aplicação por responsabilidades (páginas, componentes, serviços e tipos);
- Estilizar interfaces responsivas com Tailwind CSS;
- Configurar proxy no ambiente local e redirecionamento para deploy na Vercel.

## Funcionalidades

- Consulta de pedidos pelo código de rastreamento;
- Exibição do número e do tipo de entrega;
- Destaque do status e da atualização mais recentes;
- Linha do tempo ordenada do evento mais recente para o mais antigo;
- Opção de mostrar apenas eventos relevantes ou todos os registros recebidos;
- Tradução de status conhecidos para português;
- Feedback visual durante a consulta;
- Mensagens para código ausente, rastreamento não encontrado e falhas na API;
- Layout adaptado para telas menores e maiores.

## Tecnologias

| Tecnologia | Uso no projeto |
| --- | --- |
| [React 18](https://react.dev/) | Construção da interface por componentes |
| [TypeScript](https://www.typescriptlang.org/) | Tipagem da aplicação e do retorno da API |
| [Vite](https://vite.dev/) | Ambiente de desenvolvimento e build |
| [Tailwind CSS](https://tailwindcss.com/) | Estilização responsiva |
| [Axios](https://axios-http.com/) | Cliente HTTP para a consulta de rastreio |
| [React Router](https://reactrouter.com/) | Estrutura de rotas da aplicação |
| [Lucide React](https://lucide.dev/) | Ícones da interface |
| [Vercel](https://vercel.com/) | Configuração de redirecionamento para produção |

## Pré-requisitos

- [Node.js](https://nodejs.org/) 20 ou superior;
- npm (instalado junto com o Node.js).

## Como executar localmente

```bash
# Clone o repositório
git clone https://github.com/Limawes/track-shipping.git

# Acesse a pasta do projeto
cd track-shipping

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

Após iniciar o servidor, abra no navegador o endereço exibido pelo Vite — normalmente `http://localhost:5173`.

## Scripts disponíveis

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o ambiente de desenvolvimento com recarregamento automático. |
| `npm run build` | Valida os tipos com TypeScript e gera a versão de produção em `dist/`. |
| `npm run preview` | Publica localmente a versão gerada pelo build para conferência. |

## Estrutura do projeto

```text
src/
├── components/              # Componentes visuais reutilizáveis
│   ├── Loading.tsx          # Estado de carregamento
│   ├── TimelineItem.tsx     # Item individual da linha do tempo
│   ├── TrackingCard.tsx     # Resumo do pedido e status atual
│   ├── TrackingSearch.tsx   # Campo e ação de busca
│   └── TrackingTimeline.tsx # Histórico de movimentações
├── pages/
│   └── Home.tsx             # Página principal e controle de estados
├── services/
│   └── trackingService.ts   # Integração HTTP e traduções de status
├── types/
│   └── tracking.ts          # Interfaces do retorno da API
├── App.tsx                  # Rotas da aplicação
├── main.tsx                 # Ponto de entrada React
└── style.css                # Estilos globais e diretivas do Tailwind
```

## Integração de rastreamento

As consultas são encaminhadas para a API pública de rastreamento da SPX. No desenvolvimento, o Vite redireciona chamadas feitas para `/api` para o serviço externo, o que evita limitações de CORS no navegador. Em produção, o mesmo comportamento é configurado em `vercel.json`.

Exemplo de chamada interna da aplicação:

```text
/api/get_order_info?spx_tn=CODIGO_DE_RASTREAMENTO&language_code=pt
```

O funcionamento da consulta depende da disponibilidade da API externa e de o código informado ser válido. Como a integração é usada para fins educacionais, alterações no serviço remoto podem exigir ajustes no projeto.

## Possíveis próximos passos

- Adicionar testes de componentes e do serviço de rastreamento;
- Separar as traduções em um dicionário mais abrangente;
- Permitir a busca ao pressionar `Enter` no campo de código;
- Criar uma camada de validação para os dados retornados pela API;
- Adicionar testes de acessibilidade e refinamentos de navegação por teclado.

## Licença

Projeto de estudos para fins educacionais. Caso queira reutilizá-lo, verifique as condições de uso das dependências e da API consultada.
