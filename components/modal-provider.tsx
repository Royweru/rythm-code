"use client"
import React, { useEffect, useState } from 'react'
import { OrderModal } from './modals/order-modal'

export const ModalProvider = () => {
    const[mounted,setMounted] = useState(false)

    useEffect(()=>{
        setMounted(true)
    },[])

    if(!mounted)  return null
  return (
    <>
     <OrderModal />
    </>
  )
}
