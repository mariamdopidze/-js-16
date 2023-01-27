//#2
function calculateNameLength(currency) {
    

    if (currency === "USD"){
        console.log ("$");
        return "$"
    }
    
     if (currency === "Euro") { console.log("euro");
       return "euro"} 
    
     console.log("ლარი");
     return"ლ"
    
    
    }
    
    
    calculateNameLength("USD");
    calculateNameLength("Euro");
    calculateNameLength("lari");
    
    
    // #6
    function calcExpense(income, expense) {
        const profit=income-expense;
        const calcperc = (profit/ income) * 100;
        console.log(profit);
        return profit
    }
     const jan = calcExpense(300, 100);
     const Fab = calcExpense(550, 230);
     const Mar = calcExpense(870, 320);
     const sumOfProfit = jan+ Fab + Mar;
     console.log(sumOfProfit);
    
     //#4
     let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
     const filterEvenNumbers = numbers.filter((number) =>number % 2 ===0);
     console.log(filterEvenNumbers);
    
    // #3
     let text = "my name is john"
     let lowerCasetext = text.toLowerCase()
     let upperCasertext = text. toUpperCase()
    
     console.log(upperCasertext)
     console.log(lowerCasetext)

     //#1
     var sum =0;
     function getSum(a, b) {
     sum = a + b ;
      return sum;      }

     getSum(5, 9);
     console.log (sum);

     if (getSum === even) {
        console.log ("fulse");}

     if (getSum === odd){
         console.log("true");}
        
     
     
       
        


     
     

     