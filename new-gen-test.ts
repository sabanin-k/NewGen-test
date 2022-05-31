let courses = [
    { name: "Courses in England", prices: [0, 100] },
    { name: "Courses in Germany", prices: [500, null] },
    { name: "Courses in Italy", prices: [100, 200] },
    { name: "Courses in Russia", prices: [null, 400] },
    { name: "Courses in China", prices: [50, 250] },
    { name: "Courses in USA", prices: [200, null] },
    { name: "Courses in Kazakhstan", prices: [56, 324] },
    { name: "Courses in France", prices: [null, null] },
];

let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];


const showCoursesByRange = (range: number[], courses: ICourse[]) => {
    return courses.filter((course) => {
        // replace null to Infinity
        range[1] = range[1] || Infinity;
        course.prices[1] = course.prices[1] || Infinity;

        // filtering logic
        if (range[0] <= course.prices[1] && range[1] >= course.prices[0]) {

            // replace back to null
            if (range[1] === Infinity) range[1] = null;
            if (course.prices[1] === Infinity) course.prices[1] = null;

            return course;
        }
    })
};


const sortCoursesByPrice = (array: ICourse[]) => {
    // sort by first number in range
    return array.sort((x, y) => {
        return x.prices[0] - y.prices[0];
    });
};


interface ICourse{
    name: string
    prices: number[]
};
