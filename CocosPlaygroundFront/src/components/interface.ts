import type { GameMode, OfficialType } from "@/views/demo/enums";


export interface Menu {
    typeLabel?: string;
    type: string;
    children: Menu[];

    officialType: OfficialType;
    gameMode: GameMode;
    id: string;
    label?: string;
}

