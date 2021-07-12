// 1. Створити масив «Список покупок». Кожен елемент масиву є об’єктом котрий містить назву продукту, необхідну кількість та чи придбаний, чи ні. 
// Написати декілька функцій для роботи з таким масивом.

const shoppingList = [
    {name: 'One', count: 10, done: 1},
    {name: 'Two', count: 20, done: 1},
    {name: 'Three', count: 30, done: 0},
    {name: 'Four', count: 40, done: 1},
    {name: 'Five', count: 50, done: 0},
   ];

// 	Вивід усього списку на екран таким чином, 
// щоб спершу йшли некуплені продукти, а потом – куплені

const sortedList2 = shoppingList.sort((a, b) => (a.done > b.done ? 1:-1));
console.log(sortedList2);


//  Функція додавання покупок в список. Врахуйте, що при додаванні позиції з вже існуючим в списку продуктом, необхідно просто збільшити 
// кількість, а не додавати нову позицію

function addToShoppingList(item , shoppingList) {
    let found = shoppingList.find((i) => i.name === item.name);
    if (found) {
        found.count += item.count;
    } else { shoppingList.push(item);

    }
    console.log(found);
}

const five = {
    name: 'Five',
    count: 50,
    done: 0,
};

const six = {
    name: 'Six',
    count: 10,
    done: 1,
};

addToShoppingList(five, shoppingList);
addToShoppingList(six, shoppingList);


//  Купівля продукту. Функція приймає назву продукту та відмічає його як придбаний.