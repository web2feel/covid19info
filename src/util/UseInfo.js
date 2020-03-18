import {useState, useEffect} from 'react'
import axios from 'axios'
export default function useInfo(url){
    const[info,setInfo] = useState()

    useEffect(() => {
        axios.get(url)
            .then( res => {
                setInfo(res.data)              
            }).catch(err=> console.log(err))           
            
    }, [url])
    return info
}

