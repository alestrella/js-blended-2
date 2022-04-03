function createSallary(...params){
    return [...params];
}

function showSallaries(sallaries){
    for (const sallary of sallaries) {
        console.log(sallary);
    }
}

// function updateSallaries(salArray, oldSum, newSum){
//     for (const sallary of salArray) {
//         if (sallary === oldSum) {
//             const idx = salArray.indexOf(sallary);
//             if (idx !== -1) {
//                 salArray[idx]=newSum;
//             }
//         }
//     }  
//     return salArray;
// }

function updateSallaries(salArray, oldSum, newSum){
    const updatedArr = [];
    for (const sallary of salArray) {
        if (sallary === oldSum) {
            updatedArr.push(newSum);
            }
            else {
                updatedArr.push(sallary);
            }
    }  
    return updatedArr;
}

// function deleteSallary(salArray, targetSum){
//     const idx = salArray.indexOf(targetSum);
//     if (idx !== -1) {
//         salArray.splice(idx, 1);
//     }
//     return salArray;
// }

function deleteSallary(salArray, targetSum){
    const updatedArr = [];
    for (const sallary of salArray) {
        if (sallary !== targetSum) {
                 updatedArr.push(sallary);
            }
    }  
    return updatedArr;
}

//create
const sallaries = createSallary(1,3,5,100,250);
console.log(sallaries);

//read
// showSallaries(sallaries);

//update
// const updatedSal = updateSallaries(sallaries, 100, 112);
// showSallaries(sallaries);
// showSallaries(updatedSal);

//delete
const newSallary = deleteSallary(sallaries, 3);
showSallaries(sallaries);
showSallaries(newSallary);