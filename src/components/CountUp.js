import React, { useEffect, useRef, useState } from 'react'

const CountUp = ({start = 0, end, timer= 50}) => {
    const [number, setNumber]=useState(null);
    const ref = useRef(start)

    const num = end / 200;

    const updateCounterState = () =>{
        if (ref.current < end){
            const result =  Math.ceil(ref.current + num)
            if (result > end) return setNumber(end)
            setNumber(result)
            ref.current = result
        }
        setTimeout(updateCounterState, timer)
    }
    useEffect(() =>{
        let isMounted = true;
        if (isMounted){updateCounterState()}
        return () => isMounted = false
    }, [start, end])
    return (
    <div>{number}</div>
    )
}

export default CountUp