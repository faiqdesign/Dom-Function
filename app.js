

function sayhellofaiq(){
    console.log('hellofaiq')
}

sayhellofaiq()
sayhellofaiq()
sayhellofaiq()
sayhellofaiq()
sayhellofaiq()



var h1 = document.getElementById('heading')
 console.log(h1)
 console.log(h1.innerText)

var h3 = document.getElementById('name')
console.log(h3)
console.log(h3.innerText)


var p =document.getElementById('para')
function showmore(){
    p.innerText='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quibusdam quasi asperiores magnam iure facere aspernatur . natus necessitatibus adipisci cum, consequatur temporibus! Ducimus illum soluta officiis veritatis neque alias aliquid! '
}

function showless(){
    p.innerText='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quibusdam quasi asperiores magnam iure facere aspernatur '
}


var span = document.getElementById('number')
var count = 1

function increment(){
    // count = count + 1
    count++
    span.innerText=count
    
}
function decrement(){
    // count = count + 1
    count--
    span.innerText=count
    
}


function SeeLetterWords(){
    var input = document.getElementById('input')
    console.log(input.value)
}



function seeLettersWords(){
    var input = document.getElementById('input')
    var value = input.value
    var letter = value.length
    var words = value.split(' ').length
    document.getElementById('output').innerText = 'Total Words : ' + words + ' Total Letters : ' + letter
}