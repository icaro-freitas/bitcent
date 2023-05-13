import Cabecalho from "./cabecalho";
import Depoimentos from "./depoimentos";
import Destaque from "./destaque";
import Rodape from "./rodape";
import Vantagens from "./vantagens";

export default function Landing(){
    return (
        <div>
            <Cabecalho/>
            <Destaque/>
            <Vantagens/>
            <Depoimentos/>
            <Rodape/>            
        </div>
    )
}