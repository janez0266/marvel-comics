

export const capitalCase = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
}

export const fecha = (fecha) => {
    if(fecha){
        const arreglo = fecha.split("T");
    return arreglo[0];
    }
   
}

