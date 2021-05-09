# React Redux

## Link da vídeo aula:
www.youtube.com

## Link para notion da aula:
https://www.notion.so/react-redux-5e6aebad77d64e919531eb536b4a4e25

Certifique-se de copiar o check list para sua conta, para que tenho melhor proveito das funções do NOTION.

## Clone o repositório.
```bash
git clone git@github.com:dekopossas/react-redux.git
```

## Consultando o Código.
Se você não pretende refazer os paços, quer apenas consultar o código, de um checkout na branch da aula-alvivo.
```bash
git checkout aula-alvivo
```

## Iniciando o projeto.
Faça o passo a passo junto com o vídeo. Criei uma abertura especial para vocês, vejo vocês lá.

## Crie uma branch.
Não se esqueça de criar a sua própria branch para ficar livre com suas ideias e brincadeiras sem mexer
no código dos amiginhos =D.

## Criei um app react
```bash
npx create-react-app reactredux
```

## Apague os arquivos.
Dentro de SRC apague todos os arquivos, pois não precisaremos deles.

- Crie o arquivo src/app.js assim:

```javascript
import React from 'react';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <h1>Hellow World!</h1>
      </div>
    );
  }
}

export default App;
```

- Depois crie o arquivo src/index.js:

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
```
## Pronto para começar.

Não se esqueça de que sempre que precisar pode entrar na branch aula-alvivo para consultar o meu codigo.
