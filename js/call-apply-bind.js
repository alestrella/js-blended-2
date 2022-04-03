const audi = {
    model: 'q7',
    price: 80000,
    trim: 'lux',
    inStock: 50,
}

const bmw = {
    model: 'x5',
    price: 50000,
    trim: 'm5',
    inStock: 40,
}

const showInfo = {
    carInfo(){
        console.log(`${this.model}, ${this.price}, ${this.trim}, ${this.inStock}`);
    },

    showThis(){
        console.log(this);
    },
}

//  call    apply   bind

showInfo.carInfo.apply(bmw);
showInfo.carInfo.call(bmw);
const aaa = showInfo.carInfo.bind(bmw);
aaa();



// bmw.carInfo();
// audi.carInfo();

// bmw.showThis();

// // audi.carInfo();
// audi.showThis();

// audi.brand='audi';
// audi['country']='germany';
// console.log(audi.model);
// console.log()

// // console.log(audi)

// // window.alert('Hello');
// // this.alert('hello');
// // alert('hello');


// function sayHello(){
//     console.log('hallo');
// }

// window.sayHello();