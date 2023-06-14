//Реализовать класс, описывающий окружность. В классе должны быть следующие компоненты:
//■ поле, хранящее радиус окружности;
// ■ get-свойство, возвращающее радиус окружности;
// ■ set-свойство, устанавливающее радиус окружности;
// ■ get-свойство, возвращающее диаметр окружности;
// ■ метод, вычисляющий площадь окружности;
// ■ метод, вычисляющий длину окружности.
// Продемонстрировать работу свойств и методов.

class Circle {
    constructor(radius) {
    this._radius = radius;
    }
    get radius() {
    return this._radius;
    }
    set radius(value) {
    if (value <= 0) {
    throw new Error('Радиус должен быть положительным числом');
    }
    this._radius = value;
    }
    get diameter() {
    return this._radius * 2;
    }
    get area() {
    return Math.PI * Math.pow(this._radius, 2);
    }
    get circumference() {
    return 2 * Math.PI * this._radius;
    }
    }
    
    // Пример использования класса
    const circle = new Circle(5);
    
    console.log(circle.radius); // 5
    console.log(circle.diameter); // 10
    console.log(circle.area); // 78.53981633974483
    console.log(circle.circumference); // 31.41592653589793
    
    circle.radius = 7;
    console.log(circle.diameter); // 14
    circle.radius = -3; // Ошибка "Радиус должен быть положительным числом"


    class CssClass {
        constructor(className, styles = {}) {
        this.className = className;
        this.styles = styles;
        }
        setStyle(property, value) {
        this.styles[property] = value;
        }
        removeStyle(property) {
        delete this.styles[property];
        }
        getCss() {
        let css = '.${this.className} {\n';
        for (let property in this.styles) {
        css += '  ${property}: ${this.styles[property]};\n';
        }
        css += '}';
        return css;
        }
        }
        
        // Пример использования
        const myClass = new CssClass('my-class', { color: 'red', fontSize: '20px' });
        myClass.setStyle('fontFamily', 'Arial');
        myClass.removeStyle('color');
        console.log(myClass.getCss()); // Выведет .my-class { font-size: 20px; font-family: Arial; }