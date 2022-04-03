const sallaries = [100, 1750, 2340, 5600, 1300, 4600];

// function countBonus(salArr, bonus) {
//     const bonusSalArr = [];
//     for (const sal of salArr) {
//         const bonusedSal = sal + (sal * bonus);
//         bonusSalArr.push(bonusedSal);
//     }
//     return bonusSalArr;
// }

// const countBonus = function (salArr, bonus) {
//     const bonusSalArr = [];
//     for (const sal of salArr) {
//         const bonusedSal = sal + (sal * bonus);
//         bonusSalArr.push(bonusedSal);
//     }
//     return bonusSalArr;
// }

// const countBonus = (salArr, bonus) => {
//     const bonusSalArr = [];
//     for (const sal of salArr) {
//         const bonusedSal = sal + (sal * bonus);
//         bonusSalArr.push(bonusedSal);
//     }
//     return bonusSalArr;
// }

// const countBonus = (salArr, bonus) => {
//     let bonusSalArr = [];
//     for (const sal of salArr) {
//         const bonusedSal = sal + (sal * bonus);
//         bonusSalArr = [...bonusSalArr, bonusedSal];
//     }
//     return bonusSalArr;
// }

// const countBonus = (salArr, bonus) => {
//    return salArr.map((salary) => (salary + (salary * bonus)));
// }

const countBonus = (salArr, bonus) => {
    return salArr.reduce((bonusArr, salary) => {
        const tempBonus = salary + (salary * bonus);
        return [...bonusArr, tempBonus];
    },[]);
}

// const sallriesCopy = [...sallaries, 13000, 'coma', 'Andriy'];
// console.log(sallaries, sallriesCopy);

// const totalSal = sallaries.reduce((total, salary) => total+=salary, 0);
// console.log(totalSal);

console.log(countBonus(sallaries, 0.05));