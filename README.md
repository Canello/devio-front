# Desafio Devio Front-End

[Link para o Web App](https://main.d1y9bsk5okvonn.amplifyapp.com/)

## Índice

1. Como rodar o código?
2. Estrutura de pastas

## 1. Como rodar o código?

Passos para reproduzir o código na sua máquina:

1. Clonar o repositório
2. `npm install` para instalar as dependências
3. Se quiser alterar o endereço do servidor, ele pode ser encontrado em src/utils/constants.

4. `npm start` e o aplicativo deve estar funcionando.

_Versão do Node.js utilizada: 18.12.1._

## 2. Estrutura de pastas

O projeto está organizado da seguinte forma:

```
/src
    /assets
    /components
        /component
    /contexts
    /hooks
    /routes
        /subcomponents
    /services
    /utils
```

A maioria das pastas tem nomes autoexplicativos, mas algumas vale a pena detalhar.

Routes são as páginas principais usadas no React Router. Subcomponents são componentes específicos de uma route, não reutilizáveis. Já em components estão apenas componentes reutilizáveis. Services são funções para trocar dados com a API, servindo como intermediários entre a aplicação e o back-end.
