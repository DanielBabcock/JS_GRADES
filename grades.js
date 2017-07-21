// Use console.log() to output the following criteria:
// How many of each grade?
// What is the lowest grade?
// What is the highest grade?

var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];


var A = 0;
var B = 0;
var C = 0;
var D = 0;
var F = 0;


for (var i = 0; i < scores.length; i++) {
    if (scores[i] > 91 && scores[i] < 100) {
        A++;
    } 

    if (scores =  81 < 90  ) {
        B++;
    } 

    if (scores = 71, 72, 73, 74, 75, 76, 77, 78, 79, 80) {
        C++; 
    } 

    if (scores[i] >= 91 && scores[i] <= 100) {
        D++;
    }
    if (scores[i] >= 91 && scores[i] <= 100) {
        F++;
    }
}



console.log(A,  B,  C,  D, F);
scores.sort();
console.log(scores[0]);
console.log(scores[scores.length - 1]);




// var b1 = {
//     from: 81,
//     to: 90,
// };

// var c1 = {
//     from: 71,
//     to: 80,
// };

// var d1 = {
//     from: 61,
//     to: 70,
// };

// var f1 = (scores < 60);


// for (var i = 0; i < scores.Length; i++) {
//     if (scores > 91 || scores < 100) {
//         A++;
//     }
//         else{
//             if (scores > 81 || scores < 90) {
//                 B++;
//             }
                   
//                     if (scores = c1) {
//                          C++;
//                     }
//                             if (scores = d) {
//                                 D++;
//                             }
//                                    if (scores = f1) {
//                                         F++;
//                                    }         
//         }
//                                 };
