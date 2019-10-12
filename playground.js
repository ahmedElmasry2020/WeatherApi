const add=(num1,num2,callback)=>{
    setTimeout(()=>{
        callback(num1+num2);
    },2000)
}

add(5,10,(sum)=>{
    console.log(sum);
})