import { useState, useEffect } from 'react';
const useLocalStorage = (key, defaultValue)=>{

    let  valueLocal; 
    if(!window.localStorage.getItem(key)){
        window.localStorage.setItem(key, JSON.stringify(defaultValue));
    }
    valueLocal =  window.localStorage.getItem(key);
                       
                        

    const [localValue, setLocalValue] = useState(JSON.parse(valueLocal));

   const setValue = value=>{
       window.localStorage.setItem(key, JSON.stringify(value));
       setLocalValue(value);
   }

    return [localValue, setValue];


}

export { useLocalStorage }

