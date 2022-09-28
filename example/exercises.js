// 

// const array = ["test","test2","tes3"]


// let testFuciton=(value,array)=>
// {
//     return value;
// }

// const arrayList =new Array(2,3,4,5,6)

// let testX =(a,b)=>
// {
//     return a-b;
// }
// testX(arrayList)
// console.log(arrayList.sort((a,b)=>a-b))

// const number =[2,3,4,5,67,34,456]

// for (i of number)
// {
    
//     if(i===3)
//     break
//     console.log(i)
// }

// const name ="asdkasd"
// for (x of name)
// {
//     console.log(x)
// }

// const arraySet =new Set();
// arraySet.add(23)
// arraySet.add(34)
// arraySet.add(23)
// arraySet.add(23)
// //iterable 
// for (i of arraySet)
// {
//     console.log(i)
// }

// asenkron işlemler 

// function fonksiyonumuz()
// {
//     console.log("ilk console calıstı")
//     setTimeout(() => {
//         console.log("ikinci fonsiyon calisti")
//     }, 2000);
//     console.log("ücüncü fonsiyonuzmu calıstı")
// }
// fonksiyonumuz()

// let callBackfunciyon = async ()=>
// {
//     console.log("ilk param")
//     await setTimeout(() => {
//         console.log("ikinci parametre")
//     }, 4000);
//     console.log("ücüncü  parametre")
    
// }
// callBackfunciyon()

// fetch("https://63340612433198e79dcddf72.mockapi.io/api/users")
// .then(response=>{
//     console.log(response.json())
// }).then(data=>{
//     console.log(data)
// }).then(response=>{
//     if(!response.ok)
//     {
//         throw new Error("network response was not ok")
//     }
//     return response.blob()    
// })


// fetch("https://63340612433198e79dcddf72.mockapi.io/api/users")
// .then(response=>{
//     console.log(response.json())
// })


// let getData =async ()=>
// {
// const getData = await fetch("https://63340612433198e79dcddf72.mockapi.io/api/users")
// const namee =await getData().name
// }

// getData()
// //await hatal calısıyor
// let response = await fetch("https://63340612433198e79dcddf72.mockapi.io/api/users");
// if(!response.ok)
// {
// let json =await response.json()
// }


async function testData ()
{
    const dataGet = await fetch("https://63340612433198e79dcddf72.mockapi.io/api/users");
    const jsonparse =await dataGet.json()
    // console.log(jsonparse.then(x=>{console.log(x)}))
    
    if(!dataGet.ok)
    {
        console.log("hata")
    }
    else 
    {
        console.log("basarili")
    }
}
testData()