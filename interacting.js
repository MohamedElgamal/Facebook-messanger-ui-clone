const myMessagesStyleClasses = ["my-messages" , "direction" , "message-style"]
const friendMessagesParentStyleClasses = ["friend-messages" , "direction"];
const friendMessagesChildStyleClasses = ["friend-message-content" , "message-style"];
let messages , xhr = new XMLHttpRequest();
let requestMessage = () =>{
    xhr.open("GET" , "messages.json");
    xhr.send("");
}

xhr.onreadystatechange = () =>{
    console.log("status changed!!")
    if(xhr.readyState == 4){
        console.log("status : " + xhr.status);
        if(xhr.status == 200){
            messages = JSON.parse(xhr.responseText);
            iterateOverMessageObj();
        }
    }
}

let iterateOverMessageObj = ()=>{
   for(let i = 0 ; i < messages.message.length ; i++){
        bindMessagesOnStream(messages.message[i]);
   }
}

let bindMessagesOnStream = (message) =>{
    let element = document.createElement("div");
    if(message.myMessages == true){
        console.log(message.myMessages)
        element.innerText = message.content;
        element.classList.add(...myMessagesStyleClasses);
    }
    else{
        createFriendMessagesContainer(message.content);
    }
    document.getElementsByClassName("chat-content")[0].append(element)
}

let createFriendMessagesContainer = (message)=>{
    let parentElement , childMessageElement , childImageElement , imgElement;
    parentElement = createElement("div");
    childMessageElement =createElement("div");
    childImageElement = createElement("div");
    imgElement = createElement("img");
    parentElement.appendChild(childMessageElement );
    parentElement.appendChild( childImageElement);
    childImageElement.appendChild(imgElement);
    document.getElementsByClassName("chat-content")[0].append(parentElement)
    parentElement.classList.add(...friendMessagesParentStyleClasses);
    childMessageElement.classList.add(...friendMessagesChildStyleClasses);
    childImageElement.classList.add("image");
    childMessageElement.innerText = message;
    imgElement.src = "./assets/account-image.jpg";
    function createElement(tagType){
        return document.createElement(tagType);
    }
};

let writingMessage = ()=>{
    console.log("a7a")
}

requestMessage();
