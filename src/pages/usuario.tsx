import Cabecalho from "@/components/template/Cabecalho";
import Conteudo from "@/components/template/Conteudo";
import Pagina from "@/components/template/Pagina";
import TituloPagina from "@/components/template/TituloPagina";
import Formularios from "@/components/usuario/Formularios";
import usuario from "@/data/constants/usuarioFalso";
import { IconForms } from "@tabler/icons-react";

export default function CadastroUsuario() {
  return (
    <Pagina>
        <Cabecalho/>
        <Conteudo>
          <TituloPagina
          icone={<IconForms/>}
          principal="Dados Cadastrais"
          secundario={`Informações de ${usuario.email}`}/>
          <Formularios/>
        </Conteudo>
    </Pagina>
  )
}
