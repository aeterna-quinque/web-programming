function AddRow(id)
{
  var tbody = document.getElementById(id).getElementsByTagName("TBODY")[0];
  var row = document.createElement("TR");
  var td1 = document.createElement("TD");
  td1.appendChild(document.createElement("input"));
  var td2 = document.createElement("TD");
  td2.appendChild (document.createElement("input"));
  var td3 = document.createElement("TD");
  var b = document.createElement("button");
  b.innerHTML = "Сохранить";
  b.classList.add('But');
  var oRows = tbody.getElementsByTagName('tr');
  var iRowCount = oRows.length;
  var rowName = 'row' + (iRowCount);
  b.setAttribute("id", rowName);
  td3.appendChild(b);
  row.appendChild(td1);
  row.appendChild(td2);
  row.appendChild(td3);
  tbody.appendChild(row);
}

function SaveRow(id)
{

}

function DeleteRow(id)
{
  table = id.getElementById('prices');
  let i = id.parentNode.parentNode.rowIndex;
  if (confirm('Вы действительно хотите удалить запись?'))
  {table.deleteRow(i);}
  else {return;}
}
