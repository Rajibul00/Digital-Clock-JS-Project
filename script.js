let arrofdays = [
    'Sun','Mon','Tue','Wed','Thu','Fri','Sat'
]

function time(){
   
    let date = new Date();
    document.querySelector('.day').innerHTML = arrofdays[ date.getDay()];
     

            document.querySelector('.time').innerText=date.toLocaleTimeString();
   
    
}

setInterval(() => {
    time()
}, 1000);
