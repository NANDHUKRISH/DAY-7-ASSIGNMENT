// QUESTION-1 [movie CLASS]
---------------------------

class movie {
   constructor(title,studio,rating,arr)
   {
       this.title=title;
       this.studio=studio;
       if(rating==null)
       {return this.rating = "PG"}
       else{
        return this.rating = rating;}
   }
  getdetails()
 {  console.log(`
                TITLE OF MOVIE- ${this.title}
                STUDIO-${this.studio}
                RATING-${this.rating}`)}
 getPG(arr)
 { 
 var result=arr.filter((element)=>element.rating=="PG");
return result;
 }
}
let moviedetails=new movie();
let movie1=new movie("narasimham","ashirwad","pg13");
let movie2=new movie("manichitrthazhu","Zodiac Cinema","PG");
let movie3=new movie("kilipoyi","ashirwad","pg13");
let movie4=new movie("lucifer","Fantasy Film Productions","PG");
let movie5=new movie("Dr Strange","Magma Flow Productions");


let arr=[movie1,movie2,movie3,movie4,movie5];
console.log(arr);

console.log(moviedetails.getPG(arr));

-------------------------------------------------------------------------------------------------
// OUTPUT

​Array(5) [ {…}, {…}, {…}, {…}, {…} ]
0: Object { title: "narasimham", studio: "ashirwad", rating: "pg13" }
​
1: Object { title: "manichitrthazhu", studio: "Zodiac Cinema", rating: "PG" }
​
2: Object { title: "kilipoyi", studio: "ashirwad", rating: "pg13" }
​
3: Object { title: "lucifer", studio: "Fantasy Film Productions", rating: "PG" }
​
4: Object { title: "Dr Strange", studio: "Magma Flow Productions", rating: "PG" }


Array(3) [ {…}, {…}, {…} ]
​
0: Object { title: "manichitrthazhu", studio: "Zodiac Cinema", rating: "PG" }
​
1: Object { title: "lucifer", studio: "Fantasy Film Productions", rating: "PG" }
​
2: Object { title: "Dr Strange", studio: "Magma Flow Productions", rating: "PG" }


---------------------------------------------------------------------------------------------

// QUESTION-2 [CIRCLE CLASS]
--------------------------------


class Circle {
    constructor(radius, color) 
    {
    this.radius = radius
    this.color = color }
    
    changeRadius (radius) 
    {
    this.radius = radius }

    Radius ()
     {
        return this.radius}
    
 
    changeColor (color) 
    {
    this.color = color}

    Color ()
     {
        return this.color }
        
    
    Area () {
    return Math.PI * this.radius * this.radius
    }
    
    Circumference () {
    return 2 * Math.PI * this.radius;
    }
    }
    
    let myCircle = new Circle (7, 'RED')
    console.log(myCircle.Radius())
    console.log(myCircle.Color())
    console.log(myCircle.Area())
    console.log(myCircle.Circumference())
    
    myCircle.changeColor('yellow')
    myCircle.changeRadius(100)

    console.log(myCircle.Radius())
    console.log(myCircle.Color())
    console.log(myCircle.Area())
    console.log(myCircle.Circumference())
  
---------------------------------------------------------------------------------

// OUTPUT

7   
RED 
153.93804002589985 
43.982297150257104 
100
yellow 
31415.926535897932 
628.3185307179587

-----------------------------------------------------------------------------------
// QUESTION-3 [PERSON CLASS]
------------------------------

class person
{ constructor(department,Name,gender,section,age,yoexperiance,qualification,skill)
    {
   this.department=department;
    this.Name=Name;
    this.gender=gender;
    this.section=section;;
    this.age=age;
    this.yoexperiance=yoexperiance;
    this.qualification=qualification;
    this.skill=skill;
}
   getdetails()
   {
       return `
       DEPARTMENT - ${this.department} 
       NAME - ${this.Name}
       GENDER-${this.gender}
       AGE-${this.age}
       QUALIFICATION-${this.qualification}
       SECTION-${this.section}
       YEAR OF EXPERIANCE-${this.yoexperiance}
       SKILL WHICH EMPLOYEE HAVE-${this.skill} `;
   }
}
let obj=new person("ACCOUNTS","NANDHUKRISHNA M A","MALE","GODOWN OUTSTANDING",25,2,"B-TECH","TALLY AND EXCELL");
console.log(obj.getdetails());
let obj1=new person("ACCOUNTS","ARAVIND","MALE","FINANCE",25,6,"DEGREE","TALLY AND EXCELL");
console.log(obj1.getdetails());
let obj2=new person("ACCOUNTS","CHANDANA","FEMALE","FINANCE",32,2,"B-TECH","TALLY AND EXCELL");
console.log(obj2.getdetails());
let obj3=new person("ACCOUNTS","MANJU","MALE","OVERALL ACCOUNTS",42,15,"B-TECH","TALLY AND EXCELL");
console.log(obj3.getdetails());
let obj4=new person("SALES","PRASAD","MALE","SAMSUNG PROMOTER",30,2,"B-TECH","SPEAKING SKILLS");
console.log(obj4.getdetails());
let obj5=new person("BILLING","SANTHOSH","MALE","BILLING CONTROLLER",35,10,"B-TECH","TALLY AND EXCELL");
console.log(obj5.getdetails());

-------------------------------------------------------------------------------------------

// OUTPUT

DEPARTMENT - ACCOUNTS 
NAME - NANDHUKRISHNA M A
GENDER-MALE
AGE-25
QUALIFICATION-B-TECH
SECTION-GODOWN OUTSTANDING
YEAR OF EXPERIANCE-2
SKILL WHICH EMPLOYEE HAVE-TALLY AND EXCELL script.js:155:9

DEPARTMENT - ACCOUNTS 
NAME - ARAVIND
GENDER-MALE
AGE-25
QUALIFICATION-DEGREE
SECTION-FINANCE
YEAR OF EXPERIANCE-6
SKILL WHICH EMPLOYEE HAVE-TALLY AND EXCELL script.js:157:9

DEPARTMENT - ACCOUNTS 
NAME - CHANDANA
GENDER-FEMALE
AGE-32
QUALIFICATION-B-TECH
SECTION-FINANCE
YEAR OF EXPERIANCE-2
SKILL WHICH EMPLOYEE HAVE-TALLY AND EXCELL script.js:159:9

DEPARTMENT - ACCOUNTS 
NAME - MANJU
GENDER-MALE
AGE-42
QUALIFICATION-B-TECH
SECTION-OVERALL ACCOUNTS
YEAR OF EXPERIANCE-15
SKILL WHICH EMPLOYEE HAVE-TALLY AND EXCELL script.js:161:9

DEPARTMENT - SALES 
NAME - PRASAD
GENDER-MALE
AGE-30
QUALIFICATION-B-TECH
SECTION-SAMSUNG PROMOTER
YEAR OF EXPERIANCE-2
SKILL WHICH EMPLOYEE HAVE-SPEAKING SKILLS script.js:163:9

DEPARTMENT - BILLING 
NAME - SANTHOSH
GENDER-MALE
AGE-35
QUALIFICATION-B-TECH
SECTION-BILLING CONTROLLER
YEAR OF EXPERIANCE-10
SKILL WHICH EMPLOYEE HAVE-TALLY AND EXCELL 

----------------------------------------------------------------------------------------

// QUESTION -4 [Calculation of uber price]
--------------------------------------------

class uber{
constructor(dist,cost_of_food) {
    this.dist=dist;
    this.cost_of_food=cost_of_food;
    this.totalprice=(this.dist*3)+this.cost_of_food;

}
getPrice(){

    console.log(`Total price is- ${this.totalprice}`);
    
}
discount(){
    var discountedprice=(75*this.totalprice)/100;
    console.log(`After discount the amount is ${discountedprice}`);
}
}

var firstorder =new uber(4,188);
firstorder.getPrice();
firstorder.discount();

var secondorder= new uber(10,470);
secondorder.getPrice();
secondorder.discount();

--------------------------------------------------------------------------------------------
// OUTPUT

Total price is- 200                           
After discount the amount is 150              
Total price is- 500                           
After discount the amount is 375
--------------------------------------------------------------------------------------------
