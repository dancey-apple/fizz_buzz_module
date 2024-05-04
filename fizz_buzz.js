

function fizzbuzz(numbers) {
    let result = [];
    numbers.forEach((num) => {
        if(num % 3 === 0 && num % 5 === 0) {
            result.push('FizzBuzz');
        } else if(num % 3 === 0) {
            result.push('Fizz');
        }else if(num % 5 === 0) {
            result.push('Buzz');
        }else {
            result.push(num);
        }
    });
    return  result.join(', ');
};

module.exptort = fizzbuzz;
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const output = fizzbuzz(array);
console.log(output);