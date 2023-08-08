boton = document.getElementsByClassName('style2')
let store=[]
let cont=''
let cont3=0, cont4=0
let cont2=0
let text=document.getElementById("display")
let text2=document.getElementById("display2")
let default1 = text.textContent
var toggle = document.getElementById('toggle')
var body = document.getElementById('body')
var author = document.getElementById('author')
var presentation = document.getElementById('presentation')
var bgcalculator = document.getElementById('background-calculator')
function calculo(str){
    let myArr = []
    let myArr2=[]
    let numbers = []
    let simbol1 = str[0]
    let cont=0
    let digit2=0
    if (simbol1==='+'|| simbol1==='*'||simbol1==='-'|| simbol1==='÷'){
      simbol1 = str[0]
    }else{
      simbol1 = ''
    }
    if (simbol1==="*" || simbol1==='÷'){
      return 'The Operation is not posible'
    }
    myArr = str.split("")
    console.log(myArr.filter(item=> (item!='*')&& (item!='-')&& (item!='+')&& item!='÷'))
    for (let i=0; i<myArr.length; i++){
      if(myArr[i]==='+' || myArr[i]==='-'||myArr[i]==='*'||myArr[i]==='÷'){
        if(myArr[i+1]==='+' || myArr[i+1]==='-'||myArr[i+1]==='*'||myArr[i+1]==='÷'){
          cont+=1
          digit2=i
        }
        myArr2.push(myArr[i])
        numbers.push('m')
      }else{
        numbers.push(myArr[i])
      }
    }
    numbers = numbers.join("").split("")
    numbers[0] = simbol1+ numbers[0]
    console.log(myArr2)
    console.log(digit2)
    console.log(numbers)
    numbers=numbers.join("").split("m")
    if(cont!=0){
      numbers[digit2]=myArr2[digit2]+numbers[digit2]
      
    }
    numbers
    while(myArr2.length!==0){
      if(myArr2.includes('*')){
        let dig1= myArr2.indexOf('*')
          let result = Number(numbers[dig1]) * Number(numbers[dig1+1])
          numbers.splice(dig1,2)
          myArr2.splice(dig1,1)
          numbers.splice(dig1,0,result)
      }else if(myArr2.includes('÷')){
        let dig1= myArr2.indexOf('÷')
        let result = Number(numbers[dig1]) / Number(numbers[dig1+1])
        numbers.splice(dig1,2)
        myArr2.splice(dig1,1)
        numbers.splice(dig1,0,result)
      }else if(myArr2.includes('+')){
        let dig1= myArr2.indexOf('+')
        if(dig1!=0 && myArr2[dig1-1]==='-'){
          let result = Number(numbers[dig1]) - Number(numbers[dig1+1])
          numbers.splice(dig1,2)
          myArr2.splice(dig1,1)
          numbers.splice(dig1,0,result)
        }else{
          let result = Number(numbers[dig1]) + Number(numbers[dig1+1])
          numbers.splice(dig1,2)
          myArr2.splice(dig1,1)
          numbers.splice(dig1,0,result)
        }
      }else{
        let dig1= myArr2.indexOf('-')
        let result = Number(numbers[dig1]) - Number(numbers[dig1+1])
        numbers.splice(dig1,2)
        myArr2.splice(dig1,1)
        numbers.splice(dig1,0,result)
      }
      numbers
    }
    return numbers[0]
  }
const regex=/[*+-÷]/g
const even = (element) => element === '.';
for(let i=0; i<boton.length;i++){
    boton[i].addEventListener('click',function(){
        let content = this.innerText
        if (content==='+'|| content==='*'||content==='-'|| content==='÷'){
            if(cont2<=2){
                text.textContent=cont
                text2.textContent=cont
            }else{
                text.textContent=''
                text2.textContent=''
            }
            cont2+=1
        }else{
            cont2=0
        }
        if (content==='.'){
            if((cont3===1)&&(cont.split("").some(even))){
                console.log(((cont.includes('+'))||(cont.includes('-')) || (cont.includes('*'))|| (cont.includes('÷'))))
                console.log(cont)
                if(((cont.includes('+'))||(cont.includes('-')) || (cont.includes('*'))|| (cont.includes('÷')))){
                    text.textContent=cont
                    text2.textContent=cont
                    cont3=1
                    console.log(cont3)
                }else{
                    cont3+=1
                    text.textContent=''
                    text2.textContent=''
                }
            }else{
                if(cont3===0){
                    cont3=1
                    text.textContent=cont
                    text2.textContent=cont
                }else{
                    text.textContent=''
                    text2.textContent=''
                }
            }
        }else{
            if (cont3===1){
                cont3=1
            }else{
                cont3=0
            }
        }
        if(cont3===2){
            cont3===1
        }
        if(content!=='=' && content!=='Clear' && content!=='Delete' && (cont2===0 || cont2===1 || cont2===2) && (cont3<2)){
            store.push(content)
            if (Math.floor(store[0])!==0){
                if(cont.length>=24){
                    setTimeout(function(){
                        text.textContent=cont
                        text2.textContent=cont
                    }, 1000)
                    text.textContent='DIGIT LIMIT MET'
                    text2.textContent=''
                }else{
                    cont+=content
                    text.textContent=cont
                    text2.textContent=cont
                }
            }else{
                store.shift(content)
            }
        }else if(content==='Clear'){
            cont=''
            store=[]
            text.textContent = default1
            text2.textContent = ''
        }else if(content ==='Delete'){
            if (cont.length<=1){
                text.textContent = default1
                text2.textContent = ''
                cont=''
                store=[]
            }else{
                store=store.pop()
                const store2 = cont.split("")
                let extraction = store2.pop()
                cont=store2.join("")
                store=store2
                text.textContent = cont
                text2.textContent = cont
            }
        }else{
            if (cont.length<2){
                text.textContent=content
                text2.textContent=content
            }else{
                let result = calculo(cont)
                text.textContent=result
                text2.textContent=cont +'=' + result
                cont=result
            }
        }
        
    })
}
toggle.onclick = function(){
  toggle.classList.toggle('activate')
  body.classList.toggle('background2')
  body.classList.toggle('background1')
  body.classList.add('animation')
  author.classList.toggle('style3')
  presentation.classList.toggle('style3')
  bgcalculator.classList.toggle('style1')
  bgcalculator.classList.toggle('style2-2')
  setTimeout(function(){
    body.classList.remove('animation')
  },1000)
}