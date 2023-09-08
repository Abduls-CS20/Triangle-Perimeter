// Triangle Perimeter Assignment Start Code
document.getElementById("btn").addEventListener("click", btnClicked)


function btnClicked()
{
    //Input
    let x1 = document.getElementById("x1").value;
    let y1 = document.getElementById("y1").value;
    let x2 = document.getElementById("x2").value;
    let y2 = document.getElementById("y2").value;
    let x3 = document.getElementById("x3").value;
    let y3 = document.getElementById("y3").value;

    let ab = document.getElementById("ab");
    let bc = document.getElementById("bc");
    let ac = document.getElementById("ac");

    let perimeter = document.getElementById("perimeter");

    //Proccess & Output
    let perm = 0;

    perm += ab.innerHTML = calculateDistance(x1, y1, x2, y2);
    perm += bc.innerHTML = calculateDistance(x2, y2, x3, y3);
    perm += ac.innerHTML = calculateDistance(x3, y3, x1, y1);

    perimeter.innerHTML = perm;





    
}
function calculateDistance(x1, y1, x2, y2) {
    // Calculate the differences in x and y coordinates
    const dx = Math.abs(x2 - x1);
    const dy = Math.abs(y2 - y1);

    // Calculate the distance by taking the square root
    return Math.sqrt(dx * dx + dy * dy);
}