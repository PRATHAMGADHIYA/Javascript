let users=[]

const handleSalesData =(number,name,price)=>{
    let tr=document.createElement('tr');
    let td1=document.createElement('td');
    let td2=document.createElement('td');
    let td3=document.createElement('td');

    td1.innerHTML=number;
    td2.innerHTML=name;
    td3.innerHTML=price;
    tr.append(td1,td2,td3);

    document.getElementById('tbody').append(tr);


    for (let i = 0; i < users.length; i++) {
        let tr = document.createElement('tr')

        let td1 = document.createElement('td')
        td1.innerHTML = users[i].number

        let td2 = document.createElement('td')
        td2.innerHTML = users[i].name        

        let td3 = document.createElement('td')
        td3.innerHTML = users[i].price
    }


    const salaesdata=(e)=>{
        e.preventDefault();
        
        let Number = document.getElementById('Number').value;
        let name = document.getElementById('name').value;
        let price = document.getElementById('price').value;
      
        let user = {
            number: number,
            name: name,
            price: price,
        }
        
        users.push(user);
        console.log(users); 
    }
}