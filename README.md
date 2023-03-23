# Automação de testes para o site Alurapic

[![NPM](https://img.shields.io/npm/l/react)](https://github.com/analuciatorres/automacao_alurapic/blob/cedff5febcac14e677cb9450ac2fd4e4357c21f8/LICENSE) 

# Sobre o projeto
Este repositório contém um projeto de automação de testes funcionais para o site Alurapic, utilizando o framework Cypress.

## Funcionalidade
Esse teste pode ser usado para verificação das funcionalidades da Alurapic
- Verificar pagina inicial
- Verificar pagina de registro de usuários
- Verificar página de login de usuário
- Verificar área do usuário

## Tecnologias utilizadas
Este teste foi feito para rodar em uma máquina com Cypress v12.7.0 tendo como prérequisitos:
- Node.js instalado na versão 12 ou superior

## Instalação no Ubuntu Linux
 1 - Atualize o sistema:
```
sudo apt-get update
```
 2 - Instale o Node.js:
```
sudo apt-get install nodejs
```
 3 - Verifique a versão do Node.js:
 ```
node -v
```
 4 - Instale o gerenciador de pacotes npm:
 ```
sudo apt-get install npm
```


## Instalação no Windows

 Baixe e instale o Node.js através do site oficial: https://nodejs.org/en/download/
 
## Clonando o repositório
 1 - Abra o terminal ou prompt de comando e navegue até a pasta onde deseja clonar o repositório.
 2 - Execute o seguinte comando para clonar o repositório:
 ```
git clone https://github.com/analuciatorres/automacao_alurapic.git
```
## Instalando as dependências do projeto
 1 - Navegue até a pasta do projeto através do terminal ou prompt de comando:
 ```
cd automacao_alurapic
```
 2 - Instale as dependências do projeto com o seguinte comando:
 ```
npm install
```

## Executando os testes
 Para executar os testes, utilize o seguinte comando:
 ```
npm test
```
Os testes serão executados em modo **headless** (sem exibir a interface do navegador).
Caso queira executar os testes em modo interativo (exibindo a interface do navegador), utilize o seguinte comando:

```
npm run test:open
```
## Estrutura do projeto
O projeto está organizado da seguinte forma:
- O diretório **cypress/integration** contém os arquivos com os casos de teste.
- O diretório **cypress/fixtures** contém os arquivos com dados de teste.
- O diretório **cypress/support** contém arquivos de suporte, como configurações e funções auxiliare
- O arquivo **cypress.config.js** contém configurações globais para o Cypress.

## Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

## Autor

**Ana Lucia Torres da Silva**

https://github.com/analuciatorres

https://www.linkedin.com/in/analuciatorresdasilva/
