// input from terminal

const weight = process.argv[2]
const height = process.argv[3]

function calculateBmi (weight, height){
    const bmi = weight / (height * height);

   if(bmi < 18.5){
        return `BMI: ${bmi.toFixed(2)} - Underweight`
   } else if(bmi < 25){
        return `BMI: ${bmi.toFixed(2)} - Fit`
   } else if (bmi < 30){
        return `BMI: ${bmi.toFixed(2)} - OverWeight`
   } else {
        return `BMI: ${bmi.toFixed(2)} - Obese`
   }
}

console.log(calculateBmi(weight, height))

// bmi er opor depend Who er bmi koto hole take underweight, fit, overweight, either the
// person is underweight, fit, or overweight.


