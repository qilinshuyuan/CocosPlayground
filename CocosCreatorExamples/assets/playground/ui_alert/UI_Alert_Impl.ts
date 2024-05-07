import { UILayers } from "../../opentgx/easy_ui_framework/UILayers";
import { tgx_class, tgxUIAlert, tgxLayout_UIAlert } from "../../opentgx/tgx";


@tgx_class("playground",tgxUIAlert)
export class UIAlert_Impl extends tgxUIAlert {
    constructor() {
        super('ui_alert/UI_Alert', UILayers.ALERT, tgxLayout_UIAlert);
    }
}