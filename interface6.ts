interface IPerson2 {
  name: string;
  age?: number;
}

interface IKorean extends IPerson2 {
  city: string;
}

const iAm: IKorean = {
  name: '규',
  city: '서울'
};
