gdjs.GameOverCode = {};
gdjs.GameOverCode.localVariables = [];
gdjs.GameOverCode.idToCallbackMap = new Map();
gdjs.GameOverCode.GDNewTextInputObjects1= [];
gdjs.GameOverCode.GDNewTextInputObjects2= [];
gdjs.GameOverCode.GDSmallBlueButtonObjects1= [];
gdjs.GameOverCode.GDSmallBlueButtonObjects2= [];
gdjs.GameOverCode.GDCat_95954Objects1= [];
gdjs.GameOverCode.GDCat_95954Objects2= [];
gdjs.GameOverCode.GDNewTiledSprite2Objects1= [];
gdjs.GameOverCode.GDNewTiledSprite2Objects2= [];
gdjs.GameOverCode.GDchangreObjects1= [];
gdjs.GameOverCode.GDchangreObjects2= [];
gdjs.GameOverCode.GDizquierdaObjects1= [];
gdjs.GameOverCode.GDizquierdaObjects2= [];
gdjs.GameOverCode.GDderechaObjects1= [];
gdjs.GameOverCode.GDderechaObjects2= [];
gdjs.GameOverCode.GDsangreObjects1= [];
gdjs.GameOverCode.GDsangreObjects2= [];
gdjs.GameOverCode.GDabajoObjects1= [];
gdjs.GameOverCode.GDabajoObjects2= [];
gdjs.GameOverCode.GDtxt_9595monedasObjects1= [];
gdjs.GameOverCode.GDtxt_9595monedasObjects2= [];
gdjs.GameOverCode.GDGold_9595CoinObjects1= [];
gdjs.GameOverCode.GDGold_9595CoinObjects2= [];
gdjs.GameOverCode.GDtxt_9595vidasObjects1= [];
gdjs.GameOverCode.GDtxt_9595vidasObjects2= [];
gdjs.GameOverCode.GDMeat_9595RawObjects1= [];
gdjs.GameOverCode.GDMeat_9595RawObjects2= [];
gdjs.GameOverCode.GDNewTiledSprite7Objects1= [];
gdjs.GameOverCode.GDNewTiledSprite7Objects2= [];
gdjs.GameOverCode.GDTropical_9595FishObjects1= [];
gdjs.GameOverCode.GDTropical_9595FishObjects2= [];
gdjs.GameOverCode.GDbombObjects1= [];
gdjs.GameOverCode.GDbombObjects2= [];


gdjs.GameOverCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("SmallBlueButton"), gdjs.GameOverCode.GDSmallBlueButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameOverCode.GDSmallBlueButtonObjects1.length;i<l;++i) {
    if ( gdjs.GameOverCode.GDSmallBlueButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameOverCode.GDSmallBlueButtonObjects1[k] = gdjs.GameOverCode.GDSmallBlueButtonObjects1[i];
        ++k;
    }
}
gdjs.GameOverCode.GDSmallBlueButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MenuPPal", false);
}
}

}


};

gdjs.GameOverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameOverCode.GDNewTextInputObjects1.length = 0;
gdjs.GameOverCode.GDNewTextInputObjects2.length = 0;
gdjs.GameOverCode.GDSmallBlueButtonObjects1.length = 0;
gdjs.GameOverCode.GDSmallBlueButtonObjects2.length = 0;
gdjs.GameOverCode.GDCat_95954Objects1.length = 0;
gdjs.GameOverCode.GDCat_95954Objects2.length = 0;
gdjs.GameOverCode.GDNewTiledSprite2Objects1.length = 0;
gdjs.GameOverCode.GDNewTiledSprite2Objects2.length = 0;
gdjs.GameOverCode.GDchangreObjects1.length = 0;
gdjs.GameOverCode.GDchangreObjects2.length = 0;
gdjs.GameOverCode.GDizquierdaObjects1.length = 0;
gdjs.GameOverCode.GDizquierdaObjects2.length = 0;
gdjs.GameOverCode.GDderechaObjects1.length = 0;
gdjs.GameOverCode.GDderechaObjects2.length = 0;
gdjs.GameOverCode.GDsangreObjects1.length = 0;
gdjs.GameOverCode.GDsangreObjects2.length = 0;
gdjs.GameOverCode.GDabajoObjects1.length = 0;
gdjs.GameOverCode.GDabajoObjects2.length = 0;
gdjs.GameOverCode.GDtxt_9595monedasObjects1.length = 0;
gdjs.GameOverCode.GDtxt_9595monedasObjects2.length = 0;
gdjs.GameOverCode.GDGold_9595CoinObjects1.length = 0;
gdjs.GameOverCode.GDGold_9595CoinObjects2.length = 0;
gdjs.GameOverCode.GDtxt_9595vidasObjects1.length = 0;
gdjs.GameOverCode.GDtxt_9595vidasObjects2.length = 0;
gdjs.GameOverCode.GDMeat_9595RawObjects1.length = 0;
gdjs.GameOverCode.GDMeat_9595RawObjects2.length = 0;
gdjs.GameOverCode.GDNewTiledSprite7Objects1.length = 0;
gdjs.GameOverCode.GDNewTiledSprite7Objects2.length = 0;
gdjs.GameOverCode.GDTropical_9595FishObjects1.length = 0;
gdjs.GameOverCode.GDTropical_9595FishObjects2.length = 0;
gdjs.GameOverCode.GDbombObjects1.length = 0;
gdjs.GameOverCode.GDbombObjects2.length = 0;

gdjs.GameOverCode.eventsList0(runtimeScene);
gdjs.GameOverCode.GDNewTextInputObjects1.length = 0;
gdjs.GameOverCode.GDNewTextInputObjects2.length = 0;
gdjs.GameOverCode.GDSmallBlueButtonObjects1.length = 0;
gdjs.GameOverCode.GDSmallBlueButtonObjects2.length = 0;
gdjs.GameOverCode.GDCat_95954Objects1.length = 0;
gdjs.GameOverCode.GDCat_95954Objects2.length = 0;
gdjs.GameOverCode.GDNewTiledSprite2Objects1.length = 0;
gdjs.GameOverCode.GDNewTiledSprite2Objects2.length = 0;
gdjs.GameOverCode.GDchangreObjects1.length = 0;
gdjs.GameOverCode.GDchangreObjects2.length = 0;
gdjs.GameOverCode.GDizquierdaObjects1.length = 0;
gdjs.GameOverCode.GDizquierdaObjects2.length = 0;
gdjs.GameOverCode.GDderechaObjects1.length = 0;
gdjs.GameOverCode.GDderechaObjects2.length = 0;
gdjs.GameOverCode.GDsangreObjects1.length = 0;
gdjs.GameOverCode.GDsangreObjects2.length = 0;
gdjs.GameOverCode.GDabajoObjects1.length = 0;
gdjs.GameOverCode.GDabajoObjects2.length = 0;
gdjs.GameOverCode.GDtxt_9595monedasObjects1.length = 0;
gdjs.GameOverCode.GDtxt_9595monedasObjects2.length = 0;
gdjs.GameOverCode.GDGold_9595CoinObjects1.length = 0;
gdjs.GameOverCode.GDGold_9595CoinObjects2.length = 0;
gdjs.GameOverCode.GDtxt_9595vidasObjects1.length = 0;
gdjs.GameOverCode.GDtxt_9595vidasObjects2.length = 0;
gdjs.GameOverCode.GDMeat_9595RawObjects1.length = 0;
gdjs.GameOverCode.GDMeat_9595RawObjects2.length = 0;
gdjs.GameOverCode.GDNewTiledSprite7Objects1.length = 0;
gdjs.GameOverCode.GDNewTiledSprite7Objects2.length = 0;
gdjs.GameOverCode.GDTropical_9595FishObjects1.length = 0;
gdjs.GameOverCode.GDTropical_9595FishObjects2.length = 0;
gdjs.GameOverCode.GDbombObjects1.length = 0;
gdjs.GameOverCode.GDbombObjects2.length = 0;


return;

}

gdjs['GameOverCode'] = gdjs.GameOverCode;
