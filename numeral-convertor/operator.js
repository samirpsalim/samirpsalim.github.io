function CalculateResults()
{
    var number1= document.getElementById("input1").value;
    var number2= document.getElementById("input2").value;
    var valid1= convertToChinese(number1);
    var valid2= convertToChinese(number2);
    if(valid1==="Invalid Input" || valid2==="Invalid Input")
    {
        document.getElementById("output").value = "Invalid Input";
    }
    else if(valid1==="Input out of bounds" || valid2==="Input out of bounds")
    {
        document.getElementById("output").value = "Input out of bounds";
    }
    else
    {
        if(document.getElementById("operator").value==='+')
        {
            console.log(number1+number2);
            document.getElementById("output").value = convertToChinese(Number(number1)+Number(number2));
        }   
        if(document.getElementById("operator").value==='-')
        {
            document.getElementById("output").value = convertToChinese(Number(number1)-Number(number2));
        } 
    }
    document.getElementById("output").style.display="block";
}