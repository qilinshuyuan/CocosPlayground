import { _decorator, AssetManager, assetManager, Component, director, Node, Prefab } from 'cc';
import { tgxUIAlert, tgxUIMgr, tgxUIWaiting } from './opentgx/tgx';
import { UIAlert } from './opentgx/easy_ui_framework/alert/UIAlert';
import { UILayerNames, UILayers } from './opentgx/easy_ui_framework/UILayers';
import { urlParse } from './opentgx/base/URLUtils';
const { ccclass, property } = _decorator;

const preloadRes = [
    { url: "playground", type: "bundle" },
    { url: "ui_alert/UI_Alert", type: "prefab", bundle: "playground" },
    { url: "ui_waiting/UI_Waiting", type: "prefab", bundle: "playground" },
];

let currentLoadingIndex = 0;

let args = urlParse();
let targetScene = args["s"];
let bundle = args["b"];
if(targetScene && bundle){
    preloadRes.push({
        url: bundle,
        type: "bundle"
    });
}

@ccclass('Start')
export class Start extends Component {
    @property(Prefab) canvasRoot: Prefab;
    @property(Node) progress:Node;
    start() {
        tgxUIMgr.inst.setup(this.canvasRoot, UILayers.NUM, UILayerNames);

        let fnLoadNextRes = () => {
            console.log(currentLoadingIndex);
            if(currentLoadingIndex >= preloadRes.length){
                this.onLoadComplete();
                return;
            }
            let item: { url: string, type: string, bundle?: string } = preloadRes[currentLoadingIndex];
            if(item.type == "bundle") {
                assetManager.loadBundle(item.url, (err, bundle:AssetManager.Bundle) => {
                    if(err){
                        console.log(err);
                        return;
                    }
                    console.log(item.url," loaded.")
                    currentLoadingIndex++
                    fnLoadNextRes();
                });
            }
            else if(item.type == "prefab") {
                assetManager.loadBundle(item.bundle,(err,bundle:AssetManager.Bundle)=>{
                    if(bundle){
                        bundle.load(item.url, Prefab, (err, prefab:Prefab) => {
                            currentLoadingIndex++
                            fnLoadNextRes();
                        })
                    }
                });
            }
            else if(item.type == "scene") {
                assetManager.loadBundle(item.bundle,(err,bundle:AssetManager.Bundle)=>{
                    if(bundle){
                        //bundle.preloadScene(item.url, (err, scene:Node) => {
                        //    currentLoadingIndex++
                        //    fnLoadNextRes();
                        //})
                    }
                });
            }
        }

        currentLoadingIndex = 0;
        fnLoadNextRes();
    }

    onLoadComplete(){
        if(targetScene){
            director.loadScene(targetScene);
        }
    }

    update(deltaTime: number) {
        director.getScene().globals.skybox.rotationAngle -= deltaTime * 5;
        this.progress.setScale(currentLoadingIndex / preloadRes.length,1,1);
    }
}