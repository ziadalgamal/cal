//(push ) add elements last frome array
//(unshifte ) add elements firest frome array
//(shifte) remove elements last frome araay
//(pop)remove elements firest frome array

let number1 =document.getElementById('num')

 function display (num)
 {

    number1.value += num

 }

function asd (){
    try{
     number1.value = eval(number1.value) ;
    }
    catch(err){
        number1.value = "err"
    }
}
function clear (){

    number1.value = number1.value.slice(0,-1);
}