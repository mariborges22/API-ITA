# API-ITA


Esta é uma API de recursos educacionais do Instituto Tecnológico de Aeronáutica (ITA), desenvolvida com Node.js e Sequelize. A API fornece informações sobre cursinhos, canais do YouTube, sites e comunidades relacionados ao ITA.

## Funcionalidades

### Cursinhos

- Consulta de cursinhos disponíveis
- Cadastro de novos cursinhos
- Atualização de informações de cursinhos
- Exclusão de cursinhos

### Canais do YouTube

- Consulta de canais disponíveis
- Cadastro de novos canais
- Atualização de informações de canais
- Exclusão de canais

### Sites

- Consulta de sites disponíveis
- Cadastro de novos sites
- Atualização de informações de sites
- Exclusão de sites

### Comunidades

- Consulta de comunidades disponíveis
- Cadastro de novas comunidades
- Atualização de informações de comunidades
- Exclusão de comunidades

## Tecnologias utilizadas

- Node.js: plataforma de desenvolvimento JavaScript
- Express: framework web para criação de APIs
- Sequelize: ORM (Object-Relational Mapping) para interagir com o banco de dados relacional
- MySQL: banco de dados relacional para armazenamento dos dados

## Endpoints

### Cursinhos

- `GET /cursinhos`: Retorna todos os cursinhos disponíveis.
- `POST /cursinhos/save`: Cadastra um novo cursinho.
- `PUT /cursinhos/update/:id`: Atualiza as informações de um cursinho existente.
- `DELETE /cursinhos/delete/:id`: Exclui um cursinho.

### Canais do YouTube

- `GET /canais`: Retorna todos os canais do YouTube disponíveis.
- `POST /canais/save`: Cadastra um novo canal do YouTube.
- `PUT /canais/update/:id`: Atualiza as informações de um canal do YouTube existente.
- `DELETE /canais/delete/:id`: Exclui um canal do YouTube.

### Sites

- `GET /sites`: Retorna todos os sites disponíveis.
- `POST /sites/save`: Cadastra um novo site.
- `PUT /sites/update/:id`: Atualiza as informações de um site existente.
- `DELETE /sites/delete/:id`: Exclui um site.

### Comunidades

- `GET /comunidades`: Retorna todas as comunidades disponíveis.
- `POST /comunidades/save`: Cadastra uma nova comunidade.
- `PUT /comunidades/update/:id`: Atualiza as informações de uma comunidade existente.
- `DELETE /comunidades/delete/:id`: Exclui uma comunidade.

## Configuração do Banco de Dados

Certifique-se de configurar corretamente a conexão com o banco de dados PostgreSQL no arquivo `database/database.js`.

## Como executar a API

1. Certifique-se de ter o Node.js instalado em sua máquina.
2. Instale as dependências do projeto executando o comando `npm install`.
3. Execute o comando `npm start` para iniciar o servidor.
4. A API estará disponível em `http://localhost:9090`.

