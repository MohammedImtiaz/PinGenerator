  
  
  let generateBtn = document.getElementById("generateNumber")
    generateBtn.addEventListener("click", function(){
        let getRandomNumber = function(start, range){
            let getRandom = Math.floor((Math.random() * range) + start);
            while (getRandom > range){
                getRandom = Math.floor((Math.random() * range) + start);
            }
        return getRandom;
        
        }
        document.getElementById("generateNumInput").value = getRandomNumber(1000, 9999);    
    })
    
    function handlePinNum(num){
        document.getElementById("calcInput").value = document.getElementById("calcInput").value + num;
    }
    let submitBtn = document.getElementById("submitBtn")
    submitBtn.addEventListener("click", function(){
        if(document.getElementById("generateNumInput").value == ""){
            document.getElementById("noMatchingArea").style.display = "block";
            let chanceLeft = document.getElementById("chanceLeft").innerText;
            chanceLeftNum = parseInt(chanceLeft);
            currentChance = chanceLeftNum - 1;
            document.getElementById("chanceLeft").innerText = currentChance;
            alert("Please, first generate the pin");

            if(currentChance <= 0){
                document.getElementById("fullArea").style.display = "none";
            }
        }
        else if(document.getElementById("generateNumInput").value ==  document.getElementById("calcInput").value){
            
            document.getElementById("fullArea").style.display = "none";
            document.getElementById("matchingArea").style.display = "block";
            document.getElementById("noMatchingArea").style.display = "none";

        }
        
        else{
            document.getElementById("noMatchingArea").style.display = "block";
            let chanceLeft = document.getElementById("chanceLeft").innerText;
            chanceLeftNum = parseInt(chanceLeft);
            currentChance = chanceLeftNum - 1;
            document.getElementById("chanceLeft").innerText = currentChance;
            
            if(currentChance <= 0){
                document.getElementById("fullArea").style.display = "none";
            }
        }
    })