function header_increase(arg)
{
  let name = "h2_"+arg;
  document.getElementById(name).style.color = '#4182b0';
  setTimeout(() => document.getElementById(name).innerHTML += ">", 150);
  setTimeout(() => document.getElementById(name).innerHTML += ">", 300);
}

function header_decrease(arg, lan)
{
  let name = "h2_"+arg;
  document.getElementById(name).style.color = '#69a1c9';
  if (arg == "1" & lan == "ru")
  document.getElementById(name).innerHTML = "Подробнее для трейдеров >";
  if (arg == "1" & lan == "en")
  document.getElementById(name).innerHTML = "More for traders >";
  if (arg == "2" & lan == "ru")
  document.getElementById(name).innerHTML = "Подробнее для подписчиков >";
  if (arg == "2" & lan == "en")
  document.getElementById(name).innerHTML = "More for followers >";
}
