function factor(...numbers){
    console.log("========== Factors ==========")
    var total = 1;
    var  array1 = [];
    var  array2 = [];
    var  array3 = [];
    var  a2 = [];
    var  a3 = [];
    
    for (var i = 0; i < numbers.length -1; i ++)
     {
         total = total * numbers[i]; 
     }
     
    for (var i = 0; i < numbers.length -1; i ++)
     {
         array1[i] = numbers[i]; 
     }
    if(total == numbers[numbers.length - 1]){
        console.log(array1 + " are complete factors of "+ numbers[numbers.length-1]);
    }
    else{
        for (var i = 0; i < numbers.length -1; i ++)
        {
            if( numbers[numbers.length-1] % numbers[i] == 0){
                array2[i] = numbers[i];
            }
            else{
                array3[i] = numbers[i];
            }
        }
        
        array2 = array2.filter(value => Object.keys(value).length == 0);
        array3 = array3.filter(value => Object.keys(value).length == 0);
        if(array2.length > 0){console.log(array2 + " is(are) partial factor(s) of "+ numbers[numbers.length-1]);}
        
        if(array3.length > 0){console.log(array3 + " is(are) not factor(s) of "+ numbers[numbers.length-1]);}
        
    }
};



