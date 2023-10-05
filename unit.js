var inch = document.getElementById('inch');
var feet = document.getElementById('feet');

inch.addEventListener('input',function(){
    let i = this.value;
    let f=i/12;
    if(!Number.isInteger(f)){
        f=f.toFixed(2);
    }
    feet.value = f;
})

feet.addEventListener('input',function(){
    let f = this.value;
    let i=f*12;
    if(!Number.isInteger(f)){
        i=i.toFixed(2);
    }
    inch.value = i;
})
