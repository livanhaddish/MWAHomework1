let applyCoupon = (category)=>(discount)=>(item)=>{
    if(category!=item.category) return {};
    item.price = item.price * (1-discount);
}
const item = {
    "name":"Biscuits",
    "type" :"Regular",
    "category":"Food",
    "price":2.0
}

console.log(applyCoupon("food")(0.1)(item).price===1.8);
console.log(item.price);