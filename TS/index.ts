const text: string = 'text';
const number: number = 'text';
const bool: boolean = true;

const array: string[] = ['a', 'b'];
const tuple: [number, string] = [7, 'jeziel'];

enum Theme {
  Dark = 'dark',
  Light = 'light',
}

const any: any = {};

let unknown: unknown = '';

function sum(num1: number, num2: number) {
  return num1 + num2;
}

const result = sumV(10, 20);


function sumV(num1: number, num2: number): void {
  // 
}


function never(param1, param2): never {
  while(true) {
    console.log('hello friend!');
  }
  
  // or

  throw new Error('');
}


let test = undefined;

let test2 = null;