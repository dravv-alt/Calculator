
        function brackopen(){document.getElementById("t1").value += "(";};
        function brackclose(){document.getElementById("t1").value += ")";};
        function percent(){ 
            document.getElementById("t1").value += "%"; 
        };
        function AC(){document.getElementById("t1").value = "";};
        function seven(){document.getElementById("t1").value += "7";};
        function eight(){document.getElementById("t1").value += "8";};
        function nine(){document.getElementById("t1").value += "9";};
        function divide(){document.getElementById("t1").value += "÷";};
        function four(){document.getElementById("t1").value += "4";};
        function five(){document.getElementById("t1").value += "5";};
        function six(){document.getElementById("t1").value += "6";};
        function multiply(){document.getElementById("t1").value += "×";};
        function one(){document.getElementById("t1").value += "1";};
        function two(){document.getElementById("t1").value += "2";};
        function three(){document.getElementById("t1").value += "3";};
        function sub(){document.getElementById("t1").value += "-";};
        function zero(){document.getElementById("t1").value += "0";};
        function decimal(){document.getElementById("t1").value += ".";};
        
        function equal(){
            let ans;
            ans = document.getElementById("t1").value 
            console.log(ans);

              let expression = document.getElementById("t1").value;
                expression = expression.replace(/×/g, "*").replace(/÷/g, "/");
                const match = expression.match(/(\d+(?:\.\d+)?)([+\-])(\d+(?:\.\d+)?)%$/);
                
                let result;
                if (match) {
                    let base = parseFloat(match[1]);
                    let operator = (match[2]);
                    let percent = parseFloat(match[3]);

                    if(operator==="+"){
                        result = base + (base * (percent / 100));
                    }else if(operator==="-"){
                        result = base - (base * (percent / 100));
                    }
                        document.getElementById("t1").value = result.toFixed(5).replace(/\.?0+$/, "");
                    
                    return;
                }else{
                      expression = expression.replace(/(\d+(?:\.\d+)?)%/g, "($1/100)");
                    }


                try {
                result = eval(expression);
                document.getElementById("t1").value = result;
                console.log(ans+" = "+result);
                } catch {
                document.getElementById("t1").value = "Error";
                console.log(ans+" = Error");
                }
                

        };
        
        function add(){document.getElementById("t1").value += "+";};

        document.getElementById("t1").addEventListener("keypress", function(e) {
            if (!/[0-9+\-*/().%]/.test(e.key)) {
                e.preventDefault();
            }
        });


        function moveCursorToEnd(el) {
            const len = el.value.length;
             el.setSelectionRange(len, len);
        }

        document.addEventListener("keydown", function(event) {
            if (event.key === "Enter"|| event.key === "=") {
                equal();
            }
        });

        const toggle = document.getElementById("toggle")
        const dark = document.getElementById("dark")
        const light = document.getElementById("light")
        const nav = document.getElementById("navclosed")
        const HeroSection = document.getElementById("HeroSection")


        dark.addEventListener("click",() => {
            toggle.style.transition = "left 0.8s ease-in-out";
            toggle.style.left = "132px";
            setTimeout(() => {
                toggle.style.left = "5px";  // this will now animate smoothly
            }, 50);
            dark.style.color = "blue";
            light.style.color = "white";
            nav.style.background = "black";
            HeroSection.style.backgroundColor = "lightgray";
        });

        light.addEventListener("click",() => {
            toggle.style.transition = "left 0.8s ease-in-out";
            toggle.style.left = "5px";
            setTimeout(() => {
                toggle.style.left = "132px";  // this will now animate smoothly
            }, 50);
            light.style.color = "yellow";
            dark.style.color = "white";
            nav.style.backgroundColor = "lightseagreen";
            HeroSection.style.backgroundColor = "lightgreen";
        });


        const darkSM = document.getElementById("darkSM")
        const lightSM = document.getElementById("lightSM")

        darkSM.addEventListener("click",() =>{
            darkSM.style.color = "blue";
            lightSM.style.color = "white";
            nav.style.background = "black"; 
            HeroSection.style.backgroundColor = "lightgray";
        });

       lightSM.addEventListener("click",() => {
            lightSM.style.color = "yellow";
            darkSM.style.color = "white";
            nav.style.backgroundColor = "lightseagreen";
            HeroSection.style.backgroundColor = "lightgreen";
       });