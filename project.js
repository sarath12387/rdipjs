
function myFunction(clickedId) {
    document.calc.result.value+=clickedId;
}
function Clear() {
    document.calc.result.value="";
}
function compute() {
    try{
    var inp=eval(document.calc.result.value);
    document.calc.result.value=inp;
    }catch(err){
            document.calc.result.value="error";
    }
}

function doMath(){
  var inputNum1=document.calc.result.value;
  var result = Math.sqrt(inputNum1);
  document.calc.result.value = result;
return result;
}
function abs()
{
var inputNum1=document.calc.result.value;
var result = Math.abs(inputNum1);
document.calc.result.value = result;
return result;
}
function add()
{
var inputNum1=document.calc.result.value;
var inputNum2=document.calc.result.value;
var result = (inputNum1)+(inputNum2);
document.calc.result.value = result;
return result;
}
function sub()
{
var inputNum1=document.calc.result.value;
var inputNum2=document.calc.result.value;
var result = (inputNum1)-(inputNum2);
document.calc.result.value = result;
return result;
}
function div()
{
var inputNum1=document.calc.result.value;
var inputNum2=document.calc.result.value;
var result = (inputNum1)/(inputNum2);
document.calc.result.value = result;
return result;
}
function percentile(){
var inputNum1=document.calc.result.value;
var inputNum2=document.calc.result.value;
var result = (inputNum1)%(inputNum2);
document.calc.result.value = result;
return result;
}
function mul(){
var inputNum1=document.calc.result.value;
var inputNum2=document.calc.result.value;
var result = (inputNum1)*(inputNum2);
document.calc.result.value = result;
return result;
}
function check()
{
	var text=document.getElementById("text1").value;
	var regx=/^[7-9][0-9]{9}$/;
	if(regx.test(text))
	{
		document.getElementById("lb1text").innerHTML="Vaild";
		document.getElementById("lb1text").style.visibility="visible";
		document.getElementById("lb1text").style.color="green";
	}
	else
	{
		document.getElementById("lb1text").innerHTML="InVaild";
		document.getElementById("lb1text").style.visibility="visible";
		document.getElementById("lb1text").style.color="red";
		alert("enter valid phone number");	
	}
}
function check2()
{
	var text=document.getElementById("text2").value;
	var regx=/^([^0-9]{1})([a-zA-Z0-9\-])+$/;
	if(regx.test(text))
	{
		document.getElementById("lb2text").innerHTML="Vaild";
		document.getElementById("lb2text").style.visibility="visible";
		document.getElementById("lb2text").style.color="green";
	}
	else
	{
		document.getElementById("lb2text").innerHTML="InVaild";
		document.getElementById("lb2text").style.visibility="visible";
		document.getElementById("lb2text").style.color="red";
		alert("enter valid name");	
	}
}
function check3()
{
	var text=document.getElementById("text3").value;
	var regx = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
	if(regx.test(text))
	{
		document.getElementById("lb3text").innerHTML="Vaild";
		document.getElementById("lb3text").style.visibility="visible";
		document.getElementById("lb3text").style.color="green";
	}
	else
	{
		document.getElementById("lb3text").innerHTML="InVaild";
		document.getElementById("lb3text").style.visibility="visible";
		document.getElementById("lb3text").style.color="red";
		alert("enter valid email id");	
	}
}
function palin() 
{
	var str=document.getElementById("text2").value;
	var re = /[\W_]/g;
  var str1 = str.toLowerCase().replace(re, '');
  var str2 = str1.split('').reverse().join(''); 
  var result=(str2 === str1);
  return  str  +  result;
}
function anagramm()
{
	var sort1=document.getElementById("text").value;
	var sort2=document.getElementById("text1").value;
	var sortt1 = sort1.toLowerCase().split('').sort().join('').trim();
	var sortt2 = sort2.toLowerCase().split('').sort().join('').trim();
	var result=(sortt1===sortt2);
	return  sort1  +  result;
	}
function gen1(){
	  var a= Math.floor(Math.random() * (1000));
	  document.getElementById('g1').value=a;
	}
	function gen2(){
	  var b= Math.floor(Math.random() * (1000));
	  document.getElementById('g2').value=b;
	}
	function main(){
	console.log('123');
	var a=document.getElementById('g1').value;
	var b=document.getElementById('g2').value;
	a=parseInt(a);
	b=parseInt(b);
		var c=a%3;
		var d=b%3;
		if(c==d){
			document.write("TIE");
		}
		else if(c==0 && d==1){
			document.write("Human Survives");
		}
		else if(c==0 && d==2){
			document.write("Human dies");
		}
		else if(c==1 && d==2){
			document.write("Cockroach Survives");
		}
	}

