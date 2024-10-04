console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);

console.log(2 ** 53);
console.log(2 ** 54);
console.log(Number.MAX_SAFE_INTEGER);

console.log(4875667890876456790009876654n);
console.log(BigInt(4875667890876456791109876654n));
console.log(BigInt(4875667890354656465654645644646666791109876654n));

console.log(232534999234744n * 2342345553542n);

// const a = 234892759877482538598048n;
// const b = 23;
// console.log(a * b); Cannot mix BigInt and other types, use explicit conversions
//excepetion
console.log(20n > 15);
console.log(20n === 20);
console.log(typeof 20n);
console.log(20n == 20);
console.log(20n == "20");

//division
console.log(11n / 3n);
// console.log(10n / 3); Cannot mix BigInt and other types, use explicit conversions
console.log(10n / 3n);
