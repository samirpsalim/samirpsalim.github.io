function GetChineseNumber()
{
    var number= document.getElementById("input").value;
    document.getElementById("output").value = convertToChinese(Number(number));
    document.getElementById("output").style.display="block";
}

function convertToChinese(number)
{
    return number+1;
}