export const floorNumber = (number: string | number) => {

    //Округляем до 2-х знаков после запятой
    const flooredNumber = Math.floor(Number(number) * 100) / 100
  
  
    const numberParts = flooredNumber.toString().split(',');
  
    const fraction = numberParts.length === 2 ? numberParts[0] : null;
    const integer = numberParts.length === 2 ? numberParts[1] : numberParts[0];
  
    integer.split('');
  
    const result = [];
  
    for (let i = 0; i < integer.length; i++) {
      if (i % 4 === 0) {
        result.unshift(i + ' ');
      } else {
        result.unshift(i);
      }
    }
  
    return fraction ? [...result, ...fraction].join('') : result.join('');
  
  }
  

  console.log(floorNumber('1234567890'));
  console.log('asd')