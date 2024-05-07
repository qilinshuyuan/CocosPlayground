import { UILayers } from "../../opentgx/easy_ui_framework/UILayers";
import { tgx_class, tgxUIWaiting, tgxLayout_UIWaiting } from "../../opentgx/tgx";


@tgx_class("playground",tgxUIWaiting)
export class UIWaiting_Impl extends tgxUIWaiting{
    constructor(){
        super('ui_waiting/UI_Waiting',UILayers.LOADING, tgxLayout_UIWaiting);
    }
}