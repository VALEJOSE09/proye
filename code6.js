gdjs.MenuPPalCode = {};
gdjs.MenuPPalCode.localVariables = [];
gdjs.MenuPPalCode.idToCallbackMap = new Map();
gdjs.MenuPPalCode.GDSmallBlueButtonObjects1= [];
gdjs.MenuPPalCode.GDSmallBlueButtonObjects2= [];
gdjs.MenuPPalCode.GDCat_95954Objects1= [];
gdjs.MenuPPalCode.GDCat_95954Objects2= [];
gdjs.MenuPPalCode.GDNewTiledSprite2Objects1= [];
gdjs.MenuPPalCode.GDNewTiledSprite2Objects2= [];
gdjs.MenuPPalCode.GDchangreObjects1= [];
gdjs.MenuPPalCode.GDchangreObjects2= [];
gdjs.MenuPPalCode.GDizquierdaObjects1= [];
gdjs.MenuPPalCode.GDizquierdaObjects2= [];
gdjs.MenuPPalCode.GDderechaObjects1= [];
gdjs.MenuPPalCode.GDderechaObjects2= [];
gdjs.MenuPPalCode.GDsangreObjects1= [];
gdjs.MenuPPalCode.GDsangreObjects2= [];
gdjs.MenuPPalCode.GDabajoObjects1= [];
gdjs.MenuPPalCode.GDabajoObjects2= [];
gdjs.MenuPPalCode.GDtxt_9595monedasObjects1= [];
gdjs.MenuPPalCode.GDtxt_9595monedasObjects2= [];
gdjs.MenuPPalCode.GDGold_9595CoinObjects1= [];
gdjs.MenuPPalCode.GDGold_9595CoinObjects2= [];
gdjs.MenuPPalCode.GDtxt_9595vidasObjects1= [];
gdjs.MenuPPalCode.GDtxt_9595vidasObjects2= [];
gdjs.MenuPPalCode.GDMeat_9595RawObjects1= [];
gdjs.MenuPPalCode.GDMeat_9595RawObjects2= [];
gdjs.MenuPPalCode.GDNewTiledSprite7Objects1= [];
gdjs.MenuPPalCode.GDNewTiledSprite7Objects2= [];
gdjs.MenuPPalCode.GDTropical_9595FishObjects1= [];
gdjs.MenuPPalCode.GDTropical_9595FishObjects2= [];
gdjs.MenuPPalCode.GDbombObjects1= [];
gdjs.MenuPPalCode.GDbombObjects2= [];


gdjs.MenuPPalCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("SmallBlueButton"), gdjs.MenuPPalCode.GDSmallBlueButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuPPalCode.GDSmallBlueButtonObjects1.length;i<l;++i) {
    if ( gdjs.MenuPPalCode.GDSmallBlueButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.MenuPPalCode.GDSmallBlueButtonObjects1[k] = gdjs.MenuPPalCode.GDSmallBlueButtonObjects1[i];
        ++k;
    }
}
gdjs.MenuPPalCode.GDSmallBlueButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Escena 1", true);
}
}

}


};

gdjs.MenuPPalCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuPPalCode.GDSmallBlueButtonObjects1.length = 0;
gdjs.MenuPPalCode.GDSmallBlueButtonObjects2.length = 0;
gdjs.MenuPPalCode.GDCat_95954Objects1.length = 0;
gdjs.MenuPPalCode.GDCat_95954Objects2.length = 0;
gdjs.MenuPPalCode.GDNewTiledSprite2Objects1.length = 0;
gdjs.MenuPPalCode.GDNewTiledSprite2Objects2.length = 0;
gdjs.MenuPPalCode.GDchangreObjects1.length = 0;
gdjs.MenuPPalCode.GDchangreObjects2.length = 0;
gdjs.MenuPPalCode.GDizquierdaObjects1.length = 0;
gdjs.MenuPPalCode.GDizquierdaObjects2.length = 0;
gdjs.MenuPPalCode.GDderechaObjects1.length = 0;
gdjs.MenuPPalCode.GDderechaObjects2.length = 0;
gdjs.MenuPPalCode.GDsangreObjects1.length = 0;
gdjs.MenuPPalCode.GDsangreObjects2.length = 0;
gdjs.MenuPPalCode.GDabajoObjects1.length = 0;
gdjs.MenuPPalCode.GDabajoObjects2.length = 0;
gdjs.MenuPPalCode.GDtxt_9595monedasObjects1.length = 0;
gdjs.MenuPPalCode.GDtxt_9595monedasObjects2.length = 0;
gdjs.MenuPPalCode.GDGold_9595CoinObjects1.length = 0;
gdjs.MenuPPalCode.GDGold_9595CoinObjects2.length = 0;
gdjs.MenuPPalCode.GDtxt_9595vidasObjects1.length = 0;
gdjs.MenuPPalCode.GDtxt_9595vidasObjects2.length = 0;
gdjs.MenuPPalCode.GDMeat_9595RawObjects1.length = 0;
gdjs.MenuPPalCode.GDMeat_9595RawObjects2.length = 0;
gdjs.MenuPPalCode.GDNewTiledSprite7Objects1.length = 0;
gdjs.MenuPPalCode.GDNewTiledSprite7Objects2.length = 0;
gdjs.MenuPPalCode.GDTropical_9595FishObjects1.length = 0;
gdjs.MenuPPalCode.GDTropical_9595FishObjects2.length = 0;
gdjs.MenuPPalCode.GDbombObjects1.length = 0;
gdjs.MenuPPalCode.GDbombObjects2.length = 0;

gdjs.MenuPPalCode.eventsList0(runtimeScene);
gdjs.MenuPPalCode.GDSmallBlueButtonObjects1.length = 0;
gdjs.MenuPPalCode.GDSmallBlueButtonObjects2.length = 0;
gdjs.MenuPPalCode.GDCat_95954Objects1.length = 0;
gdjs.MenuPPalCode.GDCat_95954Objects2.length = 0;
gdjs.MenuPPalCode.GDNewTiledSprite2Objects1.length = 0;
gdjs.MenuPPalCode.GDNewTiledSprite2Objects2.length = 0;
gdjs.MenuPPalCode.GDchangreObjects1.length = 0;
gdjs.MenuPPalCode.GDchangreObjects2.length = 0;
gdjs.MenuPPalCode.GDizquierdaObjects1.length = 0;
gdjs.MenuPPalCode.GDizquierdaObjects2.length = 0;
gdjs.MenuPPalCode.GDderechaObjects1.length = 0;
gdjs.MenuPPalCode.GDderechaObjects2.length = 0;
gdjs.MenuPPalCode.GDsangreObjects1.length = 0;
gdjs.MenuPPalCode.GDsangreObjects2.length = 0;
gdjs.MenuPPalCode.GDabajoObjects1.length = 0;
gdjs.MenuPPalCode.GDabajoObjects2.length = 0;
gdjs.MenuPPalCode.GDtxt_9595monedasObjects1.length = 0;
gdjs.MenuPPalCode.GDtxt_9595monedasObjects2.length = 0;
gdjs.MenuPPalCode.GDGold_9595CoinObjects1.length = 0;
gdjs.MenuPPalCode.GDGold_9595CoinObjects2.length = 0;
gdjs.MenuPPalCode.GDtxt_9595vidasObjects1.length = 0;
gdjs.MenuPPalCode.GDtxt_9595vidasObjects2.length = 0;
gdjs.MenuPPalCode.GDMeat_9595RawObjects1.length = 0;
gdjs.MenuPPalCode.GDMeat_9595RawObjects2.length = 0;
gdjs.MenuPPalCode.GDNewTiledSprite7Objects1.length = 0;
gdjs.MenuPPalCode.GDNewTiledSprite7Objects2.length = 0;
gdjs.MenuPPalCode.GDTropical_9595FishObjects1.length = 0;
gdjs.MenuPPalCode.GDTropical_9595FishObjects2.length = 0;
gdjs.MenuPPalCode.GDbombObjects1.length = 0;
gdjs.MenuPPalCode.GDbombObjects2.length = 0;


return;

}

gdjs['MenuPPalCode'] = gdjs.MenuPPalCode;
