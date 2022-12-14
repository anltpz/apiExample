
const userListData =document.getElementById("users")
const addUser=document.getElementsByClassName("add-user")
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
        throw new Error("Error found", e.message);
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
    
    <form method="POST">
    <a  onclick=deleteClick(${i.id})     class="delete-button" id="delete-button">Delete</a>
    <a  onclick=updateUserClick(${i.id}) class="update-button" id="update-button">Update</a>

    </form>
    </td>
    </tr>`  
    userListData.innerHTML+=row
 
   
}}

//---------------------------------------------------------------

const getAllData= async()=>
{
 await getAllDataBase(url)
        
}
getAllData()

//---------------------------------------------------------------
// Method Get user get 
// const getUserFetch=(Id)=> {
//     return fetch(url+"/"+Id);
// }

// const getUserDataId=async(userId)=> {
//     try {
//         const repo = await getUserFetch(userId);
//         return repo.json();
//     }
//     catch (e) {
//         console.log("Error found", e.message);
//         throw e;
//     }
// }
// console.log(getUserDataId(2).then(x =>{console.log(x.name)}))
//--------------------------------------------------------------
//Post request  

const postUserFetch=()=>
{
    const requestOptions= 
    {
        method: 'POST',
    }
    return fetch(url, requestOptions)
}

const  postUser=async ()=>
{
    try
    {
        const response = await postUserFetch()
        return await response.json()
    }
    catch(e)
    {
        throw new Error("Error post user",e)
    }
 }

//--------------------------------------------------------------

//Delete User

const userDeleteFetch=(Id)=>
{
    const requestOptions={
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: 'Fetch Detele Request Example' })
    }
    return fetch(url + `/` + Id,requestOptions)
}

 const userDelete=async(Id)=>
{
    try
    {
        const response = await userDeleteFetch(Id)
        return await response.json()
    }
    catch(e)
    {
        throw new Error("User delete error",e)
    }
  
}

//  userDelete(2).then(data=>console.log(data))
//  .catch(error=>console.log(error))
//--------------------------------------------------------------
//delete click functiony
const deleteClick=(Id)=>
{
    userDelete(Id);
    getAllData();
}
//--------------------------------------------------------------
//update funciton 
const updateUserFetch=()=>
{
    const requestOptions = {
        method:'PUT',
    }
    return fetch(url + `/` + Id, requestOptions);
}

const updateUser= async(Id)=>
{
    try
    {
        const response = await updateUserFetch()
        return await response.json()
    }
    catch(e)
    {

        throw new Error("Error updateUser",e)
    }
}

const updateUserClick=(Id)=>
{
    updateUser(Id)
}

const userAddClick=()=>
{
    postUser().then(data =>console.log(data))
    .catch(error=>console.error(error))
}

const refreshClick=()=>
{
    refresh()
}

const refresh=()=>
{
    location.reload();
}













