/*let openWin = function(){
   let win = window.open("https://yandex.ru/", "_blank", "width=750,height=750, scrollbars=yes, resizable=yes")
}*/
let win;
let newWin = document.getElementById('openWin');
//newWin.addEventListener("click", openWin() );
newWin.onclick = function(){
    win = window.open("https://yandex.ru/", "_blank", 
    "width=750, height=750, top=200, left=200,  scrollbars=yes, resizable=yes");
}
let showURL = document.getElementById('showURL');
showURL.onclick = function(){
let locWin = win.location;
alert(locWin);
}

/*let name = "my name";
let value = "John Smith";
// кодирует в my%20name=John%20Smith
document.cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);
alert(document.cookie); // ...; my%20name=John%20Smith*/
document.cookie = "user=Ivan";
alert(document.cookie);
/*Cookies.set('surname','Ivanov', {expires: 30});*/

let oldWin = document.getElementById('closeWin');
oldWin.onclick = function(){
   win.close()
}
