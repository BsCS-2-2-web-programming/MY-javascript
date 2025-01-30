
// let number = 1;

// while (number <= 100) {
//     console.log(number);
//     number++; 
// }

for (let number =1; number <= 100; number++) {
    console.log(number);
} 

let people =['Travis','Humphery','Derrick'] ;

for (let i in people) {
    console.log(people[i]);
}

let day= "Monday";
switch(day){
    case 1:
        console.log('Monday');
        break;

    case 2:
        console.log('Tuesday');
        break;

    case 3:
        console.log('Wednesday');
        break;

    case 4:
        console.log('Thursday');
        break;

    case 5:
        console.log('Friday');
        break;

    default:
        console.log('Weekend');
        break;
    

}