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