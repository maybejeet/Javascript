const marvel_heroes = ['iron man','cap','wanda','nick fury']
const dc_heroes = ["batman","flash","arrow","jhon constantine"]

const Heros = marvel_heroes + dc_heroes //converts to string
//console.log(Heros);
//console.log(typeof Heros);

//marvel_heroes.push(dc_heroes)
//console.log(marvel_heroes);

const concatHeros = marvel_heroes.concat(dc_heroes)
//console.log(concatHeros);

const allHeros = [...marvel_heroes,...dc_heroes]
//console.log(allHeros);

const anotherArray = [1,2,3,[4,5,[8,9]]]
const real_anotherArray = anotherArray.flat(Infinity)
//console.log(real_anotherArray);



console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh"));
console.log(Array.from({name: "Jeet"})); //Dayummm

console.log(Array.of("Hitesh",'1',34,"Jeet"));







