import type { GameMode, OfficialType } from "@/views/demo/enums";


export interface Menu {
    type: string;
    children: Menu[];

    officialType: OfficialType;
    gameMode: GameMode;
    id: string;
    label?: string;
}

