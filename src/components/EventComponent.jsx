import { useState } from "react";
function EventComponent() {
  const [name, setName] = useState("Guest");
  const [quantity, setQuantity] = useState();
  const [ comment, setComment ] = useState('');

  function handleNameChange(e) {
    setName(e.target.value);
  }
  function handleQuantityChange(e) {
    setQuantity(e.target.value);
  }
  function handleCommentChange(e){
    setComment(e.target.value);
  }
  return (
    <div>
      <input value={name} onChange={handleNameChange} type="text" />
      <p>Name: {name}</p>

      <input value={quantity} onChange={handleQuantityChange} type="number" />
      <p>Quantity: {quantity}</p>

    <textarea value={comment} onChange={handleCommentChange} placeholder="Enter delivery instructions" />
    <p>Comment: {comment}</p>
    </div>
  );
}
export default EventComponent;
