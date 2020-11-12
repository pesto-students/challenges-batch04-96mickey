function throttle(fn, timeInMs) {
    let timer;
    return (...args) => {
        if(timer) {
            return;
        }
    
        timer = setTimeout(function() {
            fn.apply(this, args);
            timer = undefined;
        }, timeInMs)
    }
}

export { throttle };
