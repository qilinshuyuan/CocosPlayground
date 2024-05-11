import menuDatas from '@/data/data.json'
import type { GameMode, OfficialType } from '../enums'
import type { Menu } from '@/components/interface'
type RecursivePartial<T> = {
    [P in keyof T]?: T[P] extends (infer U)[]
    ? RecursivePartial<U>[]
    : T[P] extends object
    ? RecursivePartial<T[P]>
    : T[P];
};

interface MenuData {
    officialType: OfficialType;
    gameMode: GameMode
    lang?: 'zh' | 'en'
}
export function getDataById(id: string) {
    return menuDatas.find((item) => item.id === id)
}

export function getMunusByType({ officialType, gameMode, lang = 'zh' }: MenuData) {
    const menus = menuDatas.filter(
        (item) => item.officialType === officialType && item.gameMode === gameMode
    )
    const list: RecursivePartial<Menu>[] = []
    for (let item of menus) {
        const menu = list.find((listOne) => listOne.type == item.type)
        const menuItem = {
            officialType: item.officialType as unknown as OfficialType,
            gameMode: item.gameMode as unknown as GameMode,
            id: item.id,
            label: item['label_' + lang as keyof typeof item],//label_en
        }
        if (menu) {
            if (menu.children) menu.children.push(menuItem)
        } else {
            list.push({
                label: item.typeLabel_zh,//typeLabel_en
                type: item.type,
                children: [
                    menuItem
                ]
            })
        }
    }
    return list
}