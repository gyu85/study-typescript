// type alias
type EatType = (food: string) => void;

// interface
interface IEat {
  (food: string): void;
}

// type alias
type PersonList = string[];

// interface
interface IPersonList {
  [x: number]: string;
}

// intersection
interface ErrorHandling {
  success: boolean;
  error?: { message: string };
}

interface ArtistsData {
  artists: { name: string }[];
}

// type alias
type ArtistsResponseType = ArtistsData & ErrorHandling;

//interface
interface IArtistsResponse extends ArtistsData, ErrorHandling {}

let art: ArtistsResponseType;
let iar: IArtistsResponse;

// union types
interface IBird {
  fly(): void;
  layEggs(): void;
}

interface IFish {
  swim(): void;
  layEggs(): void;
}

type PetType = IBird | IFish;

//interface IPet extends PetType {}
// Error : 인터페이스는 개체 형식 또는 정적으로 알려진 멤버가 포함된 개체 형식의 교집합만 확장할 수 있습니다.

//class Pet implements PetType {}
// Error : 클래스는 개체 형식 또는 정적으로 알려진 멤버가 포함된 개체 형식의 교집합만 구현할 수 있습니다.

//Declaration Mergin
// interface 이름을 같게 선언하면 같은 이름끼리 속성이 머지된다.
// type alias는 불가능 하다.
interface MergingInterface {
  a: string;
}

interface MergingInterface {
  b: string;
}

let mi: MergingInterface;

//mi.
