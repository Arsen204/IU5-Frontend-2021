/**
 * Напишите функцию getAnagramms(arr),
 * входные данные - массив строк
 * выходные данные - массив элементов, где каждый элемент является массивом анаграмм (строки)
 * Примеры:
 * ['мир', 'Рим', 'сирота', 'Ариост', 'мри', 'пва', 'лор', 'авп']; -> [["мир", "Рим", "мри"], ["сирота", "Ариост"], ["пва", "авп"]]
 */
 function getAnagramms(arr) {
    let dict = {};
    arr.forEach(element => {
    	anagram = element.toLowerCase().split('').sort().join('');
        if (anagram in dict) {
        	dict[anagram].push(element);
        } else {
        	dict[anagram] = [];
            dict[anagram].push(element);
        }
    });
    
    result = [];
    for (const [key, value] of Object.entries(dict)){
        result.push(value);
    }
    return result;
}

module.exports = getAnagramms;
