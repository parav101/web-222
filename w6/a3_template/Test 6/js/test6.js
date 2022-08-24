function addLogo()
{
    var img = document.createElement("img");
img.src = "images/logo.gif";
var src = document.getElementById("header");
src.appendChild(img);  

}

var caption = "Example Caption";
var users = [
    ["First Name","Last Name","Age","Email"],
    ["Kaitlin","Burns","23","kburns99753@usermail.com"],
    ["Joshua","Feir","31","josh319726@usermail.com"]
];
function addTable()
{
    var dom_table = document.querySelector("#addTable");
    var table = document.createElement("table");
    var tableCaption = table.createCaption();
    tableCaption.textContent = caption;
    var tr = null, td=null, txt=null;
    for (let i=0; i<users.length; i++)
    {
        tr = document.createElement("tr");
        for (let j=0; j<users[i].length;j++)
        {
            td = document.createElement("td");
            txt = document.createTextNode(users[i][j]);
            td.appendChild(txt);
            td.style.border="1px solid";
            tr.appendChild(td);
        }  // for each data cell
        table.appendChild(tr);
    } // for each row
    table.style.border="1px solid";
    dom_table.appendChild(table);
} //function addTable()

function Congrats()
{
    document.getElementById("addcong").style.color = "red";
    var dom_fun = document.querySelector("#addcong");
    dom_fun.innerHTML = "Congrats";
} 