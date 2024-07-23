//Enfoque de camara con suavizado
// en posicion y rotacion del puntero del usuario
//damp3: Suaviza la transición de un vector 3D.
//dampE: Suaviza la transición de una rotación (Euler).
//dampAngle: Suaviza la transición de un ángulo.
import { useFrame } from "@react-three/fiber"
import { easing } from "maath"
import { useRef } from "react"


export const CameraRig =({ children }) => {
    const group = useRef()
    useFrame((state, delta) => {
      easing.damp3(state.camera.position, [-30, 10, 200], 0.25, delta)
      easing.dampE(
        group.current.rotation,
        [state.pointer.y / 10, -state.pointer.x / 10, 0],
        0.25,
        delta
      )
      
    })
    return <group ref={group}>{children}</group>
  }


