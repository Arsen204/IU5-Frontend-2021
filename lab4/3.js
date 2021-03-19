/**
 * Напишите функцию rle(str),
 * входные данные - строка
 * выходные данные - строка со свернутыми диапазонами
 * Примеры:
 * rle('AAAB') === 'A3B'
 * rle('BCCADDEEEBB') === 'BC2AD2E3B2'
 */

function rle(str) {
	if (str === ''){
    	return '';
   }
   str = str.split('');
   let result = "";
   let currentSym = str[0];
   let count = 0;

   str.forEach((element, index) => {
      if (element === currentSym){
         count++;
      } else {
         result += currentSym + (count > 1 ? count : '');
         count = 1;
         currentSym = element;
      }
   });
    
   return result += currentSym + (count > 1 ? count : '');
}

module.exports = rle;
