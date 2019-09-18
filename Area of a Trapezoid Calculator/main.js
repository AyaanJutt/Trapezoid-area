
document.getElementById('button').addEventListener('click', calcArea)

function calcArea(){
    let b1=Number(document.getElementById("b1").value)
    let b2=Number(document.getElementById("b2").value)
    let h=Number(document.getElementById("h").value)

    let total= 1/2*(b1+b2)*h

    document.getElementById('answer').innerHTML=total    
}