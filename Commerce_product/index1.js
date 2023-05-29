var total=0;
var a =document.getElementById('amount')
 var b=   document.getElementById('products')
async function save(event){
    event.preventDefault()
    var price = event.target.price.value;
    var product= event.target.product .value;

    var object={
        price,
        product,
    }
    console.log(object)
    try{
    const response = await axios.post(`http://localhost:3000/add`,object)
     
    console.log(response);

        show(response.data)
       
            total = total + parseInt(response.data.Price)
            console.log(total);
            document.getElementById('H2').innerText = `Total value worth of products is Rs: ${total}`;
            a.value=''
            b.value=''
    }
    catch(err){
        console.log(err);
    }
}

//async function loadcart(){
    
//}


    window.document.addEventListener("DOMContentLoaded",async()=>{
      try{
        const response = await axios.get("http://localhost:3000/list")
    
        console.log(response)
        for(var i=0;i<response.data.length;i++){
            show(response.data[i])
    
            total = total + parseInt(response.data[i].Price)
        }
        window.document.getElementById('H2').innerText = `Total value worth of products is Rs: ${total}`;
    }
    catch(error){
        console.log(error)
    }
    })

    async function show(item)
{

  try{ 
    const childHTML = ` 
    <li id=${ item.id}> 
      Price: ${item.Price} -
      Product: ${ item.Product}-
      <button onclick="remove('${ item.id}','${item.Price}')">DELETE</button></form> 
    </li> 
  ` 
  list.innerHTML += childHTML 
  } catch (err) { 
    console.log(err) 
  }
}

async function remove(userId, Price)
{
  try{
    total = total - Price
   await axios.delete(`http://localhost:3000/delete/${userId}`)
  list.remove(userId)
   a.value=''
    b.value=''
    document.getElementById('H2').innerText = `Total value worth of products is Rs: ${total}`;
  
           
  }
  catch(err){
    console.log(err)
}
}

    


   
