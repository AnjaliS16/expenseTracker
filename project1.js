document.addEventListener("DOMContentLoaded", function() {
    // Retrieve stored data from localStorage and render list items
    var userList = document.getElementById("userList");
   userList.innerHTML = ''; 


    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        var storedObj = JSON.parse(localStorage.getItem(key));
        renderListItem(storedObj,key);
    }
});


    document.getElementById("addButton").addEventListener("click", function handleFormSubmit(event) {
    event.preventDefault();
    
    
    var exp = document.getElementById("exp").value;
    var des = document.getElementById("des").value;
    var select = document.getElementById("select").value;
    
    var obj = {
      exp: exp,
      des: des,
      select: select
    };
  
    localStorage.setItem(des, JSON.stringify(obj));
    renderListItem(obj,des);
});
   function renderListItem(obj,des){
  
    var string = `${obj.exp} - ${obj.des} - ${obj.select}`;
    var newli = document.createElement("li");
    
    var newlit = document.createTextNode(string);
    newli.appendChild(newlit);
    
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete Expense";
    deleteButton.addEventListener("click", function() {
     
      newli.remove();
      localStorage.removeItem(des);
    });
    var editbutton=document.createElement("button");
    editbutton.textContent="Edit Expense";
     
   
    
     //newlit.edit();
     editbutton.addEventListener("click", function() {
        document.getElementById("exp").value = obj.exp;
        document.getElementById("des").value = obj.des;
        document.getElementById("select").value = obj.select;
    });
    newli.appendChild(deleteButton);
    newli.appendChild(editbutton);
    
    var userList = document.getElementById("userList");
    userList.appendChild(newli);
  
    
  }
  
 // module.exports = handleFormSubmit;
