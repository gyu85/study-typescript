declare const maybe: unknown;

//type guard

const aNumber: number = maybe;

if (maybe === true) {
  const aBoolean: boolean = maybe;
}

if (typeof maybe === 'string') {
  const aString: string = maybe;
}
