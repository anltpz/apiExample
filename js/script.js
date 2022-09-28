const users =document.getElementsByClassName("users")
const username =document.getElementById("req8")
const table =document.getElementById("users")


dataItem = `
[
    {
     "name": "Odie",
     "surname": "Turner",
     "city": "Buckinghamshire",
     "id": "1"
    },
    {
     "name": "Tia",
     "surname": "Mayer",
     "city": "Borders",
     "id": "2"
    },
    {
     "name": "Marcelino",
     "surname": "Heidenreich",
     "city": "Berkshire",
     "id": "3"
    },
    {
     "name": "Furman",
     "surname": "Kuphal",
     "city": "Buckinghamshire",
     "id": "4"
    },
    {
     "name": "Julie",
     "surname": "Jacobs",
     "city": "Avon",
     "id": "5"
    },
    {
     "name": "Curtis",
     "surname": "Stracke",
     "city": "Berkshire",
     "id": "6"
    },
    {
     "name": "Brooklyn",
     "surname": "Balistreri",
     "city": "Bedfordshire",
     "id": "7"
    },
    {
     "name": "Clementine",
     "surname": "Witting",
     "city": "Buckinghamshire",
     "id": "8"
    },
    {
     "name": "Stone",
     "surname": "Rutherford",
     "city": "Borders",
     "id": "9"
    },
    {
     "name": "Carmelo",
     "surname": "Mante",
     "city": "Cambridgeshire",
     "id": "10"
    },
    {
     "name": "Willard",
     "surname": "Jacobson",
     "city": "Borders",
     "id": "11"
    },
    {
     "name": "Aisha",
     "surname": "Yost",
     "city": "Borders",
     "id": "12"
    },
    {
     "name": "Edmund",
     "surname": "Daugherty",
     "city": "Bedfordshire",
     "id": "13"
    },
    {
     "name": "Mylene",
     "surname": "Ullrich",
     "city": "Borders",
     "id": "14"
    },
    {
     "name": "Leilani",
     "surname": "Kilback",
     "city": "Buckinghamshire",
     "id": "15"
    },
    {
     "name": "Dulce",
     "surname": "D'Amore",
     "city": "Cambridgeshire",
     "id": "16"
    },
    {
     "name": "Robert",
     "surname": "Davis",
     "city": "Avon",
     "id": "17"
    },
    {
     "name": "Chance",
     "surname": "Cummerata",
     "city": "Bedfordshire",
     "id": "18"
    },
    {
     "name": "Soledad",
     "surname": "Beatty",
     "city": "Avon",
     "id": "19"
    },
    {
     "name": "Melyna",
     "surname": "Runte",
     "city": "Buckinghamshire",
     "id": "20"
    },
    {
     "name": "Luna",
     "surname": "Jenkins",
     "city": "Cambridgeshire",
     "id": "21"
    },
    {
     "name": "Hilma",
     "surname": "Leannon",
     "city": "Bedfordshire",
     "id": "22"
    },
    {
     "name": "Courtney",
     "surname": "Von",
     "city": "Buckinghamshire",
     "id": "23"
    },
    {
     "name": "Jensen",
     "surname": "Romaguera",
     "city": "Buckinghamshire",
     "id": "24"
    },
    {
     "name": "Gail",
     "surname": "Welch",
     "city": "Cambridgeshire",
     "id": "25"
    },
    {
     "name": "Austin",
     "surname": "Upton",
     "city": "Berkshire",
     "id": "26"
    },
    {
     "name": "Matt",
     "surname": "Dibbert",
     "city": "Borders",
     "id": "27"
    },
    {
     "name": "Elijah",
     "surname": "Wiegand",
     "city": "Borders",
     "id": "28"
    },
    {
     "name": "Don",
     "surname": "Corkery",
     "city": "Berkshire",
     "id": "29"
    },
    {
     "name": "Enoch",
     "surname": "Kuhlman",
     "city": "Borders",
     "id": "30"
    },
    {
     "name": "May",
     "surname": "Stehr",
     "city": "Cambridgeshire",
     "id": "31"
    },
    {
     "name": "Yoshiko",
     "surname": "Purdy",
     "city": "Avon",
     "id": "32"
    },
    {
     "name": "Marian",
     "surname": "Pollich",
     "city": "Borders",
     "id": "33"
    },
    {
     "name": "Christa",
     "surname": "Cummings",
     "city": "Berkshire",
     "id": "34"
    },
    {
     "name": "Abel",
     "surname": "Osinski",
     "city": "Avon",
     "id": "35"
    },
    {
     "name": "Edythe",
     "surname": "Paucek",
     "city": "Avon",
     "id": "36"
    },
    {
     "name": "Horace",
     "surname": "Stark",
     "city": "Buckinghamshire",
     "id": "37"
    },
    {
     "name": "Joesph",
     "surname": "Klein",
     "city": "Avon",
     "id": "38"
    },
    {
     "name": "Zaria",
     "surname": "Weissnat",
     "city": "Berkshire",
     "id": "39"
    },
    {
     "name": "Rosalinda",
     "surname": "Kilback",
     "city": "Avon",
     "id": "40"
    },
    {
     "name": "Angela",
     "surname": "Konopelski",
     "city": "Avon",
     "id": "41"
    },
    {
     "name": "Declan",
     "surname": "Bailey",
     "city": "Bedfordshire",
     "id": "42"
    },
    {
     "name": "Ayden",
     "surname": "Mosciski",
     "city": "Borders",
     "id": "43"
    },
    {
     "name": "Camden",
     "surname": "Fritsch",
     "city": "Bedfordshire",
     "id": "44"
    },
    {
     "name": "Prince",
     "surname": "Padberg",
     "city": "Borders",
     "id": "45"
    },
    {
     "name": "Duncan",
     "surname": "Bogisich",
     "city": "Cambridgeshire",
     "id": "46"
    },
    {
     "name": "Yolanda",
     "surname": "Barton",
     "city": "Cambridgeshire",
     "id": "47"
    },
    {
     "name": "Madilyn",
     "surname": "Morar",
     "city": "Avon",
     "id": "48"
    },
    {
     "name": "Lelah",
     "surname": "Jerde",
     "city": "Bedfordshire",
     "id": "49"
    },
    {
     "name": "Dallin",
     "surname": "Marks",
     "city": "Berkshire",
     "id": "50"
    }
   ]`

   var obj = JSON.parse(dataItem);
//GET POST UPDATE
//


let getData =(obj)=>
{

    for(let i=0 ; i<obj.length;i++)
{
    var row =`<tr> 
    <td>${obj[i].id}</td>
    <td>${obj[i].name}</td>
    <td>${obj[i].surname}</td>
    <td>${obj[i].city}</td>
    <td>
    <input class="update-button" id="update-button" type="button" value="Update" >
    <input class="update-button" id="delete-button" type="button" value="Delete" >
</td>
    </tr>`  
    table.innerHTML+=row
    
  
}
}

getData(obj)






