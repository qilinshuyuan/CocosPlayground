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
/**
 * 根据id获取数据
 * @param id 
 * @returns 
 */
export function getDataById(id: string, lang = 'zh') {
    const menuDetail = menuDatas.find((item) => item.id === id)
    if (!menuDetail) return
    // const lang = 'zh' // Replace with the desired value for lang
    const menuItem = {
        label: menuDetail['label_' + lang as keyof typeof menuDetail],
        demoLink: menuDetail.demoLink,
        codeLink: menuDetail.codeLink,
        qrLink: menuDetail.qrLink,
        detail: menuDetail['detail_' + lang as keyof typeof menuDetail]
    }
    return menuItem
}

/**
 * 根据类型获取菜单
 * @param param0 
 * @returns 
 */
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
                label: item['typeLabel_' + lang as keyof typeof item],//typeLabel_en
                type: item.type,
                children: [
                    menuItem
                ]
            })
        }
    }
    return list
}