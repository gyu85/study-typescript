function returnVoid(message: string): void {
  console.log(message);

  return;
}

const r = returnVoid('리턴이 없다.');
// :void는 리턴을 가지고 무엇을 하지 않겠다라는 의미

function f7(a: { name: string; age: number }): string {
  return `이름은 ${a.name}이고, 연령대는 ${
    Math.floor(a.age / 10) * 10
  }대 입니다.`;
}

class Person {}
class Developer extends Person {
  coding() {}
}
class StartupDeveloper extends Developer {
  burning() {}
}

function tellme(f: (d: Developer) => Developer) {}

// Developer => Developer에다가 Developer => Developer를 할당하는 경우
tellme(function dToD(d: Developer): Developer {
  return new Developer();
});

// Developer => Developer에다가 Person => Developer를 할당하는 경우
tellme(function pToD(d: Person): Developer {
  return new Developer();
});

// Developer => Developer에다가 StartupDeveloper => Developer를 할당하는 경우
tellme(function sToD(d: StartupDeveloper): Developer {
  return new Developer();
});
