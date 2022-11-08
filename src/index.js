function teljesNev(userLista){
    let lista = document.getElementById('users');
    for(let u of userLista){
        let li = document.createElement('li');
        li.innerHTML = u.lastName.toUpperCase() + ", " + u.firstName + "<br>";
        lista.appendChild(li);
    }

}

document.addEventListener('DOMContentLoaded', async ()=>{
    document.getElementById('osszuser').addEventListener('click', async ()=>{
        document.getElementById('users').innerHTML = "";
        let response = await fetch ('/users.json');
        let eredmeny = await response.json();
        let result = eredmeny.users.sort((a, b) => {
            if(a.lastName < b.lastName){
                return -1;
            }
            else if(a.lastName > b.lastName){
                return 1;
            }
            else{
                return 0;
            };
        })
        teljesNev(result)
    })

    document.getElementById('barna').addEventListener('click', async ()=>{
        let response = await fetch ('/users.json');
        let eredmeny = await response.json();
        let result = eredmeny.users.filter(e => e.eyeColor.includes("Brown"));
        let count = result.length;
        document.getElementById('sbarna').innerHTML = " " + count;
    })
    
    document.getElementById('sulyos').addEventListener('click', async ()=>{
        let cm = document.getElementById('cm').value;
        let response = await fetch ('/users.json');
        let eredmeny = await response.json();
        let result = eredmeny.users.filter(e => e.height >= cm);
        let suly = result.reduce((a, b) => a + b.weight, 0)
        console.log(suly)

    })
})

