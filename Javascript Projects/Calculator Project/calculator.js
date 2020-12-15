const calculate = (n1, operator, n2) => {
  let result = ''
  
  if (operator === 'add') {
    result = parseFloat(n1) + parseFloat(n2)
  } else if (operator === 'subtract') {
    result = parseFloat(n1) - parseFloat(n2)
  } else if (operator === 'multiply') {
    result = parseFloat(n1) * parseFloat(n2)
  } else if (operator === 'divide') {
    result = parseFloat(n1) / parseFloat(n2)
  }
  
  return result
}


const calculator = document.querySelector('.calculator')
const display = calculator.querySelector('.calculator__display')
const keys = calculator.querySelector('.calculator__keys')


keys.addEventListener('click', e => {
  
  if (e.target.matches('button')) {
      const key = e.target
      const action = key.dataset.action

  
      /* 1. The number of the key that was clicked
         2. The current displayed number
            We can get these two values through the textContent property of the clicked key and .calculator__display respectively.*/
      const keyContent = key.textContent
      const displayedNum = display.textContent


      const previousKeyType = calculator.dataset.previousKeyType
      
      // Remove .is-depressed class from all keys
      Array.from(key.parentNode.children)
      .forEach(k => k.classList.remove('is-depressed'))
      
      if (!action) {
        console.log('number key!')
        if (displayedNum === '0' || previousKeyType === 'operator') {
          display.textContent = keyContent
        } else {
          display.textContent = displayedNum + keyContent
        }
        calculator.dataset.previousKeyType = 'number'
      }

      if ( 
        action === 'add' ||action === 'subtract' ||action === 'multiply' ||action === 'divide'){
        
        /* Fourth, if Tim hits a number, an operator, a number and another operator, in that order, the display should be 
        updated to a calculated value.
        This means we need to use the calculate function when firstValue, operator and secondValue exists.*/
        let firstValue = calculator.dataset.firstValue
        const operator = calculator.dataset.operator
        let secondValue = displayedNum

         // Note: It's sufficient to check for firstValue and operator because secondValue always exists
        if (firstValue && operator && previousKeyType !== 'operator' && previousKeyType !== 'calculate') {
           const calcValue = calculate(firstValue, operator, secondValue)
           display.textContent = calcValue

           // Update calculated value as firstValue
           calculator.dataset.firstValue = calcValue
        } else {
           // If there are no calculations, set displayedNum as the firstValue
            calculator.dataset.firstValue = displayedNum
        }

        //MAKE KEYS DEPRESSED 
        key.classList.add('is-depressed')

        // Add custom attribute
        calculator.dataset.previousKeyType = 'operator'
        
        //to get the first number
        //calculator.dataset.firstValue=displayedNum
        calculator.dataset.operator = action
        console.log('operator!')
      }

      if (action === 'decimal') { 
        if (!displayedNum.includes('.') && previousKeyType !== 'operator') {
          display.textContent = displayedNum + '.'
        } 
        else if (previousKeyType === 'operator' || previousKeyType === 'calculate'){
          display.textContent='0.'
        }
        
      calculator.dataset.previousKeyType = 'decimal'
      }

     

      if (action === 'clear') {
        console.log('clear key!')
        if (key.textContent === 'AC') {
          calculator.dataset.firstValue = ''
          calculator.dataset.modValue = ''
          calculator.dataset.operator = ''
          calculator.dataset.previousKeyType = ''
        } else {
          key.textContent = 'AC'
        }
  
        display.textContent = 0
        calculator.dataset.previousKeyType = 'clear'
      }

      if (action !== 'clear') {
        const clearButton = calculator.querySelector('[data-action=clear]')
        clearButton.textContent = 'CE'
      }

      if (action === 'calculate') {
        console.log('calculate key!')
        let firstValue = calculator.dataset.firstValue
        const operator = calculator.dataset.operator
        let secondValue = displayedNum

        if (firstValue){
          if (previousKeyType === 'calculate') {
            firstValue = displayedNum
            secondValue = calculator.dataset.modValue
          }
      
          display.textContent = calculate(firstValue, operator, secondValue)
        }
        
       

        // Set modValue attribute
        calculator.dataset.modValue = secondValue
        calculator.dataset.previousKeyType = 'calculate'
      }    
  }
})



