interface Person1 {
  name: string;
  age: number;
}

function hello1(person: { name: string; age: number }): void {
  console.log(`안녕하세요! ${person.name}입니다.`);
}

const pNormal: { name: string; age: number } = {
  name: 'Mark',
  age: 39
};

const p1: Person1 = {
  name: 'Mark Deweain',
  age: 39
};

hello1(pNormal);
hello1(p1);
