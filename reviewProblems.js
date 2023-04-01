/*
    Create a variable called myGarage.
    Set it equal to a value of an array.
    Inside the array, create 3 car objects.
    The objects should have the following properties:
    Make, Model, Color, Year, Price
*/
let myGarage = [
    {make: `toyota`, model: `tacoma`, color:`grayblue`, year:2019, price: 20000},

    {make: `ford`, model: `escape`, color: `gray`, year: 2017, price: 10000},

    {make: `suburban`, model: `tahoe`, color: `black`, year: 2020, price: 50000}
]





/*
    Using the objects you just created,
    use the .reduce() method to calculate
    the total value of your cars.
*/
let totalValue = myGarage.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.price;
  }, 0);
  
  
  console.log(totalValue)
  



/* 
    Access your third car
    and set the color property equal to itself,
    and use the .replace() method to change the
    color of the car.
*/

  myGarage[2].color =  myGarage[2].color.replace(`black` , `red`)
  console.log(myGarage[2])




/*
    Your cars depreciate in value by 5% each year.
    Write a function called valueOverTime.
    This function should receive 3 parameters:
    totalValue, valueDrop, and years
    Inside the function, write an equation
    which calculates the new total value after
    years of depreciation.

    Return the new total value.
    Create a variable called newTotal and set it
    equal to your function invoked -- pass in your
    original total, the depreciation amount, and
    an amount of years passed.

    Note: For the depreciation amount, pass the
    percentage as a decimal. IE: 5% = 0.05
*/
  let valueOverTime = (totalValue , valueDrop, years) => {
    return totalValue * Math.pow(1 - valueDrop, years) 

  }
    newValue = valueOverTime (myGarage [0].price, 0.05 , 2)


    console.log(newValue)







/*
    Create a class called Car.
    Using the same properties as your objects,
    create a constructor for the class.
    Additionally, create a property called drivers.
    This property should be an array, and should be
    passed as an array when you instantiate the class.
    Use the spread operator to insert the constructor
    array into the this.drivers array.

    Next, create a method called addDriver.
    This method should receive one parameter: driver
    Access the drivers property of your class,
    and push the new driver into the array.

    Finally, create another method called inspection.
    This method should log a string to the console:
    `This car is driven by ${drivers}`
*/
//{make: `toyota`, model: `tacoma`, color:`grayblue`, year:2019, price: 20000},
  class Car{
    constructor(make, model, color, year, price, drivers){
        this.make = make
        this.model = model
        this.color = color
        this.year = year
        this.price = price
        this.drivers = drivers = [...drivers]
    }
        inspection(){
            console.log(`this car is driven by ${drivers}`)
        }
  }
        





/*
    Create a new instance of the class into
    a variable, passing in arguments of your choice.
    Remember that the drivers argument needs to 
    receive an array.
*/






/*
    Using the addDriver method, add a new driver
    to your car.

    Then use the inspection method to check if
    it worked!
*/


