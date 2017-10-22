function addUserText() {
    var div = document.createElement("DIV");
    var content = document.createElement("DIV")
    var text = document.getElementById("textbox").value;
    if(text == "") return;
    
    div.className = "user"; 
    content.className = "chatblock";
    var t = document.createTextNode(text);
    div.appendChild(t);                           
    content.appendChild(div);     
    chatWindow = document.getElementById("chat");
    chatWindow.appendChild(content); 
    chatWindow.scrollTop = chatWindow.scrollHeight;
    document.getElementById("textbox").value = "";
}