// Write here the code challenge solution
  
  class HashTableUsingArray {
    constructor() {
      this.storage = {};
    }
  
    set(key, value) {
        if (!this.storage[key]) this.storage[key] = {value: value};
    }
  
}
function firstRepeated (string) {
    if (!string.includes(' ')) return 'No repeated words';
     let arr = string.split(' ');
     let hashTable = new HashTableUsingArray();
     for (let i = 0; i < arr.length; i++) {
         if (hashTable.storage[arr[i]]) {
             return arr[i];
         } else {
             hashTable.set(arr[i], arr[i]);
         }
     }
     return 'No Repetition';
 }
//  console.log(firstRepeated('ASAC is a department at LTUC. ASAC teaches programming in LTUC.'));
  
 module.exports = { HashTableUsingArray, firstRepeated };
 
 // End of code challenge solution



// for 10th of november 2022 review lecture
 
// solution 1
//  const repeated = (str) => {
//      let arr = [], repeated, splitted = str.split(' ')
//      for (let i = 0; i < splitted.length; i++) {
//          arr.includes(splitted[i])? repeated = splitted[i]: arr.push(splitted[i])
//          if (repeated) return repeated
//         }
//         return 'No Repetition'
//     }
// console.log(repeated("I am ASAC learning programming at ASAC"))

    
// solution 2

// function repeated (str) {
//        let splitted = str.split(" ");
//        let check =  splitted.map((a, idx) => {return {repeated : splitted.indexOf(a), index: idx}});
//        let r =  check.filter((a, idx) => check.slice(0, idx).find(s=> s.repeated == a.repeated));
//     //    return r.map(a => splitted[a.index])
//        return r.length?splitted[r.sort((a, b) => a.index - b.index)[0].index]: 'No Repetition';
//     }
        
// console.log(repeated("I am learning learning programming am at ASAC"))
        
// solution 3 good space complexity

// const repeated = (str) => str.split(" ").map((a, idx) => str.split(" ").slice(0, idx).find(s=> s == a)).find(str => str) || 'No Repetition'

// console.log(repeated("I am learning programming at ASAC ASAC"))

// solution 4 

// function repeated (str) {
//     let i =0, dif =0, check =[], loop = 0;
//     while (loop < str.match(/ /g).length) {
//         while (str[i + dif] != ' ') {
//             dif++;
//         }
//         if (check.includes(str.slice(i, i + dif))) return str.slice(i, i + dif);
//         check.push(str.slice(i, i + dif));
//         i = i + dif + 1;
//         dif = 0;
//         loop++;
//     }
//     return 'No Repetition';
// }

// console.log(repeated("I am learning programming am at ASAC"))



// solution 5
// function repeated (str) {
//     let i =0, dif =0, check =[], loop = 0;
//     while (loop < str.match(/ /g).length) {
//         while (str[i + dif] != ' ') {
//             dif++;
//         }
//         // console.log(str.slice(0, i))
//         console.log(str.slice(i, i + dif))
//         if (/` ${str.slice(i, i + dif)} `/g.test(str.slice(0, i))) return str.slice(i, i + dif);
//         check.push(str.slice(i, i + dif));
//         i = i + dif + 1;
//         dif = 0;
//         loop++;
//     }
//     return 'No Repetition';
// }


// solution 6 (not working with spaces)
// function repeated (str) {
//     let firstInd =0, secondInd =0, loop = 0;
//     console.log(str.match(/ /g).length)
//     while (loop < str.match(/ /g).length + 1) {
//          while (str[firstInd + secondInd] != ' ') { // error here
//             secondInd++;
//         }
//         const regex = new RegExp(`${str.slice(firstInd, firstInd + secondInd)}`);
//         if (regex.test(str.slice(0, firstInd))) return str.slice(firstInd, firstInd + secondInd);
//         firstInd+= secondInd + 1, secondInd = 0, loop++;
//     }
//     return 'No Repetition';
// }   

    // check: working for middle word while we have duplicated spaces
    // check: working for the last word while we have duplicated spaces
// console.log(repeated("I am ASAC learning programming at ASAC"))


// solution 6 (working)
// function repeated (str) {
//     let i =0, dif =0, check =[], loop = 0;
//     console.log(str.match(/ /g).length)
//     while (loop < str.match(/ /g).length + 1) {
//         while (str[i + dif] && str[i + dif] != ' ') {
//             dif++;
//         }
//         const regex = new RegExp(`${str.slice(i, i + dif)}` || ' ');
//         if (regex.test(str.slice(0, i)) && regex != '/ /') return str.slice(i, i + dif);
//         i = i + dif + 1, dif = 0, loop++;
//     }
//     return 'No Repetition';
// }

// console.log(repeated("I am ASAC    learning    programming at ASAC"))


