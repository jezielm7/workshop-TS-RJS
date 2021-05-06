# TypeScript

### Criado com o objetivo de ser superset para o javascript.
### Considerado uma linguagem.

## Principais características:
  - Adicionar os tipos estáticos ao código javascript.
  - Tudo é transpilado para javascript.

## Vantagens:
  - Evita resultados inesperados.
  - Ajuda na compreensão do código.
  - Ajuda no intellisense (inteligência do editor de texto).
  - Permite trabalharmos com as últimas funcionalidades da linguagem.

## Desvantagens:
  - Queda na produtividade no processo de aprendizado.

# Types

## Primitive Types:
  - String;
  - Number;
  - Boolean;

## Other Types:
  - Array;  
  - Tuple;  
  - Enum;
  - Any;
  - Unknown;

### Array
  ```js 
  const array: string[] = ['a', 'b'];
  ```

### Tuple
  Array com os dados definidos.
  ```js 
    const tuple: [number, string] = [7, 'jeziel'];
  ```

### Enum
  Salvar uma lista de itens.
  ```js 
  enum Theme {
    Dark = 'dark',
    Light = 'light',
  };
  ```

### Any
  Tipagem não recomendada.
  UseCase: Quando não se sabe o tipo;
```js
const any: any = {};
```

### Unknown
  Alternativa recomendada ao Any.
  UseCase: Quando não se sabe o tipo;

  Só é compatível com tipos: Unknown e Any;

```js
  const unknown: unknown = '';
```

### Tipagem em funções
  - Void;
  - Never;
  - Undefined;
  - Null;



### Void
  Quando não existe retorno na função.

### Never
  Quando não há retorno, e a função executa em loop.
  useCase: Funções que crasham;

### Undefined
  Valor indefinido


# Utility Types

## Partial

```js
  interface UserData {
    name: string;
    username: string:
    email: string;
    password: string;
  }

  function showPartialUserData(user: Partial<UserData>) {
    console.log(user);
  }

  showPartialUserData({ name: 'Jeziel' });
```
### O partial permite que você tenha acesso apenas 
### à algumas props, sem a necessidade de usar todas.

## Pick

```js
  interface UserData {
    name: string;
    username: string:
    email: string;
    password: string;
  }

  function showPickUserData(user: Partial<UserData, 'name' | 'username'>) {
    console.log(user);
  }

  howPickUserData({ 
    name: 'Jeziel', 
    username: 'jezielm7',
    email: 'test@email.com' // error
  });
```

### O Pick define as propriedades obrigatórias que a função pode receber.

## Omit

```js
  interface UserData {
    name: string;
    username: string:
    email: string;
    password: string;
  }

  function showOmitUserData(user: Omit<UserData, 'name'>) {
    console.log(user);
  }

  showOmitUserData({ 
    username: 'jezielm7', 
    email: 'test@mail.com', 
    password: '123456789#', 
    name: 'Jeziel Marques', // error
  });
```

### O Omit define as propriedades que a função não precisa receber.

## Readonly

```js
  const newUser: Readonly<UserData> = {
    name: 'Jeziel', 
    username: 'jezielm7',
    email: 'test@email.com', 
    password: '123456789#'
  } 

  newUser.name = ''; // error
```

### O Readonly define as propriedades para apenas leitura.
### Ou seja, as propriedades definidas se tornam imutáveis.


# Generics

### São funcionalidades que permitem a passagem de tipos.

```js
  function print<T>(param: T) {
    console.log(param);
  }

  function printNumber(number: number) {
    print<number>(number);
  }

  print<string>('test');
```

### Generics Keywords

    T: Type;
    S: State;
    K: Key;
    V: Value;
    E: Element;

```js 
  function useState<S extends number | string = string>(initialState ?: S) {};
  
  // Definindo tipos específicos e default para o generic.
```