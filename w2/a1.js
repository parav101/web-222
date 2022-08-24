/****************************************************************************
* Assignment 1
* I declare that this assignment is my own work in accordance with Seneca AcademicPolicy.
* No part of this assignment has been copied manually or electronically from any othersource
* (including web sites) or distributed to other students.
* Name: Paravdeep Singh Student ID: psingh532 Date:2021-09-21
****************************************************************************/

function playNumbers (... numbers){
    if(numbers.length == 0){
        console.log("There are no inputs.")
    }
    else {
        var x = 0;
        var total = 0;
        
        for(var i = 0; i <= numbers.length; i++){
            if(Number.isInteger(numbers[i])) {
                
                var y = numbers[i]
                total = total + numbers[i];
                if(x < y){
                    x = y
                }
                else{
                    
                }
            }
            else{
                for(var i = 0; i < numbers.length; i++){
                var count = 0;
                count ++;
                if(Number.isInteger(numbers[i])) 
                {
                    
                    
                    // console.log(numbers[i] + " is number");
                   
                    // for(var j = 0; j < numbers.length; j++){
                    //     if(x < numbers[j]){
                    //         number[j] = x;
                    //     }
                    //     else{
                            
                    //     }
                    // }
                    
                    
                }
                else{
                    
                    console.log(numbers[i] + " is not a number");
                }
            }
            }
        }
        
        
        
            
        
      
    
    }
    if(total/numbers.length != 0){
        console.log( "The largest number of ("+ (numbers) +") is "+ x);
    console.log( "The average of ("+ (numbers) +") is "+ total/numbers.length);
    }
    
}

// playNumbers("Good day!",3,4,32,"hi", "we");

function convertCF (val,cf){
    var c,f;
    if(Number.isInteger(val)){
        if(cf == "C" || cf == "F"){
            if(cf == "C"){
                f = val*1.8 + 32;
                console.log(val+"C is equivalent to " +f+"F.")
            }else{
                c = val- 32;
                console.log(val+"F is equivalent to " +c/1.8+"C.")
            }
        }else{
               
        }


    }
    else{
        if(val/2 != NaN){
            if(cf == "C" || cf == "F"){
                console.log("I need a number");
            }else{
                console.log("I am confused :(")  
            }
           
        }else{
            console.log("I need a number");
        }
       
    }
}






