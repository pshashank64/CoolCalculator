
var val = document.getElementsByTagName("td");
var display = document.getElementById("print");
var op1 = 0;
var op2 = null;
var operator = null;

function op(value){
    return value == "+" || value == "-" || value == "*" || value == "/" || value == "%";
}

for(var i=0;i<val.length;i++)
{
    val[i].addEventListener('click', function(){
        var value = this.getAttribute('data-value');
        var text = display.textContent.trim();

        if(op(value)){
            operator = value;
            op1 = parseFloat(text);
            display.textContent = "";
        }
        else if(value == "clear"){
            display.textContent = "";
        }
        else if(value == "sign"){
            op1 = parseFloat(text);
            op1 = -1 * op1;
            display.textContent = op1;
        }
        else if(value == "."){
            if(text.length && !text.includes(".")){
                display.textContent= text + '.';
            }
        }
        /*else if(value == "%"){
            op1 = parseFloat(text);
            op1 = op1/100;
            display.textContent = op1;
        }*/
        else if(value == "="){
            op2 = parseFloat(text);
            var res = eval(op1 + ' ' + operator + ' ' + op2);
            if(res){
                //display.innerText = (op1 + operator + op2 + "=" + res );
                display.innerText = res;
                op1 = res;
                op2 = null;
                operator = null;
            }
            else if(res == 0)
            {
                display.textContent = "0";
                op1 = 0;
                op2 = null;
                operator = null;
            }
        }
        else{
            display.textContent += value;
        }
        

    });
}
