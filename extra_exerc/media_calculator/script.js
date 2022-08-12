function Calcular(){

    const n1 = parseFloat(document.getElementById("grade1").value);
    const n2 = parseFloat(document.getElementById("grade2").value);
    const n3 = parseFloat(document.getElementById("grade3").value);
    const n4 = parseFloat(document.getElementById("grade4").value);
    const result = document.getElementById("result");

    let mediaSoma = (n1 + n2 + n3 + n4)/4;

    if (n1 > 10 || n2 > 10 || n3 > 10 || n4 > 10 || n1 < 0 || n2 < 0 || n3 < 0 || n4 < 0) {
        result.innerHTML ="Enter a value between 0 and 10";
    }else if(mediaSoma >= 7){
        result.innerHTML = "Your average was: " + mediaSoma.toFixed(2) + " Approved!";
    }else if (mediaSoma >=5 && mediaSoma <= 7){
        result.innerHTML = "Your average was: " + mediaSoma.toFixed(2) + " You are on exam!";
    }else{
        result.innerHTML = "Your average was: " + mediaSoma.toFixed(2) + " Disapproved!";
    }

}

function clear(){

    result.innerHTML = "";
    grade1.value = "";
    grade2.value = "";
    grade3.value = "";
    grade4.value = "";

}