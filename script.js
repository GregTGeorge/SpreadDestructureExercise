// 1a.
const mcuShows = [
    `Loki`,
    `Moon Knight`
];

// 1b.
const starWarsShows = [
    `The Mandalorian`,
    `The Book of Boba Feet`
];

// 1c.
const disneyPlusShows = [
    ...mcuShows,
    ...starWarsShows,
    `The Beatles: Get Back`
];

// 1d.
console.log(disneyPlusShows);

// 2a.
const netflixMovies = {
    action: `Extraction`,
    crime: `The Irishman`
};

// 2b.
const amazonPrimeMovies = {
    action: `The Tommorrow War`,
    drama: `One Night in Miami`
};

// 2c.
const streamingMovies = {
    ...amazonPrimeMovies,
    ...netflixMovies,
    musical: `Hamilton`
};

// 2d.
console.log(streamingMovies);

// 3a.
const disneyJunior = [
    `Mickey Mouse Clubhouse`,
    `Spidey and His Amazing Friends`
]

// 3b.
const [mickey, spidey] = disneyJunior;

// 3c.
console.log(mickey, spidey);

// 4a.
const avengers = {
    warMachine: `James Rhodes`,
    theHulk: `Bruce Banner`
};

// 4b.
const {warMachine, theHulk} = avengers;

// 4c.
console.log(warMachine, theHulk);

// 4d.
const moreAvengers = {
    blackWidow: `Natasha Romanoff`,
    hawkeye: `Clint Barton`,
    ironman: `Tony Stark`
};

// 4e.
const {blackwidow: nat, ...others} = moreAvengers;

// 4f.
console.log(nat, others);

// BONUS
const bonus = {
    first: [1,2,3],
    second: [4,5,6],
    third:[7,8,9]
};

// 5a.
const all = [
    ...bonus.first,
    ...bonus.second,
    ...bonus.third
]

console.log(all);

// 5b.
const [one, two, three, four, five, six, seven, eight, dog] = all;

console.log(one, two, three, four, five, six, seven, eight, dog);