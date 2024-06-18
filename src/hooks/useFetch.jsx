import { useEffect, useState } from "react"

function useFetch(url) {

    const [data, setData] = useState(null)
    const [isPending, setIspending] = useState(null)
    const [error, setError] = useState(null)
    
    useEffect(() => {
        const getData = async () => {
            try {
                const request = await fetch(url)

                if(!request.ok){
                    throw new Error("something wentokoprtkgok wrong")
                }
                const response = await request.json()
                setData(response)
                setIspending(false)
                setError(null)
            } catch(err){
                console.log(err.message);
                setIspending(false)
                setError(err.message)
            }
        }
        getData()
    },[url])
  return {data,isPending,error}
}

export { useFetch }
