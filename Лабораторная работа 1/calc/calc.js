"use strict";

window.addEventListener('load', function OnWindowLoaded()
{
  let signs = [
    '←', 'c', '%', '+',
    '7', '8', '9', '-',
    '4', '5', '6', '/',
    '1', '2', '3', '*',
    '.', '0', '±', '='
  ];

  let calc = document.getElementById('calc');

  let textArea = document.getElementById('inputVal');

  signs.forEach(function (sign) {
    let signElement = document.createElement('div');
    signElement.className = 'btn';
    signElement.innerHTML = sign;
    calc.appendChild(signElement);
  });

  document.querySelectorAll('#calc-wrap .btn').forEach(function (button) {
    button.addEventListener('click', onButtonClick);
  });

  function onButtonClick(e)
  {
    switch (e.target.innerHTML)
    {
      case 'c':
        textArea.innerHTML = '0';
        break;
      case '=':
        textArea.innerHTML = eval(textArea.innerHTML);
        break;
      case '←':
        textArea.innerHTML = textArea.innerHTML.substr(0, textArea.innerHTML.length - 1);
        if ((textArea.innerHTML.length == 0) || (textArea.innerHTML == '-')) textArea.innerHTML = '0';
        break;
      case '±':
        if (textArea.innerHTML.charAt(0) == '-')
          {textArea.innerHTML = textArea.innerHTML.substring(1, textArea.innerHTML.length);}
        else
          {textArea.innerHTML = '-' + textArea.innerHTML;}
        break;
      default:
        if (('123456789'.includes(e.target.innerHTML)) && (textArea.innerHTML == '0'))
        {textArea.innerHTML = e.target.innerHTML;}
        else if ('+-/*%'.includes(textArea.innerHTML.charAt(textArea.innerHTML.length-1))
        && ('+-/*%'.includes(e.target.innerHTML)))
        {textArea.innerHTML = textArea.innerHTML.substr(0, textArea.innerHTML.length-1) + e.target.innerHTML;}
        else if ((e.target.innerHTML == '.') && (textArea.innerHTML.endsWith('.')))
        {textArea.innerHTML = textArea.innerHTML;}
        else
        {textArea.innerHTML += e.target.innerHTML;}
    }
  }
});
