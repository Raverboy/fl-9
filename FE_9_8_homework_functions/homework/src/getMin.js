function getMin(...restArgs){
    let num = [...restArgs];
    num.sort(function(a, b){
        return a-b
    });
    console.log(num[0])  
}

