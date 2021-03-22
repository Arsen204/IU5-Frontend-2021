/**
 * Доп задание, делать не обязательно, но мы запомним тех кто не сделал ;D
 * Напишите функцию checkBrackets(str),
 * на вход подается строка состоящая из скобок разной вложенности, варианты скобок: []<>()
 * необходимо определеить, правильно ли они вложены
 * Примеры:
 * [[]]()<> --> true
 * ([)]()<> --> false
 * [(<>)] --> true
 */

function checkBrackets(str) {
    let arr = [];
    let br_list = '[]<>()';
    return [...str].every((el) => (br_list.indexOf(el) % 2 === 1
      ? arr.pop() === br_list.charAt(br_list.indexOf(el) - 1)
      : arr.push(el))) && arr.length === 0;
}

module.exports = checkBrackets;