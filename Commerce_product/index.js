var total=0;
function save(event){
    event.preventDefault()
    var price = event.target.amount.value;
    var item = event.target.product .value;

    var object={
        price,
        item,
    }

    axios.post("https://crudcrud.com/api/8b68405903bb419da8de6c29f0c4b039/cart",object)
    .then((response)=>{
        show(response.data)
        console.log(response);

            total = total + parseInt(response.data.price)
            console.log(total);
            document.getElementById('H2').innerText = `Total value worth of products is Rs: ${total}`;

    })
    .catch((err)=>{
        console.log(err);
    })
}

    window.document.addEventListener("DOMContentLoaded",()=>{
        
        axios.get("https://crudcrud.com/api/8b68405903bb419da8de6c29f0c4b039/cart")
        .then((response)=>{
            console.log(response)
            for(var i=0;i<response.data.length;i++){
                show(response.data[i])

                total = total + parseInt(response.data[i].price)
            }
            document.getElementById('H2').innerText = `Total value worth of products is Rs: ${total}`;
        })
        .catch((error)=>{
            console.log(error)
        })
        
    })

    


    function show(object){
        var parent = document.getElementById('listofproducts');
        var child = document.createElement('li');
        child.textContent = (object.price + "-" + object.item + "-");
        parent.appendChild(child);
      
        const delbutton = document.createElement('input');
        delbutton.type = 'button';
        delbutton.value = 'Delete Product';
        delbutton.className = 'deletebutton';
        delbutton.style.border = '1px solid red';
        child.appendChild(delbutton);
      
        delbutton.onclick = () => {
            parent.removeChild(child);
              
          
          axios.delete(`https://crudcrud.com/api/8b68405903bb419da8de6c29f0c4b039/cart/${object._id}`)
            .then((response) => {
              console.log(response);
              //parent.removeChild(child);
              console.log(response.data.price);
              total = total -(object.price);
               console.log(total)
              document.getElementById('H2').innerText = `Total value worth of products is Rs: ${total}`;
            })
            .catch((error) => {
              console.log(error);
            });
        }
    }

