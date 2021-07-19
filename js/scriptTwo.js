// 2. Створити масив, що описує чек в магазині. 
// Кожний елемент масиву складається з назви товару, кількості та ціни за одиницю товару.

const list = document.querySelector('.list');

const sort_name_btn = document.querySelector('.sort-options .sort-name');
const sort_price_btn = document.querySelector('.sort-options .sort-price');
const sort_importance_btn = document.querySelector('.sort-options .sort-importance');

console.log(list);

const shoppingBill = [
    {name: 'gas', count: 20, cost: 33, importance: 9 },
    {name: 'wheels', count: 4, cost: 100, importance: 4 },
    {name: 'filter', count: 1, cost: 50, importance: 2 },
    {name: 'air freshener', count: 1, cost: 40, importance: 1 },
    {name: 'baby chair', count: 2, cost: 100, importance: 9 },
    {name: 'video recorder', count: 1, cost: 99, importance: 3 },
    {name: 'pump', count: 1, cost: 20, importance: 5 },
    
];

console.log(shoppingBill);

function displayBill (array = []) {
    list.innerHTML = "";

    for (let i = 0; i < array.length; i++) {
        let item = array[i];

        let item_element = document.createElement('div'); 
        item_element.classList.add('list-item');

        let title = document.createElement('div');
        title.classList.add('item-title');
        title.innerText = item.name;

        item_element.appendChild(title);

        let count = document.createElement('div');
        title.classList.add('item-count');
        title.innerText = item.count; 

        item_element.appendChild(count);

        let cost = document.createElement('div');
        title.classList.add('item-cost');
        title.innerText = item.cost; 

        item_element.appendChild(cost);

        let importance = document.createElement('div');
        title.classList.add('item-importance');
        title.innerText = item.importance; 

        item_element.appendChild(importance);

        list.appendChild(item_element);
    }
}
displayBill(shoppingBill);