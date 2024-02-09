const array = [
    {id: 1, name: 'xiaomi phone', price: 1500},
    {id: 2, name: 'Dell laptop', price: 1500},
    {id: 3, name: 'apple phone', price: 1500},
    {id: 4, name: 'waltom phone', price: 1500},
    {id: 5, name: 'samsung phone', price: 1500},
    {id: 6, name: 'Dell inspiron laptop', price: 1500},
    {id: 7, name: 'Oppo phone', price: 1500},
    {id: 8, name: 'iphone phone', price: 1500},
    {id: 9, name: 'hp laptop', price: 1500},
    {id: 10, name: 'doel laptop', price: 1500},
    {id: 11, name: 'smart laptop', price: 1500},
    {id: 12, name: 'one plus Phone', price: 1500},

]



function matchedPrice (array, searchedPrice){

    const matchedPrice = [];
    for(item of array){
        if(item.name.toLowerCase().includes(searchedPrice.toLowerCase())){
            matchedPrice.push(item);
        }
    }
    return matchedPrice;
}

const input = matchedPrice(array, 'laptop');
console.log(input);
