import { useState, useEffect } from 'react'

// This is a custom Hook for fetching data from api 
const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const abortController = new AbortController()
        fetch(url, { signal: abortController.signal })
        .then(res => { 
            if(!res.ok) {
                throw Error('Something is wrong! Could not fetch the resource...')
            }
            return res.json() 
        })
        .then(data => { 
            setData(data) 
            setIsLoading(false)
            setError(null)
        })
        .catch(err => {
            if(err.name === 'AbortError') {
                console.log('aborted')
            } else {
              setIsLoading(false)
              setError(err.message)
            }
        })
        return () => abortController.abort()
    }, [url])

    return { data, isLoading, error }
}

export default useFetch