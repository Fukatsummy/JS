
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