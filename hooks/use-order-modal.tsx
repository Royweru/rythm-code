import {atom,useAtom} from 'jotai'

const modalState = atom(false)

export const useOrderModal = ()=>{
    return useAtom(modalState)
}