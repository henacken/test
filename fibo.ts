function fibo(n: number) {
    if (n == 1) {
        return 1;
    } else if (n == 0) {
        return 1;
    }

    return fibo(n-1) + fibo(n-2);
}

fibo(10);