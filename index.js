var a = 0;
let b = "hello";
console.log(b)
const c = function (param1) {
    console.log(param1.clientX);
}


let b1 = 255;


function d(){
    var c = 0;
    return function e(){
        c++;
        console.log(c);
    }
}

let box = document.querySelector('#box')

box.addEventListener('click', ()=>{
    a++;
    console.log(a)

})

document.addEventListener('keydown',(k)=>{
    b = k;

    switch(k.key){
        case "ArrowRight" : 
            b1 = b1-10;
            document.querySelector('body').style.background = `rgb(100,100,${b1})`
            console.log(b1)
            break;

        case "ArrowLeft" :
            b1 = b1  +10;
            document.querySelector('body').style.background = `rgb(100,100,${b1})`
            break;
    }
    console.log(b.key)
})

var close = d()

document.addEventListener('mouseup',(number)=>{
    if(number.button === 2){
        // console.log("right");
        c(number);
        
        close();
    }
    
})












