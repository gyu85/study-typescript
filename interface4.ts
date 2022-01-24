interface Person4 {
  name: string;
  age: number;
  hello(): void;
}

const P41: Person4 = {
  name: 'Mark',
  age: 39,
  hello: function (): void {
    console.log(`안녕하세요! ${this.name} 입니다.`);
  }
};

const P42: Person4 = {
  name: 'Mark',
  age: 39,
  hello(): void {
    console.log(`안녕하세요! ${this.name} 입니다.`);
  }
};

// const P43: Person4 = {
//   name:'Mark',
//   age:39,
//   hello: ():void => {
//     console.log(`안녕하세요! ${this.name} 입니다.`);
//   }
// }

P41.hello();
P42.hello();
