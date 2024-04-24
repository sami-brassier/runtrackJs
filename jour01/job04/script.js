function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const checkYearButton = document.getElementById('CheckYear');
    const yearInput = document.getElementById('Year');
    const resultParagraph = document.getElementById('Result');
  
    checkYearButton.addEventListener('click', () => {
      const year = parseInt(yearInput.value);
      const leapYear = isLeapYear(year);
  
      if (leapYear) {
        resultParagraph.textContent = `${year} est une année bisextile.`;
      } else {
        resultParagraph.textContent = `${year} n'est pas une année bisextile.`;
      }
    });
  });
  