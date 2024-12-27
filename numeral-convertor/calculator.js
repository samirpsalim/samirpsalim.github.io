var chars= "一二三四五六七八九十";

function GetChineseNumber()
{
    var number= document.getElementById("input").value;
    document.getElementById("output").value = convertToChinese(number);
    document.getElementById("output").style.display="block";
}

function convertToChinese(number)
{
    if(!Number.isInteger(Number(number))) return "Invalid Input";
    number=Number(number);
    if(number<=0) return "Input out of bounds";
    if(number<=10 && number>0) return GetChineseCharacter(number);
    else if(number<20) return GetChineseCharacter(10)+GetChineseCharacter(number-10);
    else if(number<99) return GetChineseCharacter(Math.floor(number/10))+GetChineseCharacter(10)+GetChineseCharacter(number%10);
    return "Input out of bounds";
}

function GetChineseCharacter(number)
{
    
    return chars[number-1];
    
}