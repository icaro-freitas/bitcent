import { Avatar, Menu } from "@mantine/core";
import { IconArrowsRight, IconArrowsRightLeft } from "@tabler/icons-react";
import usuario from "@/data/constants/usuarioFalso";

export default function MenuUsuario() {
    return (
        <Menu>
            <Menu.Target>
                <div className="flex items-center gap-3 cursor-pointer">
                    <div className='hidden md:flex flex-col select-none'>
                        <span className='text-sm font-bold text-zinc-200'>{usuario?.nome}</span>
                        <span className='text-xs text-zinc-400'>{usuario?.email}</span>
                    </div>
                    <Avatar
                        size={40}
                        radius="xl"
                        src={usuario?.imagemUrl ?? 'https://source.unsplash.com/random/100x100/?abstract'}
                    />
                </div>
            </Menu.Target>
            <Menu.Dropdown>
                <Menu.Item icon={<IconArrowsRightLeft size={14} />}>
                    Finanças
                </Menu.Item>
            </Menu.Dropdown>
        </Menu>
    )
}