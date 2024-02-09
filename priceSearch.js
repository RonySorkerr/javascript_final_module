const array = [
    {id: 1, name: 'xiaomi phone', price: 1500},
    {id: 2, name: 'Dell laptop', price: 2000},
    {id: 3, name: 'apple phone', price: 5000},
    {id: 4, name: 'waltom phone', price: 3000},
    {id: 5, name: 'samsung phone', price: 1500},
    {id: 6, name: 'Dell inspiron laptop', price: 1000},
    {id: 7, name: 'Oppo phone', price: 4500},
    {id: 8, name: 'iphone phone', price: 1500},
    {id: 9, name: 'hp laptop', price: 3500},
    {id: 10, name: 'doel laptop', price: 2500},
    {id: 11, name: 'smart laptop', price: 1500},
    {id: 12, name: 'one plus Phone', price: 7200},

]



function matchedPrice (array, searchedPrice){
    
    const matchedPrice = [];
    for(item of array){
        if(item.price === searchedPrice){
            matchedPrice.push(item.name);
            matchedPrice.push(item);
        }
        
    }
    return matchedPrice;
}

const input = matchedPrice(array, 1500);
console.log(input);
