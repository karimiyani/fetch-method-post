const postBtn = document.querySelector(".post-data");



postBtn.addEventListener("click", postData);

function postData(){
    const userData={
        id:1,
        name:"gomnam",
        username:"gomnaman",
        email:"gomnam@yahoo.com"
    };
    fetch('https://jsonplaceholder.typicode.com/users', {
        method :'POST',
        body:JSON.stringify(userData),
        headers :{"content-type": "application/json"},
    })
    .then((response) => {
        return response.json();
    }).then( data => console.log(data));
}


// {id: 11, name: 'gomnam', username: 'gomnaman', email: 'gomnam@yahoo.com'}
// email: "gomnam@yahoo.com"
// id: 11
// name: "gomnam"
// username: "gomnaman"
// [[Prototype]]: Object