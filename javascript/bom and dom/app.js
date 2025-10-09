function changeText() {
    // Access elements by ID
    let heading = document.getElementById("heading");
    let para = document.getElementById("para");
  
    // Modify content
    heading.innerHTML = "DOM Updated!";
    para.style.color = "blue";
  
    // Add a new element
    let newElement = document.createElement("h2");
    newElement.textContent = "New element added!";
    document.body.appendChild(newElement);
  }
  