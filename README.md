
# Visão Geral do Sistema

**Nome do Projeto:** Website Portfolio

**Tipo:** Pessoal 

**Última Versão Lançada:**  Em desenvolvimento

**Versão em Desenvolvimento:** 0.0.0

**Descrição:** Meu site de portfólio.

**Principais Tecnologias:** React, typescript, github, actions





---
## 📑 Sumário

- [01 Arquitetura](#01-arquitetura)
- [02 Desenvolvimento](#02-desenvolvimento)
- [03 Estrutura De Pastas](#03-estrutura-de-pastas)
- [04 Ambiente](#04-ambiente)
- [05 Ops](#05-ops)
- [06 Notas](#06-notas)
- [07 Pendentes](#07-pendentes)


---
<details>
  <summary>📌 01 Arquitetura</summary>

# Arquitetura

## Descrição

</details>

---
<details>
  <summary>📌 02 Desenvolvimento</summary>

# Práticas Para Desenvolvimento do Sistema

# Segurança
- Uso de `variáveis de Ambiente`, que devem ser adicionadas ao `.gitignore`
- Colocar `variáveis sensíveis` (senhas e tokens) em `Current Value` no `Postman` para backend

# Convenções de Desenvolvimento

## Commits
- Seguir Conventional Commits
    - `<tipo>(<escopo opcional>): <descrição curta>`
    - De preferência em `Inglês` e na `Simple Present`, para padronização

- Exemplos:
  - feat(auth): adds login OAuth
  - fix(api): corrects validation bug
  - docs: updates doc file x
</details>

---
<details>
  <summary>📌 03 Estrutura De Pastas</summary>

# Estrutura de Pastas

## Raíz do Repositório

```
Project-Root/
├─ src/ # Aplicativo do Repositório
├─ docs/ # dist 
├─ readme_files/ # Documentação do Repositório
├─ .github/workflows/ # Scripts de CI/CD
├─ .gitignore # Arquivos a serem ignorados em todos commits
├─ README.md # Documentação integral feita a partir dos arquivos de /docs
```

## Apps
```
apps/(nome do app)
├── src/ # Código-fonte principal

```
</details>

---
<details>
  <summary>📌 04 Ambiente</summary>

# Preparação do Ambiente

1. **Subir o servidor de desenvolvimento**
- npm run dev 


2. **Gerar dist**
- npm run build

3. **Enviar para github pages**
- npm run deploy

</details>

---
<details>
  <summary>📌 05 Ops</summary>

# Pipeline DevOps

## CI

**Descrição**: Processos que ocorrem durante a integração e atualização de código do repositório (commits)

**Processos**:

- Atualizar README.md principal automaticamente
    - Arquivo: `generate_readme[version].yml`
    - Funcionalidade: atualiza o README.md da raíz do repositório sempre que algum arquivo localizado em `docs/` for alterado
    - Branches: todas, com exceção da principal
</details>

---
<details>
  <summary>📌 06 Notas</summary>

# Notas

 **Descrição:** Notas e informativos úteis para a documentação, como decisões arquiteturais e opiniões.

  **Formato:** [- data - nome do autor - descrição]. Em ordem descendente por data

## Conteúdo

- 02/06/2026 - Thiago Costa - Nota inicial de exemplo
</details>

---
<details>
  <summary>📌 07 Pendentes</summary>

# Pendentes

[] - Organizar projetos

[] - Cmd em movimento

## Feitos

[ x ] - Atualizar footer

[ x ] - Página de "Em construção"

[ x ] - Melhorar intro section

[ x ] - Versão mobile

[ x ] - Melhorar navbar

[ x ] - Seção de skills

[ x ] - Currículo Inglês
</details>
