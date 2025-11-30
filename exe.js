
const info ={name:`benny`,age:25,hobbies:["a","b","c"],favFoods:["d","e","f"]}
// console.log(info.name,info.age)
// for (let i =0;i<info.hobbies.length;i++){
//     console.log(info.hobbies[i],info.favFoods[i])
// } 

for (i of Object.values(info))console.log(i);
