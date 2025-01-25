import { useState } from "react";
function EOnChange () {
const [name, setName] = useState("");
const[quantity, setQuantity]=useState(0);
const[comment, setComment]=useState('');
const[payment, setPayment]=useState('');
const[shipping, setShipping]= useState('');

const handleNameChange = (e)=>{
    setName(e.target.value);
}
const handleQuantityChange = (e)=>{
    let newQuantity = Number(e.target.value)
    if (newQuantity < 0){
        (alert(`You don't have quantity!`))
        setQuantity(0)
    }else{
        setQuantity(newQuantity)
    }
}
const handleCommentChange=(e)=>{
    setComment(e.target.value)
}
const handlePaymentChange=(e)=>{
    setPayment(e.target.value);
}
const handleShippingChange =(e)=>{
    setShipping(e.target.value);
}
return (<div>
    <input type="text" value = {name} onChange={handleNameChange} placeholder="Type your name here"/>
    <p>Name: {name}</p>
    
    <input type="number" value = {quantity} onChange={handleQuantityChange} />
    <p>Quantity: {quantity}</p>
   
   <textarea name="" id="" value ={comment} onChange={handleCommentChange} placeholder="Enter delivery instructions"></textarea>
    <p>Comment: {comment}</p>

    <select value={payment} name="" id="" onChange={handlePaymentChange}>
        <option value="">Select an option</option>
        <option value="Visa">Visa</option>
        <option value="Mastercard">Mastercard</option>
        <option value="Giftcard">Giftcard</option>
    </select>
    <p>Payment: {payment}</p>

    <label >
        <input type="radio" value = "Pick up" checked={shipping==="Pick up"} onChange={handleShippingChange}/>
        Pick up
        </label>
        <label htmlFor="">
            <input type="radio" value = "Delivery" checked={shipping==="Delivery"} onChange={handleShippingChange} />
            Delivery
        </label>
        <p>Shipping: {shipping}</p>


</div>)
}
export default EOnChange;