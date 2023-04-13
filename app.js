function clicked() {
    var inp = document.getElementById("inp")
    if (inp.value.length != 0) {
        var UL = document.getElementById("unorderList");
        var create_Element = document.createElement("li")
        var btnDiv=document.createElement("div")



        var creat_button1 = document.createElement("button")
        creat_button1.setAttribute("class", "democlass");
        creat_button1.setAttribute("onclick", "edit(this)")

        var creat_button1_TextNode = document.createTextNode("Edit")
        creat_button1.appendChild(creat_button1_TextNode)


        var creat_button2 = document.createElement("button")
        creat_button2.setAttribute("class", "democlass");
        creat_button2.setAttribute("onclick", "Delete(this)")


        var creat_button2_TextNode = document.createTextNode("Delete")
        creat_button2.appendChild(creat_button2_TextNode)

        


        var create_TextNode = document.createTextNode(inp.value)
        
        create_Element.appendChild(create_TextNode)
        btnDiv.appendChild(creat_button1)
        btnDiv.appendChild(creat_button2)
        create_Element.appendChild(btnDiv)

        UL.appendChild(create_Element)
        inp.value = ""


    }
}
function edit(a) {
    let edit = a.parentNode.parentNode.firstChild.nodeValue
    var p = prompt("Edit your value", edit)
    a.parentNode.parentNode.firstChild.nodeValue = p
}

function Delete(b) {
    b.parentNode.parentNode.remove()
}
function Delete_All() {
    var unorder_List = document.getElementById("unorderList")
    unorder_List.innerHTML = ""
}



// function clicked() {
//     var inp = document.getElementById("inp")
//     if (inp.value.length != 0) {
//         var unorderList = document.getElementById("unorderList")
//         var li = document.createElement('li') //li==============================
//         var btn_edit=document.createElement("button")//btn_edit==================
//         var edit_text=document.createTextNode("EDIT")
//         btn_edit.appendChild(edit_text)
//         var text = document.createTextNode(inp.value)
//         li.appendChild(text)
//         unorderList.appendChild(li)
//         unorderList.appendChild(btn_edit)
//     }
//     inp.value=""
// }