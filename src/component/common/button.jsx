// Reusable components
import React from 'react'
import { Button } from '@mui/material'

const CommonButton = ({variant, className, onClick, children})=>{
    <Button variant={variant} className={className} onClick={onClick}>{children}</Button>
}

export default CommonButton