let applyCoupon = (category)=>(discount)=>(item)=>{
    if(category ==item.category) {
         item.price = item.price * (1-discount);
        return item;
    }
}
const item = {
    "name":"Biscuits",
    "type" :"Regular",
    "category":"Food",
    "price":2.0
}

console.log(applyCoupon("Food")(0.1)(item).price===1.8);
