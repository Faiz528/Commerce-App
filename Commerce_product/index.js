function save(event){
    event.preventDefault()
    var price = event.target.amount.value;
    var item = event.target.product .value;

    var object={
        price,
        item,
    }

    axios.post("https://crudcrud.com/api/58910834ede14bea83cd99752649e1e0/cart",object)
    .then((response)=>{
        show(response.data)
        console.log(response);
    })
    .catch((err)=>{
        console.log(err);
    })
}
var total=0;
    window.document.addEventListener("DOMContentLoaded",()=>{
        
        axios.get("https://crudcrud.com/api/58910834ede14bea83cd99752649e1e0/cart")
        .then((response)=>{
            console.log(response)
            for(var j=0;j<response.data.length;j++){
                total = total + parseInt(response.data[j].price)
            }
            document.getElementById('H2').insertAdjacentText("afterend", total);
            console.log(total)
            for(var i=0;i<response.data.length;i++){
                show(response.data[i])
            }
        })
        .catch((error)=>{
            console.log(error)
        })
        
        document.getElementById('H2').insertAdjacentText("afterend", total);
    })
    


function show(object){
    var parent= document.getElementById('listofproducts');
    var child = document.createElement('li');
    child.textContent=(object.price+"-"+object.item+"-")
    parent.appendChild(child)

    const delbutton =document.createElement('input')
    delbutton.type='button'
    delbutton.value='Delete Product'
delbutton.className='deletebutton'
delbutton.style.border='1px solid red'

    child.appendChild(delbutton)
    delbutton.onclick = ()=>{
        parent.removeChild(child)
        axios.delete(`https://crudcrud.com/api/58910834ede14bea83cd99752649e1e0/cart/${object._id}`)
                .then((response) => {
                  console.log(response)
                  
                
                })
                .catch((error) => {
                  console.log(error)
                })
      }
      
}