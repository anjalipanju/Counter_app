import { Button } from '@material-ui/core'
import React, { useState } from 'react'

const Counter = () => {
    var [counterValue, setCounterValue] = useState(2)
    const incCounterBtn=()=>{
        setCounterValue(
        counterValue=counterValue+1
        )
    }
    const decCounterBtn=()=>{
        setCounterValue(
            counterValue=counterValue-1
        )
    }
    const squareBtn=()=>{
        setCounterValue(
            counterValue=counterValue*counterValue
        )
    }
    return (
        <div>
            <h1 margin="normal">{counterValue}</h1>
            <Button
            fullWidth
            margin="normal"
            color="secondary"
            variant="contained"
            onClick={incCounterBtn}
            >+</Button>
            <Button
            fullWidth
            margin="normal"
            color="primary"
            variant="contained"
            onClick={decCounterBtn}
            >-</Button>
            <Button
            fullWidth
            margin="normal"
            color="secondary"
            variant="contained"
            onClick={squareBtn}
            >Squre</Button>
        </div>
    )
}

export default Counter
