import { _decorator, AssetManager, assetManager, Component, director, Node, Prefab } from 'cc';
import { tgxUIAlert, tgxUIMgr, tgxUIWaiting } from './opentgx/tgx';
import { UILayerNames, UILayers } from './opentgx/easy_ui_framework/UILayers';
import { urlParse } from './opentgx/base/URLUtils';
import { SafeJSON } from './opentgx/base/SafeJSON';
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
if (targetScene && bundle) {
    preloadRes.push({
        url: bundle,
        type: "bundle"
    });
}


//let msg = JSON.stringify({message:"change_scene", scene:"scene_name", bundle:"bundle_name"});
//iframe.contentWindow.postMessage(msg, "*");

window.addEventListener("message", (event) => {
    if (typeof (event.data) == "string") {
        let msg = SafeJSON.parse(event.data);
        if (msg.message == "change_scene") {
            let scene = msg.scene;
            let bundle = msg.bundle;
            tgxUIWaiting.show("Loading");
            assetManager.loadBundle(bundle, (err, bundle: AssetManager.Bundle) => {
                if (bundle) {
                    tgxUIWaiting.hide();
                    director.loadScene(scene);
                }
            });
        }
    }
}, false);

@ccclass('Start')
export class Start extends Component {
    @property(Prefab) canvasRoot: Prefab;
    @property(Node) progress: Node;
    start() {
        tgxUIMgr.inst.setup(this.canvasRoot, UILayers.NUM, UILayerNames);

        let fnLoadNextRes = () => {
            console.log(currentLoadingIndex);
            if (currentLoadingIndex >= preloadRes.length) {
                this.onLoadComplete();
                return;
            }
            let item: { url: string, type: string, bundle?: string } = preloadRes[currentLoadingIndex];
            if (item.type == "bundle") {
                assetManager.loadBundle(item.url, (err, bundle: AssetManager.Bundle) => {
                    if (err) {
                        console.log(err);
                        return;
                    }
                    console.log(item.url, " loaded.")
                    currentLoadingIndex++
                    fnLoadNextRes();
                });
            }
            else if (item.type == "prefab") {
                assetManager.loadBundle(item.bundle, (err, bundle: AssetManager.Bundle) => {
                    if (bundle) {
                        bundle.load(item.url, Prefab, (err, prefab: Prefab) => {
                            currentLoadingIndex++
                            fnLoadNextRes();
                        })
                    }
                });
            }
            else if (item.type == "scene") {
                assetManager.loadBundle(item.bundle, (err, bundle: AssetManager.Bundle) => {
                    if (bundle) {
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

    onLoadComplete() {
        if (targetScene) {
            director.loadScene(targetScene);
        }
    }

    update(deltaTime: number) {
        director.getScene().globals.skybox.rotationAngle -= deltaTime * 5;
        this.progress.setScale(currentLoadingIndex / preloadRes.length, 1, 1);
    }
}