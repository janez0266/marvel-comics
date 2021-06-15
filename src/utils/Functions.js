import moment from "moment"

export const capitalCase = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
}

export const fecha = (fecha) => {
    if(fecha){
        const arreglo = fecha.split("T");
         const date = arreglo[0].split("-")
         if(date[0]==="") date.shift()       
        let newDate = moment([
            parseInt(date[0]), 
            parseInt(date[1]), 
            parseInt(date[2])]).
            format('MMMM Do, YYYY');
        if(newDate === "Invalid date") 
            return arreglo[0]
         else 
            return newDate 
    }
   
}

