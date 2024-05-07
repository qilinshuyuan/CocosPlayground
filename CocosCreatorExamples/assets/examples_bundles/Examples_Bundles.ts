import { _decorator, AssetManager, assetManager, Component, director, instantiate, Node, Prefab } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Examples_Bundles')
export class Examples_Bundles extends Component {
    start() {

    }

    update(deltaTime: number) {
        
    }

    onCreatedFromBundle(){
        assetManager.loadBundle("examples_res",(err,bundle:AssetManager.Bundle)=>{
            if(bundle){
                bundle.load("Node",Prefab, (err,prefab:Prefab)  =>{
                    if(prefab){
                        const node = instantiate(prefab);
                        let side = 3;
                        let x = Math.random() * side * 2 - side;
                        let y = 1;
                        let z = Math.random() * side * 2 - side;
                        node.setPosition(x,y,z);
                        director.getScene().addChild(node);
                    }
                });
            }
        });
    }
}

