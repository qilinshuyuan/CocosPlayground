import type { GameMode, OfficialType } from "@/views/demo/enums";

export interface Menu {
    id?: number;
    zh_label: string;
    en_label: string;
    type:string
    officialType?: OfficialType
    gameMode?: GameMode
    children?: Menu[];
}