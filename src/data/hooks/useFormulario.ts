import { useState } from "react";
import Transacao from "@/logic/core/financas/Transacao"

export default function useFormulario(dadosIniciais: Transacao){
    const [dados, setDados] = useState(dadosIniciais)

    function alterarAtributo(atributo: string, fn?: Function) {
        return (valorOuEvento:any) => {
            const v = valorOuEvento?.target?.value ?? valorOuEvento
            setDados({...dados,[atributo]: fn?.(v) ?? v})
        }
    }

    return {
        dados, 
        alterarDados: setDados,
        alterarAtributo
    }
}