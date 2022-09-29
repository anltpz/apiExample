const users =document.getElementsByClassName("users")
const username =document.getElementById("req8")
const table =document.getElementById("users")


    

// }
// }

// getData(obj)


const userListData =document.getElementById("users")
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
    

}
}

const getAllData= async()=>
{
    const data = await (await fetch("https://63340612433198e79dcddf72.mockapi.io/api/users")).json()
   typeof(data)
    const asArray =Object.entries(data);

    dataObject(data)
        
    

}

getAllData()







