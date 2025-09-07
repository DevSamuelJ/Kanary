Documentação do Projeto:

# Projetos Full Stack com Java

## Projeto 1: Sistema de Gerenciamento de Tarefas

### Descrição
Um aplicativo web para gerenciar tarefas em equipe, permitindo que os usuários criem, atribuam e acompanhem o progresso das tarefas. O sistema oferece uma visão clara das responsabilidades de cada membro da equipe e dos prazos para conclusão.

### Funcionalidades Principais
- **Cadastro e autenticação de usuários**: Sistema de login/registro com diferentes níveis de permissão.
- **Dashboard personalizado**: Visão geral das tarefas pendentes, em andamento e concluídas.
- **CRUD de tarefas**: Criar, visualizar, editar e excluir tarefas.
- **Atribuição de tarefas**: Designar responsáveis para cada tarefa.
- **Categorização**: Organizar tarefas por projetos, prioridades e etiquetas.
- **Notificações**: Alertas sobre prazos próximos e atualizações de tarefas.
- **Comentários**: Permitir discussões sobre cada tarefa.
- **Filtros e busca**: Encontrar tarefas por diferentes critérios.
- **Relatórios**: Estatísticas de produtividade e conclusão de tarefas.

### Tecnologias Utilizadas
- **Backend**: Java com Spring Boot
- **Frontend**: React.js, Tailwind CSS
- **Banco de Dados**: MongoDB
- **Autenticação**: JWT (JSON Web Tokens)
- **API**: RESTful

### Estrutura e Distribuição de Tarefas

### Etapa 1: Design e Implementação do Layout

#### Design no Figma
- **Criação do layout**: Desenvolvemos as telas principais do sistema no Figma, definindo cores, tipografia, espaçamentos e componentes visuais.
- **Paleta de Cores**: #0F0B15, #1A102C, #0F172A, #15142B.
- **Prototipagem**: Simulamos a navegação entre páginas para entender o fluxo do usuário e validar a experiência.
- **Padronização de estilos**: Criamos um guia de estilos com cores primárias, secundárias, fontes, tamanhos de botões e cards.

#### Implementação no Frontend (CSS/Tailwind)
- **Configuração inicial**: Criamos o projeto React e configuramos o Tailwind CSS para estilização.
- **Componentes base**: Traduzimos os elementos do Figma em componentes React, garantindo reutilização e consistência.
- **Estilos globais**: Implementamos tipografia, cores e espaçamentos globais conforme o guia do Figma.
- **Integração com estados e rotas**: Configuramos a navegação entre páginas e o gerenciamento de estados iniciais para componentes interativos.

> Observação: Esta etapa foca em transformar o layout visual do Figma em uma base sólida no frontend, preparando o projeto para a integração com o backend nas próximas etapas.

### Observações Adicionais
- O sistema deve priorizar **usabilidade**, **acessibilidade** e **performance**.
- Testes unitários e de integração são essenciais para garantir a confiabilidade do sistema.
- A documentação da API será criada usando **Swagger** ou outra ferramenta de documentação adequada.