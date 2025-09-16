# Como Iniciar o Projeto

## 1. Clonar o repositório

```bash
git clone https://github.com/AthosGuedes/NLW-Agents.git
```

## 2. Configuração do Backend

1. Acesse o diretório do backend:

```bash
cd server
```

2. Instale as dependências:

```bash
npm install
```

3. Configure as variáveis de ambiente no arquivo `.env`.

4. **Se o banco de dados estiver rodando no Docker:**

   * Verifique e ajuste as configurações no arquivo `docker-compose.yml`.
   * Abra o Docker Desktop.
   * Execute o comando:

   ```bash
   docker-compose up -d
   ```

   **⚠ Importante:** Os dados do `docker-compose.yml` devem coincidir com os dados do arquivo `.env`.

## 3. Iniciando a aplicação Backend

* Em **modo desenvolvimento**:

```bash
npm run dev
```

* Em **modo produção**:

```bash
npm run start
```

## 4. Configuração do Frontend

1. Acesse o diretório do frontend:

```bash
cd ../web
```

2. Instale as dependências:

```bash
npm install
```

3. Inicie a aplicação:

* Em **modo desenvolvimento**:

```bash
npm run dev
```

* Em **modo produção**:

```bash
npm run start
```

---

> 💡 **Dica rápida:** Certifique-se de que as variáveis de ambiente e as configurações do Docker estejam corretas antes de iniciar a aplicação.

--- 

**Projeto da [Rocketseat](https://www.instagram.com/rocketseat/), 20ª edição do NLW.**


