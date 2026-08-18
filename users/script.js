let url = 'https://fakestoreapi.com/users'

let resp = await fetch(url)

let dados = await resp.json()

let linhas = document.querySelectorAll('tr')
console.log(linhas[0].children)

for (let i = 0; i < 11; i++) {

    let filhos = linhas[i+1].children

    filhos[0].textContent = dados[i].id;
    filhos[1].textContent = dados[i].name.firstname + " " + dados[i].name.lastname;
    filhos[2].textContent = dados[i].email;
    filhos[3].textContent = dados[i].username;
    filhos[4].textContent = dados[i].password;
    filhos[5].textContent = dados[i].phone;
    filhos[6].textContent = dados[i].address.city;
    filhos[7].textContent = dados[i].address.street;
    filhos[8].textContent = dados[i].address.number;
    filhos[9].textContent = dados[i].address.zipcode;
    
    console.log(dados[i])
}