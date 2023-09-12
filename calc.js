function calc(number) {
    if(number % 15 === 0) {
        console.log("15の倍数です");
    } else if(number % 5 === 0) {
        console.log("5の倍数です");
    } else if(number % 3 === 0) {
        console.log("3の倍数です");
    } else {
        console.log(number);
    }
}
