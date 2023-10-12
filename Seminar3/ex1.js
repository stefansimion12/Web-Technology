const birthYears = [1990, 2000, 1985, 1995, 2005, 2010];

const filteredArr = birthYears.filter(a => new Date().getFullYear() - a >= 18);

console.log(filteredArr);