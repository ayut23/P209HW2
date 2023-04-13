document.addEventListener('DOMContentLoaded', function() {
   

    const sizeInput = document.getElementsByName('size');
    const toppingsInput = document.getElementById('toppings');
    const submitBtn = document.querySelector('input[type="submit"]');
  
    
    const sizePriceMap = {
      'small': 7.0,
      'medium': 10.0,
      'large': 14.0
    };
  
    const toppingsPriceMap = {
      'none': 0.0,
      'one': 2.0,
      'two': 3.0
    };
  
  
    submitBtn.addEventListener('click', function(event) {
      event.preventDefault(); 
  
      
      let sizePrice = 0;
      let toppingsPrice = 0;
  
      for (let i = 0; i < sizeInput.length; i++) {
        if (sizeInput[i].checked) {
          sizePrice = sizePriceMap[sizeInput[i].value];
          break;
        }
      }
  
      toppingsPrice = toppingsPriceMap[toppingsInput.value];
  
    
      const totalPrice = sizePrice + toppingsPrice;
  
     
      alert(`Your pizza costs $${totalPrice.toFixed(2)}.`);
    });
  });
  