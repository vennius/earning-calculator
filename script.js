const price = document.querySelector('#price');
const sales = document.querySelector('#total-sales');
const exRevenue = document.querySelector('#revenue');

const daysSpan = document.querySelector('.days');


setInterval(() => {
  if(price.value && sales.value && exRevenue.value !== ''){
    if(parseInt(price.value) && parseInt(sales.value) && parseInt(exRevenue) !== NaN){
      
      let priceValue = parseInt(price.value);
      let salesValue = parseInt(sales.value);
      let revenueValue = parseInt(exRevenue.value);
      
      daysSpan.innerHTML = revenueValue/salesValue;
      
      
      
    }
  }
}, 100);