const items = [
    {name: 'Bike', price:100},
    {name: 'TV', price:200},
    {name: 'Album', price:10},
    {name: 'Book', price:5},
    {name: 'Phone', price:500},
    {name: 'Computer', price:1000},
];
// 1. Filter and show the product that will be 
// bought when you don't have much money (Cheap one)


let filteredElement= items.filter(items=> items.price <10)
let filteredProduct= filteredElement.map(filteredElement=> filteredElement.name);
let filteredString= filteredProduct.toString();
console.log(filteredElement);
console.log(filteredProduct);
console.log(filteredString);



// 2. Filter and show the product that will be expensive in the array

// let atElement = items.at(3);
let filterElements= items.filter(items=> items.price >500)
let filterProduct= filterElements.map(filterElements=> filterElements.name);
let filterString= filterProduct.toString();
console.log(filterElements);
console.log(filterProduct);
console.log(filterString);




// 3. Calculate the full price of all products combined


let reducedValues= items.map(items=> items.price);
let reducedElements= reducedValues.reduce((a,b)=> a+b );
console.log(reducedValues);
console.log(reducedElements);


// 4. Calculate the full price of all products combined 
// and remove products that are under $10

let mapItems= items.map(items=>items.price);
let filterItems= mapItems.filter(mapItems=> mapItems >= 10);
let reduceItems= filterItems.reduce((a,b)=> a+b);
console.log(filterItems);
console.log(reduceItems);



// 5. Filter and show the product that will be 
// start with letter b at first postion

let itemsMapped= items.map(items=> items.name);
let itemsFiltered= itemsMapped.filter( itemsMapped => itemsMapped.charAt(0)==='B'); 
console.log(itemsFiltered);
console.log(itemsMapped);