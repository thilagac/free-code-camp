import { useEffect, useState } from 'react'




function RandomColor() {
  const [typeOfColor,setTypeOfColor]=useState("hex")
const [color, setColor] = useState('#000000');
let a
function RandomColorUtility(lengths){
 
 

 a= Math.floor(Math.random()*lengths)
 console.log ( a)
 return a
}

function handleCreateRandomHEXColor(){
const hex=[1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]

let hexcolor="#"
for(let i=0;i<6;i++){
  
  hexcolor+=hex[RandomColorUtility(hex.length)]

}  setColor(hexcolor)

}
function handleCreateRandomRGBColor(){
const r=RandomColorUtility(256)
const g=RandomColorUtility(256)
const b=RandomColorUtility(256)

setColor(`rgb(${r},${g},${b})`)
}
useEffect(()=>{
  if(typeOfColor==='rgb')handleCreateRandomRGBColor()
  else handleCreateRandomHEXColor()
},[typeOfColor])
  return (
    <div
    style={{
      width: "100vw",
      height: "100vh",
      backgroundColor: color,
    }}
  >
        <button onClick={()=>setTypeOfColor('hex')}>Create HEX color</button>
        <button onClick={()=>setTypeOfColor('rgb')}>Create RGB color</button>
        <button onClick={typeOfColor==='hex'
        ?handleCreateRandomHEXColor
        :handleCreateRandomRGBColor}>Generate Random color</button>
      
        <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontSize: "60px",
          marginTop: "50px",
          flexDirection  :'column',
          gap :'20px'
        }}
      >
        <h3>{typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  )
}

export default RandomColor