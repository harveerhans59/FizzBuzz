document.getElementById("btnSubmit").addEventListener("click",getValues);

//extract values from input fields
//parse values
//starts and calls the required functions 
function getValues(){

    let fizz = document.getElementById('fizz').value;
    let buzz = document.getElementById('buzz').value;
   
    fizz=parseInt(fizz);
    buzz=parseInt(buzz);

    let numbers = generateNumbers(fizz,buzz);
    displayTable(numbers);
}

//generate array with numbers and declaring what indexes will be fizz or buzz
function generateNumbers(fizz, buzz){
    let numbers = [];

    for(let index=1 ;index<=100;index++){
        if(index % buzz==0 && index % fizz==0){
            numbers.push("FIZZBUZZ");
        }
        else if(index % fizz==0){
            numbers.push("FIZZ");
        }else if(index % buzz==0){
            numbers.push("BUZZ");
        }else{
            numbers.push(index);
        }
    }
    return numbers;
}

//display the array in a table format
function displayTable(numbers){
    let displayContent="";
    

    for(let index=0;index<numbers.length; index++){
        if(index%5==0){
            displayContent+=`</tr><tr>`;
        }
        displayContent+= `<td>${numbers[index]}</td>`;
}
            
    
    document.getElementById('resultsTable').innerHTML= displayContent;
}