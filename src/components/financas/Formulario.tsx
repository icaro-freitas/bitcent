import 'dayjs/locale/pt-br'
import Transacao from "@/logic/core/financas/Transacao"
import Dinheiro from "@/logic/utils/Dinheiro"
import { Button, Group, Radio, TextInput } from "@mantine/core"
import { DatePickerInput } from "@mantine/dates"
import { TipoTransacao } from '@/logic/core/financas/TipoTransacao'
import { useState } from 'react'

interface FormularioProps {
    transacao: Transacao
    salvar?: (Transacao:Transacao) => void
    excluir?: (Transacao:Transacao) => void    
    cancelar?: () => void
}

export default function Formulario(props: FormularioProps) {
    const [transacao, setTransacao] = useState(props.transacao)

    return (
        <div className={`
            flex flex-col border border-zinc-700
            rounded-xl overflow-hidden
        `}>
            <div className="bg-black py-3 px-7 text-zinc-400">Formulário</div>
            <div className="flex flex-col gap-4 p-4 sm:p-7">
                <TextInput
                    label='Descrição'
                    value={transacao.descricao} 
                    onChange={e => setTransacao({
                        ...transacao,
                        descricao : e.currentTarget.value})}/>
                <TextInput
                    label='Valor'
                    value={Dinheiro.formatar(transacao.valor)} />
                <DatePickerInput
                    label='Data'
                    value={transacao.data}
                    locale="pt-BR"
                    valueFormat="DD/MM/YYYY" />
                <Radio.Group
                    value={transacao.tipo}
                >
                    <Group>
                        <Radio value={TipoTransacao.RECEITA} label="Receita" />
                        <Radio value={TipoTransacao.DESPESA} label="Despesa" />
                    </Group>
                </Radio.Group>
                <div className="flex px-4 sm:px-7 py-4 gap-3 bg-zinc-800">
                    <Button
                        className="bg-green-500" color="green"
                        onClick={() => props.salvar?.(transacao)}
                    >Salvar</Button>
                    <Button
                        className="bg-zinc-500" color="gray"
                        onClick={props.cancelar}
                    >Voltar</Button>
                    <div className="flex-1"></div>
                    {transacao.id && (
                        <Button
                            className="bg-red-500" color="red"
                            onClick={() => props.excluir?.(transacao)}
                        >Excluir</Button>
                    )}
                </div>
            </div>
        </div>)
}