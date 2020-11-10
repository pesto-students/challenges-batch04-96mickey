class Cycled {
    constructor(input) {
        this.array = input;
        this.head = 0;
    }

    set index(val) {
        this.head = val;
    }

    get index() {
        return this.array[this.head];
    }

    current() {
        return this.array[this.head];
    }

    next() {
        if(!this.array[this.head + 1] && this.array[this.head + 1] !== 0) {
            this.head = 0;
        } else {
            this.head += 1;
        }

        return this.current();
    }

    previous() {
        if(this.head - 1 < 0) {
            this.head = this.array.length - 1;
        } else {
            this.head -= 1;
        }

        return this.current();
    }

    step(val) {
        if(val >= 0) {
            this.head = (this.head + val) % this.array.length;
        } else if (val < 0) {
            let index = this.head + val;
            if(index < 0) {
                this.head = this.array.length + index % this.array.length;
            } else {
                this.head = index % this.array.length;
            }
        }
        return this.current();
    }

    index(val) {
        
    }
}
export { Cycled };
