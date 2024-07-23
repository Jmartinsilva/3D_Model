import { AiOutlineArrowLeft, AiOutlineHighlight, AiOutlineShopping } from "react-icons/ai"
import { TiArrowRepeatOutline } from "react-icons/ti";
import { useSnapshot } from "valtio";
import { state } from "./store";



export const Overlay = () => {

  const snap = useSnapshot(state) 

  return(
    <div className="container">
        <header>
          <div>
          <TiArrowRepeatOutline color="white" size= "3em" />
          </div>
          <div>
            <AiOutlineShopping color="white" size="3em" />
          </div>
        </header>
        <div>
        {snap.intro ? <Intro/> : <Customizer/>}
        </div>
    </div>
  )
}




const Intro = () =>{

return (
<>

      <section key="main">
        <div className="section--container"  >
          <div >
            <h1>IT IS FOR YOU</h1>
          </div>
          <div className="support--content">
            <div>
              <p>
              CUSTOMIZE YOUR GLASSES WITH 3D MODEL
               
              </p>
              <button 
              style={{ background: 'black' }}
              onClick={()=>(state.intro = false)}
              >
                CUSTOMIZE IT <AiOutlineHighlight size="1.3em" />
              </button>
            </div>
          </div>
        </div>
      </section>
    
</>
)}

const Customizer = () => {
  
  const snap = useSnapshot(state)


  return (
   <>
    <section key="custom">
      <div className="customizer">
        <div className="color-options">
          {snap.colors.map((color) => (
            <div
              key={color}
              className="circle"
              style={{ background: color }}
              onClick={() => (state.selectedColor = color)}></div>
          ))}
        </div>

        <button
          className="exit"
          style={{ background: snap.selectedColor }}
          onClick={() => (state.intro = true)}>
          GO BACK
          <AiOutlineArrowLeft size="1.3em" />
        </button>
      </div>
    </section>
    </> 
  )
}
        

        
