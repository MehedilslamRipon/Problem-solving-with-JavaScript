// Write a program that takes an integer as input 1 - 12 and print 
// the corresponding month name. if user gives input 1 you should print 'January'.

const solution = (integer)=> {
    return integer == 1 ? "January" : integer == 2 ? "February" : integer == 3 ? "March" : integer == 4 ? "April"
    : integer == 5 ? "May" : integer == 6 ? "June" : integer == 7 ? "July" : integer == 8 ? "August" : 
    integer == 9 ? "September" : integer == 10 ? "October" : integer == 1 ? "November" : "December"

};


console.log(solution(3)); //March
console.log(solution(7)); //July
console.log(solution(9)); //September