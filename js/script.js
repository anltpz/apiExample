
const userListData =document.getElementById("users")
const url ="https://63340612433198e79dcddf72.mockapi.io/api/users"

//Method Get all data
//---------------------------------------------------------------
const getAllDataBase= async(url)=>
{
    try {
        const data = await (await fetch(url)).json()
        dataObject(data)
    }
    catch (e) {
        console.log("Error found", e.message);
        throw e;
    }        
}
let dataObject =(obj)=>
{
   for(let i of obj)
    {
    var row =`<tr> 
    <td>${i.id}</td>
    <td>${i.name}</td>
    <td>${i.surname}</td>
    <td>${i.city}</td>
    <td>
    <input class="update-button" id="update-button" type="button" value="Update" >
    <input class="update-button" id="delete-button" type="button" value="Delete" >
</td>
    </tr>`  
    userListData.innerHTML+=row
   
}}
//---------------------------------------------------------------

const getAllData= async()=>
{
  getAllDataBase(url)
        
}
getAllData()

//---------------------------------------------------------------
// Method Get user get 
const getUserId=(Id)=> {
    return fetch(url+"/"+Id);
}

async function getUserDataId(userId) {
    try {
        const repo = await getUserId(userId);
        return repo.json();
    }
    catch (e) {
        console.log("Error found", e.message);
        throw e;
    }
}
console.log(getUserDataId(2).then(x =>{console.log(x.name)}))
//--------------------------------------------------------------
//Post request  
//  function postUser()
// {
// return fetch(url, {
//     method:'POST',
   

// }).then(response =>response.json())

// }
// postUser().then(data =>console.log(data))
// .catch(error=>console.error(error))
//--------------------------------------------------------------


//Delete User

// function postDeletUserId(Id)
// {
//     return fetch(url+`/`+Id,{
//         method:"DELETE",

//     }).then(response =>response.json())
// }

// postDeletUserId(5).then(data=>console.log(data))
// .catch(error=>console.log(error))
//--------------------------------------------------------------















