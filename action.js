var courses = [{
        id: 1,
        name: 'JS',
        coin: 250
    },
    {
        id: 2,
        name: 'HTML',
        coin: 0
    },
    {
        id: 3,
        name: 'CSS',
        coin: 0
    },
    {
        id: 4,
        name: 'ReactJS',
        coin: 500
    }
];

// var newCourses = courses.map(function(course) {
//     // console.log(course);
//     return {
//         id: course.id,
//         name: `Khoa hoc: ${course.name}`,
//         coin: course.coin,
//         coinText: `Gia: ${course.coin}`
//     };
// });

// console.log(newCourses)

// function coinHandler(accumulator, currentValue, currentIndex, originArray) {
//     return accumulator + currentValue.coin;
// }
// var totalCoin = courses.reduce(function(a, b) {
//     return a + b.coin;
// }, 0);

var totalCoin = courses.reduce((a, b) => a + b.coin, 0);

console.log(totalCoin);