import React, { useState } from 'react'

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const getData = async () => {
        setIsLoading(prev => true)
        setError(prev => null)
        try {
            const response = await fetch(url)

            if (!response.ok) {
                throw new Error('Request failed!');
            }

            const data = await response.json()
            console.log(data);
            setData(prev => data)
        } catch (error) {
            setError(error.message || 'Something went wrong!');
        } finally {
            setIsLoading(false);
        }
    }

    return {
        data,
        isLoading,
        error,
        getData
    }
}

export default useFetch