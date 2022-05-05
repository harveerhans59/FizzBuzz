document.getElementById("btnSubmit").addEventListener("click",getValues);
//get the values from the page
//starts or controller function
function getValues(){
    //get values from the page
    let startValue = document.getElementById('startNumber').value;
    let endValue = document.getElementById('endNumber').value;
    let submitButton = document.getElementById('submitButton');

    //parse Into integers
    startValue=parseInt(startValue);
    endValue = parseInt(endValue);

    //testing if input is valid
    if(startValue>=endValue){
        alert("End value must be greater than start value!");
    }
    else if(Number.isInteger(startValue) && Number.isInteger(endValue)){
        //we call generateNumbers
        let numbers = generateNumbers(startValue, endValue);
        displayNumbers(numbers);
    }else{
        alert("Only enter numbers!");
    }

    //we call displayNumbers
    
}

//generate numbers from start value to the endvalue
//logic function
function generateNumbers(startValue, endValue){
    let numbers=[];
    for(let index=startValue; index<=endValue; index++){
        numbers.push(index);
    }
    return numbers;
}

//display the numbers and mark even numbers bold
//display or view function
function displayNumbers(numbers){

    let templateRows="";

    for (let index = 0;index <numbers.length; index++){
        //classValue is to decide background color of the values based on if they're even or odd
        let classValue="";
    
        let number= numbers[index];

        if(number % 2 == 0){
            classValue="table-secondary";
        }else{
            classValue="";
        }
        templateRows += `<tr class="${classValue}"><td>${number}</td></tr>`;
    }
    document.getElementById("resultsTable").innerHTML = templateRows;
}