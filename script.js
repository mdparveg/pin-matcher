// Generate button function

const generateBtn = document.getElementById("generate-btn");
generateBtn.addEventListener("click", function(){
    const generatePin = Math.round(1000 + Math.random()*9000);
    document.getElementById("generate-pin").value = generatePin;

})

// Number capture area

const number = document.getElementsByClassName("number");
for (let i = 0; i < number.length; i++) {
    const element = number[i];
    element.addEventListener("click", function(){
        let screen = document.getElementById("matching-pin").value;
        screen = screen + this.id;
        document.getElementById("matching-pin").value = screen;
    })
}

//Pin matching function

const submitBtn = document.getElementById("submit-btn");
submitBtn.addEventListener("click", function(){
    const generateOutput = document.getElementById("generate-pin").value;
    const screenOutput =  document.getElementById("matching-pin").value;
    if(screenOutput == ""){
        alert("please enter a valid code")
    }
    else if(generateOutput == screenOutput){
        document.getElementById("right-pin").style.display = "block";
        document.getElementById("wrong-pin").style.display = "none";
    }
    else if(generateOutput !== screenOutput){
        document.getElementById("right-pin").style.display = "none";
        document.getElementById("wrong-pin").style.display = "block";
    }
    else{
        document.getElementById("right-pin").style.display = "none";
        document.getElementById("wrong-pin").style.display = "none";
    }
})

// Clear and backspace function

const operatorBtn = document.getElementsByClassName ("operator");
for (let i = 0; i < operatorBtn.length; i++) {
    const operator = operatorBtn[i];
    operator.addEventListener("click", function(){
        if(this.id == "clear"){
            document.getElementById("matching-pin").value = "";
        }
        else if(this.id == "backspace"){
            let backspace = document.getElementById("matching-pin").value;
            backspace = backspace.slice(0,backspace.length-1);
            document.getElementById("matching-pin").value = backspace;
        }
        
    })
}