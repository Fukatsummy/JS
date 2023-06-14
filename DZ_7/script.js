//Создать массив «Список покупок». Каждый элемент массива является объектом, который содержит название продукта, необходимое количество и куплен или нет. Написать несколько функций для работы с таким массивом.
//1. Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, а потом – купленные.
//2. Добавление покупки в список. Учтите, что при добавлении покупки с уже существующим в списке продуктом, необходимо увеличивать количество в существующей покупке,
//а не добавлять новую.
//3. Покупка продукта. Функция принимает название продукта и отмечает его как купленный.


// 1. Функция вывода списка покупок на экран
function showList(list) {
    // Создаем два массива: для купленных и некупленных продуктов
    let notBought = [];
    let bought = [];
    // Проходим по каждому объекту в массиве и добавляем его в соответствующий массив
    list.forEach(item => {
    if (item.bought) {
    bought.push(item);
    } else {
    notBought.push(item);
    }
    });
    // Объединяем два массива и выводим на экран
    let result = notBought.concat(bought);
    result.forEach((item, index) => {
    console.log('${index + 1}. ${item.name} - ${item.quantity} шт. ${item.bought ? "куплено" : "не куплено"}');
    });
    }
    
    // 2. Функция добавления продукта в список
    function addItem(list, name, quantity) {
    // Проверяем, есть ли уже такой продукт в списке
    let itemIndex = list.findIndex(item => item.name === name);
    if (itemIndex === -1) {
    // Если продукта еще нет в списке, добавляем его
    list.push({name: name, quantity: quantity, bought: false});
    } else {
    // Если продукт уже есть, увеличиваем количество
    list[itemIndex].quantity += quantity;
    }
    }
    
    // 3. Функция покупки продукта
    function buyItem(list, name) {
    // Ищем продукт в списке
    let itemIndex = list.findIndex(item => item.name === name);
    if (itemIndex !== -1) {
    // Если продукт найден, отмечаем его как купленный
    list[itemIndex].bought = true;
    }
    }




// Создать массив, описывающий чек в магазине. Каждый элемент массива состоит из названия товара, количества и цены за
// единицу товара. Написать следующие функции.
// 1. Распечатка чека на экран.
// 2. Подсчет общей суммы покупки.
// 2
// 3. Получение самой дорогой покупки в чеке.
// 4. Подсчет средней стоимости одного товара в чеке. 


let check = [
    {name: "хлеб", quantity: 2, price: 25},
    {name: "молоко", quantity: 1, price: 55},
    {name: "сыр", quantity: 3, price: 120},
    {name: "яблоки", quantity: 5, price: 15}
    ];

    // Функция распечатки чека
    function printCheck() {
    console.log("Чек на покупку:");
    for (let item of check) {
    console.log('${item.name} - ${item.quantity} шт. по ${item.price} руб. за шт.');
    }
    }
    
    // Функция подсчета общей суммы покупки
    function getTotalPrice() {
    let totalPrice = 0;
    for (let item of check) {
    totalPrice += item.quantity * item.price;
    }
    return totalPrice;
    }
    
    // Функция получения самой дорогой покупки в чеке
    function getMostExpensiveItem() {
    let mostExpensive = check[0];
    for (let item of check) {
    if (item.price > mostExpensive.price) {
    mostExpensive = item;
    }
    }
    return mostExpensive;
    }
    
    // Функция подсчета средней стоимости одного товара в чеке
    function getAveragePrice() {
    let totalQuantity = 0;
    let totalPrice = 0;
    for (let item of check) {
    totalQuantity += item.quantity;
    totalPrice += item.quantity * item.price;
    }
    return totalPrice / totalQuantity;
    }
    
    // Проверка работы функций
    printCheck();
    console.log("Общая сумма покупки: " + getTotalPrice() + " руб.");
    console.log("Самая дорогая покупка: " + getMostExpensiveItem().name);
    console.log("Средняя стоимость товара: " + getAveragePrice() + " руб.");




    function applyStyles(styles, text) {
        let styleString = '';
        
        // Составляем строку стилей из переданного массива
        for (let i = 0; i < styles.length; i++) {
        styleString += `${styles[i][0]}: ${styles[i][1]}; `;
        }
        
        // Используем функцию document.write() для вывода текста с заданными стилями
        document.write(`${text}`);
        }
        
        // Пример использования функции:
        const stylesArray = [['color', 'red'], ['font-size', '24px']];
        const someText = 'Привет, мир!';
        
        applyStyles(stylesArray, someText);