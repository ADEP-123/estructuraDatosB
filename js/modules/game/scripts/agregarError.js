import Variables from "../../../variables.js"

const variables = new Variables();
export default function agregarError(error) {
    //Verificar que el error renga un mensaje
    if (!error) {
        console.error("El error debe tener un mensaje");
        return;
    }
    //Aca clonamos el nodo desde variables para manejarlo e insertarlo en la lista de errores
    const errorMsgTemplate = variables.errorMessageEx.cloneNode(true);
    errorMsgTemplate.querySelector(".errorMessage").innerHTML = error;
    errorMsgTemplate.style.opacity = "1";
    variables.errorMessagesList.insertAdjacentElement("beforeend", errorMsgTemplate);

    //Extraemos el ultimo error
    const lastErrorDiv = variables.errorMessagesList.lastElementChild;

    //funcion para transparentar el error en un 5%
    const transparentar = () => {
        let lastOpacity = parseFloat(lastErrorDiv.style.opacity);
        if (lastOpacity > 0) {
            lastErrorDiv.style.opacity = (lastOpacity - 0.05).toFixed(2); 
        } else {
            //Limpiar el intervalo cuando es transparente y eliminarmos el div del error de la lista
            clearInterval(newInterval); 
            variables.errorMessagesList.removeChild(lastErrorDiv); 
        }
    };

    //Creamos el intervalo que llama a la funcion transparentar sobre el div
    const newInterval = setInterval(transparentar, 250); 
}
