import { useState, useEffect } from 'react'

function useFetch(url, initialState){
  const [ data, setData ] = useState([])

  useEffect(() => {
    fetch(url)
    .then(r => r.json())
    .then(data => setData(data))
  },[])
  return data
}

export { useFetch }
