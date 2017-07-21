

var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];

// var a = range (91,100) {

// var a = {
//     from: 91,
//     to: 100,
// };


var a {from: 0, to: 50}

var b = {
    from: 81,
    to: 91,
};
// var B = 81-90;
var c = {
    from: 71,
    to: 81,
};
// var C = 71-80;
var d = {
    from: 61,
    to: 71,
};
// var D = 61-70;
var f = {
    from: 0,
    to: 60,
};
var A = 0;
var B = 0;
var C = 0;
var D = 0;
var F = 0;

// Use console.log() to output the following criteria:

// How many of each grade?
// What is the lowest grade?
// What is the highest grade?

for (var i = 0; i < scores.Length; i++) {
    if(scores >= 91) {
        A++;
            if  (scores > 81) {
                B++;
                if (scores = b) {
                    B++;
                } else {
                    greeting = "Good evening";
                        }
                    if (scores = c) {
                         C++;
                            if (scores = d) {
                                D++;
                                   if (scores = f) {
                                        F++;
                                   }
                            }
                    }
            }
    }  
};



console.log(A,  B,  C,  D, F);
scores.sort()
console.log(scores[0]);
console.log(scores[scores.length - 1]);