/**
 * Напишите функцию getMinMax(str),
 * на вход в функцию подается строка str
 * числа в строке выделяются пробелами или знаками препинания
 * необходимо найти минимальное и максимальное число в строке
 * вернуть в формате {min: 1, max: 22}
 * Примеры:
 * '4 и -6, 2, 1, может 9, 63, -134 и 566]' -> {min: -134, max: 566}
 */

 function getMinMax(str) {
    strSplit = str.replace(/[,\/#!$%\^&\*;:{}=\_`~()]/g,"").split(' ');
    for(i = 0; i < strSplit.length; i++){
        if(number = parseFloat(strSplit[i], 10)){
            if (i === 0){
                var maxNum = number;
                var minNum = number;
            }
            if(number > maxNum) {
                maxNum = number;
            }else if (number < minNum){
                minNum = number;
            }
        }
    }
    return {min: minNum, max: maxNum};
}

module.exports = getMinMax;