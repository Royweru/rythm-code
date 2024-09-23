"use client"
import React, { useEffect, useState } from 'react'
import { MainNav } from './main-nav'

export const Navbar= () => {
    const [mounted,setMounted] = useState(false)

    useEffect(()=>{
        setMounted(true)
    },[])

    if(!mounted){ return null}

  return (
    <>
     <MainNav />
    </>
  )
}
