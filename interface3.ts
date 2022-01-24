interface Person3 {
  name: string;
  age?: number;
  [x: string]: any; // 어떤 이름의 프로퍼티가 와도 상관없다.
}

function hello3(person: Person3): void {
  console.log(`안녕하세요! ${person.name}입니다.`);
}

const p31: Person3 = {
  name: 'Mark',
  age: 39
};

const p32: Person3 = {
  name: 'Anna',
  sisters: ['Sung', 'Chan']
};

const p33: Person3 = {
  name: 'Bokdaengi',
  father: p31,
  mother: p32
};

const p34: Person3 = {
  name: 'Bokdaengi'
};

hello3(p34);
