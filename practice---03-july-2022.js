// 1. Задача
// Напишите функцию, которая находит максимальное значение в массиве 
// Пример: [1,2,3,4,5,6,7] => 7
// const f = (nums) => {}

nums = [1, 2, 3, 4, 5, 6, 7]                    // объявляем массив
const f = (nums) => {                           // функция для получения максимального значения
    for (let i = 0; i < nums.lenght; ++i) {     // начинаем с первого значения массива, пока не пройдем всю длину массива
        if (nums[i] < Math.max(nums)) {         // условие if, если значение элемента в массиве меньше 
            continue;                           // максимального численного значения в массиве продолжаем перебирать массив
        }
        else (nums[i] == Math.max(nums)) {      // если значение элемента равно максимальному значению, 
            return(nums);                       // то возвращаем значение элемента
        }        
    }
}


// 2. Задача 
// найдите произведение всех чисел массива 
// Пример: [1,2,3,4] => 24 (1*2*3*4)

nums = [1, 2, 3, 4]                             // объявляем массив

function factorial(n) {                         // функция для расчета факториалов
    let i, product = 1;                         // начать с 1
    for(i=2; i <= n; i++) {                     // автоматически инкременировать i с 2 до n
        product *= i;                           // каждый раз делать это. 
    }      
    return product;                             // возвратить факториал
}
factorial(4)                                   // => 24: 1*2*3*4


/* 3. Задача 
Дано два массива. В одном массиве имена, в другом массиве Фамилии. Сделайте массив
где имя и фамилия написаны одной строчкой */

// Пример: 
// names = ['Никита', 'Ваня', 'Миша'] lastnames = ['Федоров', 'Иванов', 'Петров']
/* => ['Никита Федоров', 'Ваня Иванов', 'Миша Петров']
Примечание: Массивы имеют одинаковую размерность (всегда!) */

firstnames = ['Никита', 'Ваня', 'Миша']                                                         // объявляем массив имен

lastnames = ['Федеров', 'Иванов', 'Петров']                                                     // объявляем массив фамилий

const f = (firstnames, lastnames) => {                                                          // функция для вывода имени и фамилии
    console.log(firstnames);                                                                    // 'Никита', 'Ваня', 'Миша'
    console.log(lastnames);                                                                     // 'Федеров', 'Иванов', 'Петров'
    const names = [];                                                                           // новый массив имя                  
    for (let i = 0; i < firstnames.lenght, lastnames.lenght; ++i) {                             // начать с индекса 0 в обоих массивах
        const names = firstnames[i] + ' ' + lastnames[i];                                       // склеить индексы по очереди с добавлением пробела 
        console.log(names);                                                                     // вызываем 
        contact.push(names);                                                                    // push добавляет новую пару
    }
    return names
}