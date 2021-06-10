


export const verify = (value) => {
    if(value == undefined) value="N/D";
        return value

}

export const cap = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }