class MyClass {
    #privateField1;
    #privateField2;

    static count = 0;

    constructor() {
        MyClass.count++;
    }

    static staticMethod1 = () => {
        console.log("static method 1");
    };

    static staticMethod2 = () => {
        console.log("static method 2");
    };

    getPrivateFields = () => {
        return `field1: ${this.#privateField1}; field2: ${this.#privateField2}`;
    };

    setPrivateField1 = (value) => {
        this.#privateField1 = value;
    };

    setPrivateField2 = (value) => {
        this.#privateField2 = value;
    };

    static getCount = () => {
        return MyClass.count;
    };
}

const class1 = new MyClass();
const class2 = new MyClass();
const class3 = new MyClass();

console.log(MyClass.getCount());
