import { Route, useParams } from "react-router-dom"


export const Images = () => {
    const { starShipsId } = useParams();

    // <Route path=":starShipsId" element={<Images />} />
}


// ver si el useParams() me sirve para conseguir el id de las imagenes que necetiso cargar en cada boton.... ????
