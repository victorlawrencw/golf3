let canvas = document.getElementById("renderCanvas");
let engine = null;
let scene = null;
let sceneToRender = null;
let loader = null;

let musicA;

let createDefaultEngine = function(){ return new BABYLON.Engine(canvas, true, { preserveDrawingBuffer: true, stencil: true,  disableWebGL2Support: false}); };
let createScene = function(){
    Ammo();
    BABYLON.SceneLoader.ShowLoadingScreen = false;
    engine.enableOfflineSupport = false;

    //code inside here.
    //first we read the date=a of the user to make sure hes logged in, then we sync his position to the start point; each player would have a different start point
    //This will need more syncing to the db than anythng else

    return scene;
}
window.initFunction = async function() {
    var asyncEngineCreation = async function() {
        try {
            return createDefaultEngine();
        } catch(e) {
            console.log("the available createEngine function failed. Creating the default engine instead");
            return createDefaultEngine();
        }
    }
    
    window.engine = await asyncEngineCreation();
    if (!engine) throw 'engine should not be null.';
    window.scene = createScene()
}
    initFunction().then(() => {sceneToRender = scene    
        engine.hideLoadingUI();    
        engine.runRenderLoop(function () {
            if (sceneToRender && sceneToRender.activeCamera) {
                sceneToRender.render();
            }
        });
    });
    // Resize
    window.addEventListener("resize", function () {
        engine.resize();
    });

function Ammo() {
    throw new Error("Function not implemented.");
}
