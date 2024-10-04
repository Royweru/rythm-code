import { Course } from '@prisma/client'
import {create} from 'zustand'

interface OrderModalStore{
    isOpen:boolean,
    onOpen:(data:Course[])=>void,
    onClose:()=>void,
    data?:Course[]
}
export const useOrderModal = create<OrderModalStore>((set)=>({
    isOpen:false,
    onOpen:(data:Course[]) =>set({isOpen:false,data}),
    onClose:()=>set({isOpen:false}),
    data:undefined
}))