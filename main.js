/*
 * Color Switch for Light/Dark Themes in Adobe XD
 *
 * Made by Zentyk @Orthocana
 */

const {Rectangle, Text, Color} = require("scenegraph");
const appLight = new Color("White");
const appBlack = new Color("Black");

function SwitchLight(selection, documentRoot){
    //Select all the Buttons
    selection.items.forEach(function (childNode , i){
        if(childNode.name === "btn"){
            childNode.children.forEach(function (childNode, i) {
                //Get Btn Background Color
                if(childNode instanceof Rectangle ){
                    if(childNode.name === "btn_bg"){
                        console.log("This is a Button Background!");
                        if(childNode.fill.r === appBlack.r & childNode.fill.g === appBlack.g & childNode.fill.b === appBlack.b){       
                            console.log("Button is Black");
                            childNode.fill = appLight;
                            return;
                        }
                        if(childNode.fill.r === appLight.r & childNode.fill.g === appLight.g & childNode.fill.b === appLight.b){
                            console.log("Button is White");
                            childNode.fill = appBlack;
                            return;
                        }
                    }
                }
        
                //Set Text Background Color
                if (childNode instanceof Text) {
                    if(childNode.name==="btn_txt"){
                        console.log("This is a Button Text!");
                        if(childNode.fill.r === appBlack.r & childNode.fill.g === appBlack.g & childNode.fill.b === appBlack.b){       
                            console.log("Text is Black");
                            childNode.fill = appLight;
                            return;
                        }
                        if(childNode.fill.r === appLight.r & childNode.fill.g === appLight.g & childNode.fill.b === appLight.b){
                            console.log("Text is White");
                            childNode.fill = appBlack;
                            return;
                        }
                    }
                }
            });   
        }
        if(childNode.name === "appBg"){
            if(childNode instanceof Rectangle ){              
                if(childNode.fill.r === appBlack.r & childNode.fill.g === appBlack.g & childNode.fill.b === appBlack.b){       
                    childNode.fill = appLight;
                    return;
                }
                if(childNode.fill.r === appLight.r & childNode.fill.g === appLight.g & childNode.fill.b === appLight.b){
                    childNode.fill = appBlack;
                    return;
                }
            }
        }
    });
}

module.exports = {
    commands: {
        switchlight: SwitchLight
    }
};