// Generics

function print<T>(param: T) {
  console.log(param);
}

function printNumber(number: number) {
  print<number>(number);
}

print<string>('test');

function useState<S>(initialState?: S) {
  let state = initialState;

  function setState(newState: S) {
    state = newState;

    return state;
  }

  return { state, setState };
}

const state = useState<number>(1512);