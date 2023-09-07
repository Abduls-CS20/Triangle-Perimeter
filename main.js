// Triangle Perimeter Assignment Start Code
document.getElementById("btn").addEventListener("click", btnClicked)


function btnClicked()
{
    
}
function calculateHypotenuse(a, b) {

    // Calculate the square of 'a' and 'b'
    const squareA = a * a;
    const squareB = b * b;

    // Calculate the square of the hypotenuse
    const squareHypotenuse = squareA + squareB;

    // Calculate the length of the hypotenuse by taking the square root
    return Math.sqrt(squareHypotenuse);
}