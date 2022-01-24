interface IPerson1 {
  name: string;
  age?: number;
  hello(): void;
}

class Whois implements IPerson1 {
  name: string;
  age?: number | undefined;

  constructor(name: string) {
    this.name = name;
  }

  hello(): void {
    console.log(`안녕하세요! ${this.name} 입니다.`);
  }
}
// 클래스의 사용
const whatIam: IPerson1 = new Whois('Mark');

whatIam.hello();
