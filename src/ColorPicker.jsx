import { useState } from "react";
function ColorPicker (){

    const [color, setColor] = useState("#FFFFFF");

    const handleColorChange = (e) =>{
        setColor(e.target.value);
    }
    return (
        <>
    <div className="color-picker-container">
            <h1>Color Picker</h1>
            <div className="color-display" style={{backgroundColor: color}}></div>
    <p>Selected Color: {color}</p>
    </div>
<label htmlFor="">Select a color
<input type="color" value={color} onChange= {handleColorChange} />  
</label>
</> 
)

}
export default ColorPicker;