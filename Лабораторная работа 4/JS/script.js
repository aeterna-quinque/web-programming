prices = {
  "Торговый советник (АТС)": 5000,
  "Скрипт": 1500,
  "Индикатор": 3000,
  "Онлайн консультация": 2500
}

priority = {
  "VIP": 3000,
  "Высокий приоритет": 1500,
  "Средний приоритет": 500,
  "Низкий приоритет": 0
}

let cur_opti = 0;
let cur_priority = 0;
let init_order_block = "";

function saveInit() {
  init_order_block = document.getElementsByClassName('order-block')[0].innerHTML;
};


function switchBlocks() {
  let order = document.getElementsByClassName('order-block')[0];
  let queue = document.getElementsByClassName('queue-block')[0];
  let button = document.getElementsByClassName('But')[1];
  if (order.style.display === "none")
  {
    order.style.display = "block";
    queue.style.display = "none";
    button.innerHTML = "Таблца заказов";
  }
  else
  {
    button.innerHTML = "Оформить заказ";
    order.style.display = "none";
    queue.style.display = "block";
  }
};

function addPosition() {
  let position = document.getElementsByClassName('pos');
  if (position[1].value > 0 && position[3].value != ""){
    let table = document.getElementsByClassName('book')[0];
    let text = "<tr>" + table.getElementsByTagName('tr')[0].innerHTML + "</tr>";
    let price = 0;
    price = prices[position[0].value] * position[1].value;
    for (let i=1; i < table.getElementsByTagName('tr').length; i++)
    {
      if (table.getElementsByTagName('tr').length-i === 2)
      {
        text += "<tr><td>"+position[0].value+"</td><td>"+position[1].value+"</td><td>"+price+"</td><td class='dates'>"+position[3].value+"</td></tr>";
      }
      text += "<tr>" + table.getElementsByTagName('tr')[i].innerHTML + "</tr>";
    }
    table.innerHTML = text;
    let parsed = 0;
    parsed = parseInt(table.getElementsByClassName('Sum')[1].value, 10);
    let sum = 0;
    sum = parseInt(parsed, 10) + parseInt(price, 10);
    table.getElementsByClassName('Sum')[1].value = sum;
    document.getElementsByClassName('final_sum')[0].value = sum;}
    else{
      alert("Данные не введены или введены некорректно");
    }
};

function dynamicPriceDisplay() {
  let position = document.getElementsByClassName('pos');
  let price = prices[position[0].value] * position[1].value;
  position[2].innerHTML = price;
}

function priorityCounter() {
  let choice = 0;
  choice = parseInt(priority[document.getElementsByClassName('priority')[0].value], 10);
  let value = 0;
  value = parseInt(document.getElementsByClassName('final_sum')[0].value, 10);
  document.getElementsByClassName('final_sum')[0].value = value + choice - parseInt(cur_priority, 10);
};

function savePriority() {
  cur_priority = priority[document.getElementsByClassName('priority')[0].value];
};

function optiCounter(i) {
  let opt = document.getElementsByClassName('opt');
  let value = 0;
  value = parseInt(document.getElementsByClassName('final_sum')[0].value, 10);
  let price = 0;
  if (i === 0) {
    opt[0].checked = true;
    opt[1].checked = false;
    price = 500;
  }
  else {
    opt[0].checked = false;
    opt[1].checked = true;
    price = -500;
  }
  document.getElementsByClassName('final_sum')[0].value = value + price - parseInt(cur_opti, 10);
};

function saveOpti() {
  let opt = document.getElementsByClassName('opt');
  if (opt[0].checked){
    cur_opti = 500;
  }
  else {
    cur_opti = 0;
  }
};

function saveOrder() {
  let table = document.getElementsByClassName('queue-block')[0].getElementsByTagName('table')[0];
  let id = table.getElementsByTagName('tr').length.toString();
  let fio = document.getElementsByClassName('fio');
  let pattern = new RegExp("^[А-ЯЁ]{1}[а-яА-ЯЁё-]+$");
  if (fio[0].value === "" || fio[1].value === "" || pattern.test(fio[0].value) === false|| pattern.test(fio[1].value) === false) {
    alert("Введите имя и фамилию");
  }
  else{
    fio = fio[0].value + " " + fio[1].value;
    let price = document.getElementsByClassName('final_sum')[0].value;
    if (document.getElementsByClassName('Sum')[1].innerHTML === "0") {
      alert("Вы не сформировали заказ");
    }
    else{
      if (document.getElementsByClassName('agreement')[0].checked === false) {
        alert("Вы не дали согласие на обработку персональных данных");
      }
      else{
        if (document.getElementsByClassName('doc')[0].files.length === 0) {
          alert("Добавьте файл технического задания");
        }
        else{
          let today = new Date();
          let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
          let row = "<tr><td>" + id + "</td><td>" + fio + "</td><td>" + price + "</td><td>" + date + "</td></tr>";
          table.innerHTML += row;
          alert("Заказ успешно добавлен!");
          clearOrder();
        }
      }
    }
  }
};

function clearOrder() {
  let order_block = document.getElementsByClassName('order-block')[0];
  order_block.innerHTML = init_order_block;
};

function getCurrentDate() {
  let today = new Date();
  let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+(today.getDate()+7);
  let position = document.getElementsByClassName('pos')[3];
  position.setAttribute('min', date);
}
