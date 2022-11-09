// 1. Find the min and max element in the following array and switch their places. Print out the
// modified array in the console.
// Input: [ 3, 500, 12, 149, 53, 414, 1, 19 ]
// Output: [ 3, 1, 12, 149, 53, 414, 500, 19 ]
function switchArray(array)
{
    m=array[0];
    k=0;
    n=array[0];
    u=0;
    z=[];
    for (let i = 1; i < array.length; i++) 
    {
        if(array[i]<m)
        {
            m=array[i];
            k=i;
        }   
        if(array[i]>n)
        {
            n=array[i];
            u=i;
        } 
    }
    array.splice(k, 1, n);
    array.splice(u, 1, m);

return array;
}
console.log("1. Zadatak: "+ switchArray([ 3, 500, 12, 149, 53, 414, 1, 19 ]));

// 2. Use the following array to make a new one by dividing its values by two and adding 5. If
// a given element&#39;s value is 0, change it to 20.
// Input: [ 3, 500, -10, 149, 53, 414, 1, 19 ]
// Output: [ 6.5, 255, 20, 79.5, 31.5, 212, 5.5, 14.5 ]
function changeArray(array)
{
    m=[];
    for (let i = 0; i < array.length; i++) 
    {
        if(array[i]!=0)
    {
        m[i]=array[i]/2+5;
    } 
    }
const index = m.indexOf(0);
m.splice(index, 1, 20);
return m;
}
console.log("2. Zadatak: "+changeArray([ 3, 500, -10, 149, 53, 414, 1, 19]))
// 3. Initialize two arrays. The first one should contain C, the second one the
// number of points for each student. Display students&#39; names with their corresponding
// grade. Use the following ranges:
// 51-60 -&gt; 6,
// 61-70 -&gt; 7,
// 71-80 -&gt; 8,
// 81-90 -&gt; 9,
// 91-100 -&gt; 10.
// Input:
// [ &quot;Micahel&quot;, &quot;Anne&quot;, &quot;Frank&quot;, &quot;Joe&quot;, &quot;John&quot;, &quot;David&quot;, &quot;Mark&quot;, &quot;Bill&quot; ], [ 50, 39, 63, 72, 99,
// 51, 83, 59 ]
// Output:
// Bill acquired 59 points and earned 6. Micahel acquired 50 points and failed to complete
// the exam.
function studentsGrade(studentName,grades)
{
    m=[];
    for (let i = 0; i < grades.length; i++) 
    {
        if(50<grades[i] && grades[i]<61)
        {
            m[i]=6;
        }
        if(60<grades[i] && grades[i]<71)
        {
            m[i]=7;
        }
        if(70<grades[i] && grades[i]<81)
        {
            m[i]=8;
        }
        if(80<grades[i] && grades[i]<91)
        {
            m[i]=9;
        }
        if(90<grades[i] && grades[i]<100)
        {
            m[i]=10;
        }
        if(grades[i]<51)
        {
            m[i]=5;
        }
    }
    k=[];
    for (let j = 0; j < studentName.length; j++) 
    {
    k[j]=studentName[j]+' acquired '+grades[j]+' points and earned '+m[j]+'.'
    }
    return k;
}
console.log("3. Zadatak: " +studentsGrade(["Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill" ], [ 50, 39, 63, 72, 99, 51, 83, 59]))


// 4. (skip :))Sort a previously defined array. Place its sorted values into a new array whose
// values are equivalent to the first array&#39;s values multiplied by 2.
// Input: [ 13, 11, 15, 5, 6, 1, 8, 12 ]
// Output: [ 2, 10, 12, 16, 22, 24, 26, 30 ]
function sortArry(array)
{
    m=array.sort(function(a, b){return a - b});
    for (let i = 0; i < m.length; i++) 
    {
        m[i] = m[i]*2;
    }
    return m;
}
console.log("4. Zadatak: "+ sortArry([ 13, 11, 15, 5, 6, 1, 8, 12 ]));

// 5. (skip :))Sort a previously defined array in a descending order and display it in the
// console.
// Input: [ 13, 11, 15, 5, 6, 1, 8, 12 ]
// Output: [ 15, 13, 12, 11, 8, 6, 5, 1 ]
function sortArry1(array)
{
    m=array.sort(function(a, b){return b-a});
    return m;
}
console.log("5. Zadatak: "+ sortArry1([ 13, 11, 15, 5, 6, 1, 8, 12 ]));


// 6. Write a program that uses a loop to add all the even numbers from 1 to 1000 and
// subtracts all the odd numbers 1 to 500 from the calculated sum. The result should then
// be multiplied by 12.5 and displayed in console.
// Output: 2350000
function loopOpera()
{x=0;
    for (let i = 1; i < 1001; i++) {
        if(i%2==0)
        {
            x+=i;
        }
        if(i%2!=0 && i<500)
        {
            x-=i;
        }
        
    }
x*=12.5;
return x;
}
console.log("6. Zadatak: "+ loopOpera());

// 7. Define a 10 element array. Take the first two letters from every string (that has at least 2
// letters) in the array and create a new string from them. Print it out in the console.
// Input: [ &quot;M&quot;, &quot;Anne&quot;, 12, &quot;Steve&quot;, &quot;Joe&quot;, &quot;John&quot;, &quot;David&quot;, &quot;Mark&quot;, true, &quot;A&quot; ]
// Output: AnStJoJoDaMa
function stringArray(array){
    m=[]
for (let i = 0; i < array.length; i++) 
{
    if (typeof array[i]=='string' && array[i].length>2 ) 
    {
        m=m+array[i][0]+array[i][1];
    }
}
return m;
}
console.log("7. Zadatak: "+ stringArray([ 'M', 'Anne', 12, 'Steve&quot', 'Joe', 'John', 'David', 'Mark', true, 'A']));
// 8. Write a program that takes a string and prints its characters out in reversed order in the
// console.
// Input: Belgrade Institute of Technology
// Output: ygolonhceT fo etutitsnI edargleB
function reversedOrder(array)
{
    m=array.split('').reverse().join('');
    return m;
}
console.log("8. Zadatak: "+ reversedOrder('Belgrade Institute of Technology'));
// 9. Write a program that displays all the combinations of two numbers between 1 and 7.
// Don&#39;t display two of the same numbers at the same time. Display the number of possible
// combinations, as well. (E.g. (1.2),(2,1) is allowed, but not (1,1), (2,2)...).
function displaysCombinations()
{
    m=[]
    k=0;
for (let i = 1; i < 8; i++) 
{
    for (let j = 1; j < 8; j++) 
    {
    if (i!=j) 
    {
        m[k]=['('+i,j+')'];
        k++
    }   
    }
}
    return m;
}
console.log("9. Zadatak: "+ displaysCombinations());

// 10. Write a program that checks if the entered number is a prime number (i.e. divisible only
// by 1 and by itself).
// Input: 17 | 15
// Output: true | false
function primeNumber(a)
{
    k=0;
    result=true;
for (let i = 0; i < a+1; i++) 
{
    if (a%i==0) 
    {
        k+=1;
    }  
}
if(k>2)
{
    result=false;
}
return result;
}
console.log("10. Zadatak: "+ primeNumber(4));


// 11. Check if a given string is a palindrome (spaces are ignored).
// Input: eye | Geek | a nut for a jar of tuna
// Output: true | false | true

//KOMENTAR: "Ana voli Milovana" je palindrom. Da li mozes da modifikujes ovaj zadatak da ti vraca rezultat da ovo jeste palindrom? :)
// P.S. Ostalo si sjajno uradio!

function isPalindrome(a)
{
    k=false;
    m=a.split('').reverse().join('');
    if(m==a)
    {
    k=true;
    }
return k;
}
console.log("11. Zadatak: "+ isPalindrome("abcba"));

// 12. Write a program that calculates the greatest common divisor of two integers. Note: The
// greatest common divisor of two non-zero integers is the greatest positive number that
// divides both numbers with no remainder.
// Input: 192 42 | 81 9
// Output: 6 | 9
function greatestDivisor(a,b)
{
    k=1;
   for (let i = 1; i < Math.min(a,b)+1; i++) 
   {
        if(a%i==0 && b%i==0)
        {
            k=i;
        }
    }
return k;
}
console.log("12. Zadatak: "+ greatestDivisor(81,9));
