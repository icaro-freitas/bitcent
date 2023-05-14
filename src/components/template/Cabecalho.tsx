import BoasVindas from "./BoasVindas";
import MenuUsuario from "./MenuUsuario";
import Pagina from "./Pagina";

export default function Cabecalho() {
    return (
        <div className={`
        flex justify-between items-center
        p-7 border-b border-zinc-900`}>
            <BoasVindas />
            <MenuUsuario/>
        </div>
    )
}