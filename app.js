let canvas = document.getElementById("renderCanvas");
var engine = null;
var scene = null;
var sceneToRender = null;
let loader = null;


let musicA;

var createDefaultEngine = function () { return new BABYLON.Engine(canvas, true, { preserveDrawingBuffer: true, stencil: true, disableWebGL2Support: false }); };
var createScene = function () {
    Ammo();
    BABYLON.SceneLoader.ShowLoadingScreen = false;
    engine.enableOfflineSupport = false;
    const phs = { mass: 0.3, restitution: 0.6, friction: 40 };

    var strr;
    let stoppedx;
    let file;
    let ximg;
    let xyz = 0
    let courseloc;


    let baseVOL;
    if (localStorage.getItem('sound') == 'true') baseVOL = 1;
    else baseVOL = 0;

    // Scene
    let scene = new BABYLON.Scene(engine);
    scene.clearColor = new BABYLON.Color3(0.7, 0.7, 0.7);
    scene.collisionsEnabled = true;
    //loadammo();

    //async function loadammo(){
    //await Ammo();
    scene.enablePhysics(new BABYLON.Vector3(0, -10, 0), new BABYLON.AmmoJSPlugin(false));
    // };

    let helper = scene.createDefaultEnvironment({ enableGroundShadow: true, skyboxSize: 100 });
    helper.setMainColor(new BABYLON.Color3(0.9, 0.9, 0.9));
    helper.ground.position.y = -1;

    let skybox = scene.getMeshByName("BackgroundSkybox");
    //skybox.scaling = new BABYLON.Vector3(10, 1, 10);
    skybox.isPickable = false;

    function gM(name) {
        let gmm = scene.getMeshByName(name);
        return gmm;
    }

    function gT(name) {
        let gts = scene.getMeshesByTags(name);
        return gts;
    }

    //quickly round up the vectors
    function rvec(vec) {
        let xx = (vec.x).toFixed(4);
        let xy = (vec.y).toFixed(4);
        let xz = (vec.z).toFixed(4);

        let vecr = { 'x': xx, 'y': xy, 'z': xz };
        return vecr
    }

    sessionStorage.setItem('plays', 0);

    const pH = new BABYLON.PhysicsHelper(scene);
    //arcCam();

    // Camera
    function arcCam() {
        const camera = new BABYLON.ArcRotateCamera("camera", 0, 1, 10, new BABYLON.Vector3(0, 0, 0), scene);
        camera.minZ = 0.03;
        camera.lowerBetaLimit = 0.4;
        camera.upperBetaLimit = 1.2;
        camera.wheelDeltaPercentage = 0.01;
        camera.checkCollisions = true;
        camera.collisionRadius = 1;
        camera.allowUpsideDown = false;
        camera.useAutoRotationBehavior = true;
        camera.idleRotationSpeed = 1;
        camera.idleRotationSpinupTime = 100;
        camera.idleRotationWaitTime = 10000;
        camera.ellipsoid = new BABYLON.Vector3(1, 1, 1);
        //camera.attachControl(canvas, true);
    }

    //function followCam(){
    //const camera = new BABYLON.FollowCamera("mainCam", new BABYLON.Vector3(0,0,0), scene, null);
    const camera = new BABYLON.ArcRotateCamera("mainCam", 0, 1, 10, new BABYLON.Vector3(0, 0, 0), scene, null);

    camera.radius = 15;
    camera.maxCameraSpeed = 20;
    camera.noRotationConstraint = false;
    camera.cameraAcceleration = 0.007;
    camera.lowerHeightOffsetLimit = 1;
    camera.upperHeightOffsetLimit = 20;
    camera.attachControl(canvas, true);
    camera.upperRadiusLimit = 20;
    camera.lowerRadiusLimit = 10;
    //}

    const snapcam = new BABYLON.ArcRotateCamera('snapcam', 0, 0.8, 10, new BABYLON.Vector3(0, 0, 0), scene);
    snapcam.useAutoRotationBehavior = true;
    var arbsc = snapcam.autoRotationBehavior;
    arbsc.idleRotationSpeed = 2;
    arbsc.idleRotationSpinupTime = 500;
    arbsc.idleRotationWaitTime = 0;

    scene.activeCamera = camera;

    //LIGHT
    /*
    const dlight = new BABYLON.DirectionalLight("Lightx", new BABYLON.Vector3(0, -1, 0), scene);
    light.specularPower=0.1;
    light.intensity=0.9;
    light.specular=new BABYLON.Color3(0.5,0.5,0.5);
    light.diffuse=new BABYLON.Color3(1,1,1);
    light.direction=new BABYLON.Vector3(1,0,1)
    light.position = new BABYLON.Vector3(0, 10, 0);
    */

    var elight = new BABYLON.DirectionalLight("Light1", new BABYLON.Vector3(1, -1, 1), scene);
    elight.diffuse = new BABYLON.Color3(1, 0.9, 0.8);
    elight.specular = new BABYLON.Color3(0.79, 1, 0.79);

    var elight2 = new BABYLON.DirectionalLight("Light2", new BABYLON.Vector3(-1, -1, -1), scene);
    elight2.diffuse = new BABYLON.Color3(0.9, 0.9, 0.9);
    elight2.specular = new BABYLON.Color3(1, 0.75, 0.66);

    var elight3 = new BABYLON.DirectionalLight("Light3", new BABYLON.Vector3(1, -1, -1), scene);
    elight3.diffuse = new BABYLON.Color3(0.9, 0.9, 0.9);
    elight3.specular = new BABYLON.Color3(1, 0.75, 0.66);
    elight3.intensity = 0.4;

    /*
    const light = new BABYLON.HemisphericLight("Lightx", new BABYLON.Vector3(1, 1, 0), scene);
    light.specularPower=0.3;
    light.intensity=0.9;
    light.specular=new BABYLON.Color3(0.3,0.3,0.2);
    light.diffuse=new BABYLON.Color3(1,1,1);
    */

    /*
    const light2 = new BABYLON.DirectionalLight("Lightx1", new BABYLON.Vector3(0, 1, 0), scene);
    //light2.specularPower=0.1;
    light2.intensity=0.8;
    light2.specular=new BABYLON.Color3(0.5,0.5,0.5);
    light2.diffuse=new BABYLON.Color3(1,1,1);
    light2.position = new BABYLON.Vector3(0, -1, 0);
    
    const light3 = new BABYLON.DirectionalLight("Lightx2", new BABYLON.Vector3(0, 0, 1), scene);
    //light3.specularPower=0.1;
    light3.intensity=0.9562;
    light3.specular=new BABYLON.Color3(0.5,0.5,0.5);
    light3.diffuse=new BABYLON.Color3(1,1,1);
    light3.position = new BABYLON.Vector3(0, 0, -1);
    
    const light4 = new BABYLON.DirectionalLight("Lightx3", new BABYLON.Vector3(0, 0, -1), scene);
    //light4.specularPower=0.1;
    light4.intensity=0.9562;
    light4.specular=new BABYLON.Color3(0.5,0.5,0.5);
    light4.diffuse=new BABYLON.Color3(1,1,1);
    light4.position = new BABYLON.Vector3(0, 0, 1);
    
    const light5 = new BABYLON.DirectionalLight("Lightx4", new BABYLON.Vector3(1, 0, 0), scene);
    //light5.specularPower=0.1;
    light5.intensity=0.9562;
    light5.specular=new BABYLON.Color3(0.5,0.5,0.5);
    light5.diffuse=new BABYLON.Color3(1,1,1);
    light5.position = new BABYLON.Vector3(-1, 0, 0);
    
    const light6 = new BABYLON.DirectionalLight("Lightx5", new BABYLON.Vector3(-1, 0, 0), scene);
    //light6.specularPower=0.1;
    light6.intensity=0.9562;
    light6.specular=new BABYLON.Color3(0.5,0.5,0.5);
    light6.diffuse=new BABYLON.Color3(1,1,1);
    light6.position = new BABYLON.Vector3(1, 0, 0);
    */
    function tpl() {
        var light = new BABYLON.DirectionalLight("keyL", new BABYLON.Vector3(1, 0, 0), scene)
    }

    var matt = new BABYLON.StandardMaterial("matt", scene);
    matt.diffuseColor = new BABYLON.Color3(0.2, 0.2, 0.2);

    var ballmat = new BABYLON.StandardMaterial("ballmat", scene);
    ballmat.specularColor = new BABYLON.Color3(.3, .3, .3);
    ballmat.specularPower = 1;
    ballmat.ambientColor = new BABYLON.Color3(.1, .1, .1);
    ballmat.diffuseColor = new BABYLON.Color3(.9, .9, .9);

    var altBallMat = new BABYLON.PBRMaterial("Plastic", scene);
    altBallMat.metallic = 0.1;
    altBallMat.roughness = 0.9;
    altBallMat.emissiveColor = new BABYLON.Color3(1, 1, 1);
    altBallMat.emissiveIntensity = 0.8;
    altBallMat.sheen.isEnabled = true;
    altBallMat.sheen.intensity = 0.8;
    altBallMat.reflectivityColor = new BABYLON.Color3(1, 1, 1);
    altBallMat.baseColor = new BABYLON.Color3(.98, .98, .98);

    var watermat = new BABYLON.StandardMaterial('water', scene);
    watermat.diffuseColor = new BABYLON.Color3(/*.3,.4,.9*/0.8, 0.8, 0.8);
    watermat.specularColor = new BABYLON.Color3(0, 0, 0);
    watermat.specularPower = 0.2;
    watermat.backfaceCulling = false;
    watermat.alpha = 1;

    var shadowmat = new BABYLON.StandardMaterial('shadow', scene);
    shadowmat.diffuseColor = new BABYLON.Color3(.1, .1, .1);
    shadowmat.specularColor = new BABYLON.Color3(0, 0, 0);
    shadowmat.specularPower = 0.05;
    shadowmat.alpha = 0.2;

    var water = new BABYLON.MeshBuilder.CreateBox('water', { size: 100 }, scene);
    water.scaling = new BABYLON.Vector3(10, .05, 10);
    water.position.y = 0;
    water.material = watermat;

    
    const shadowGenerator = new BABYLON.ShadowGenerator(1024, elight);

    const generateRandomString = (length = 10) => Math.random().toString(20).substr(2, length);
    const random_name = generateRandomString(200) + '.glb';


    let musicManager = new BABYLON.AssetsManager(scene);
    musicManager.useDefaultLoadingScreen = false;

    let assetsManager = new BABYLON.AssetsManager(scene);
    assetsManager.useDefaultLoadingScreen = false;

    assetsManager.autoHideLoadingUI = false;

    //load default course :)
    if (courseloc == undefined) { courseloc = 'https://golf3.onrender.com/boredApes.glb' }
    if (courseloc.indexOf('/') > -1) {
        var rooturl = courseloc.slice(0, courseloc.lastIndexOf('/'));
        var filename = courseloc.slice(courseloc.lastIndexOf('/') + 1);
        assetsManager.addMeshTask("NEWSCENE", "", rooturl, filename);
    }
    else {
        courseloc == cc;
        var filename = courseloc.slice(courseloc.lastIndexOf('/') + 1);
        assetsManager.addMeshTask("NEWSCENE", "", courseloc, filename);
    }


    /*
    //BALL TRACK
    var soundTask = musicManager.addBinaryFileTask(
        "bounce sound",
        "assets/sounds/bounce.wav"
        );
        //SCENE MUSIC... I think
        
        var TaskB = musicManager.addBinaryFileTask(
            "bounce sound",
            "assets/sounds/trackA.wav"
            );
            
            soundTask.onSuccess = function(task){
                ballhit = new BABYLON.Sound("bounce", task.data, scene, null, {spatialSound:true, autoplay:false});
                ballhit.attachToMesh(ball);
            }
            TaskB.onSuccess = function(task){
                musicA = new BABYLON.Sound("musicA", task.data, scene, null, {spatialSound:true, autoplay:true, loop:true});
                ballhit.attachToMesh(ball);
            }
            */

    assetsManager.onTaskSuccessObservable.add(function (task) {
        //TYPES OF BALL AVAILABLE FOR USER                
        if (putted == "Shadow") {
            let puttLight = new BABYLON.DirectionalLight("shadowmaker", new BABYLON.Vector3(0, -1, 0), scene);
            let shadower = new BABYLON.MeshBuilder.CreateSphere("shadower", { segments: 16, radius: 0.1 }, scene);
            puttLight.includedOnlyMeshes = [shadower];
            shadower.isVisible = false;
            shadower.isPickable = false;
        }

        for (var rt = 0; rt < task.loadedMeshes.length; rt++) {
            task.loadedMeshes[rt].parent = null;
            task.loadedMeshes[rt].position = task.loadedMeshes[rt].position
        }
        let startbbx = (gM("start").getBoundingInfo().boundingBox.extendSize.y * gM("start").scaling.y);
        console.log(startbbx);

        if (gM("start") == null || gM("end") == null || gM("course") == null) {
            //IF YOU DIDN'T LABEL A START OR A END FOR THE GOLF COURSE
            let ydw = showToast('No GAME... your import does not contain a start,end, or a course', 1, 5000, function () {
                ydw = showToast('<a href="https://google.com/learncourses">Wanna learn to make a basic course</a>', 1, 5000)
            });
            ydw.style.right = "auto";
            ydw.style.left = "10px";
            console.error("No GAME : your game has no start or finish marked, watch BASIC GOLF course modeling on <a src='https://'>https</a>");
        }
        else {
            ge("play").disabled = false;
            let bbx = gM("course").getBoundingInfo().boundingBox.maximumWorld.x;
            let bby = gM("course").getBoundingInfo().boundingBox.maximumWorld.y;
            let bbz = gM("course").getBoundingInfo().boundingBox.maximumWorld.z;

            xyz = 0;
            if (bbx > bbz) {
                var bbxz = bbx + (gM("course").scaling.x * 0)
            }
            else {
                var bbxz = bbz + (gM("course").scaling.z * 0)
            }

            //THE WATER IS RIGHT BELOW THE COURSE, ONCE THE BALL HITS THE MESH IT WILL RESET THE BALL... while the helper ground will show the shadow. this setup will increase performance
            water.physicsImpostor = new BABYLON.PhysicsImpostor(water, BABYLON.PhysicsImpostor.BoxImpostor, { restitution: 0, friction: 15, mass: 0 }, scene);
            water.position.y = (gM('course').getBoundingInfo().boundingBox.extendSize.y * -1) - 1;
            helper.ground.position.y = (gM('course').getBoundingInfo().boundingBox.extendSize.y * -1) - 1;

            //camera.radius = bbxz;
            //camera.lowerRadiusLimit = bbxz-(bbxz*0.25);
            //camera.upperRadiusLimit = bbxz+(bbxz*0.25);

            snapcam.radius = bbxz;
            snapcam.lowerRadiusLimit = bbxz - (bbxz * 0.25);
            snapcam.upperRadiusLimit = bbxz + (bbxz * 0.25);

            switch (gshape) {
                case null:
                    var ball = new BABYLON.MeshBuilder.CreateIcoSphere("ball", { radius: startbbx, subdivisions: 4, flat: true }, scene);
                    ball.physicsImpostor = new BABYLON.PhysicsImpostor(ball, BABYLON.PhysicsImpostor.SphereImpostor, phs, scene);
                    break;
                case "Box":
                    var ball = new BABYLON.MeshBuilder.CreateBox("ball", { size: (startbbx * 2) }, scene);
                    ball.physicsImpostor = new BABYLON.PhysicsImpostor(ball, BABYLON.PhysicsImpostor.BoxImpostor, phs, scene);
                    break;
                case "Cylinder":
                    var ball = new BABYLON.MeshBuilder.CreateCylinder("ball", { diameter: (startbbx * 2), tessalation: 3, height: 0.2 }, scene);
                    ball.physicsImpostor = new BABYLON.PhysicsImpostor(ball, BABYLON.PhysicsImpostor.CylinderImpostor, phs, scene);
                    break;
                case "Sphere":
                    var ball = new BABYLON.MeshBuilder.CreateIcoSphere("ball", { radius: (startbbx), subdivisions: 1, flat: true }, scene);
                    ball.physicsImpostor = new BABYLON.PhysicsImpostor(ball, BABYLON.PhysicsImpostor.SphereImpostor, phs, scene);
                    break;
            }

            let trail = new BABYLON.TrailMesh('trail', ball, scene, startbbx, 20, true);

            let trailM = new BABYLON.StandardMaterial('trailm', scene);
            trailM.diffuseColor = new BABYLON.Color3(0.8, 0.7, 0.7); //A PERFECT GRAY!
            trailM.alpha = 0.08; //SWEET IN THE MIDDLE

            ball.enableEdgesRendering(0.99);
            ball.edgesColor = new BABYLON.Color4(0.2, 0.2, 0.2, 0.5);
            ball.edgesWidth = 0.7;

            ball.material = ballmat;
            trail.material = trailM;
            ball.checkCollisions = true;

            ball.isPickable = false;

            camera.lockedTarget = ball;
            //scene.debugLayer.show();

            gM("start").isVisible = false;
            gM("end").isVisible = true;

            for (let ms = 0; ms < task.loadedMeshes.length; ms++) {
                setTimeout(function () {
                    //WILL DEFINATELY ATTEND TO THIS LATER!
                    let m = task.loadedMeshes[ms];
                    let mname = m.name.toLowerCase();

                    //ALL EXPLOSIVES WILL BE VISIBLE, and They give out a radial explosion
                    //The variable are as follows: radius(0-9), strength(0-9) and Countdown(0-9) eg explosive34 ... the origin equals the position of the explosive itself
                    //This will also include some normal variables... not realy important
                    if (mname.indexOf("explosive") > -1) {
                        {
                            //EXPLOSIVES with countdown
                            let iom = mname.indexOf("explosive");
                            let explosivex = m;
                            let origin = explosivex.position;
                            let radius = 2;
                            let strength = 3;
                            let cdx = 0;
                            if (mname.length > iom + 9) radius = Number(mname.slice(iom + 9, iom + 10));
                            if (mname.length > iom + 10) strength = Number(mname.slice(iom + 10, iom + 11)) * 0.1;
                            if (mname.length > iom + 11) cdx = Number(mname.slice(iom + 11, iom + 12)) * 0.1;

                            explosivex.physicsImpostor = new BABYLON.PhysicsImpostor(explosivex, BABYLON.PhysicsImpostor.MeshImpostor, { mass: 1, restitution: 0, friction: 0 }, scene);
                            explosivex.registerOnPhysicsCollide(ball, function (main, collided) {
                                explode(origin, strength, radius, cdx)
                            })
                        }
                    }

                    else if (mname.indexOf("glass") > -1) {
                        //The imported GLASS will be replaced by SPS or PCS with its corresponding shape - this one might be hard
                    }

                    else if (mname.indexOf("bouncer") > -1) {
                        {
                            let iom = mname.indexOf("bouncer");
                            let bouncerx = m;
                            let restitution = 3;
                            if (mname.length > iom + 7) restitution = Number(mname.slice(iom + 7, iom + 8)) * 0.1;
                            m.physicsImpostor = new BABYLON.PhysicsImpostor(bouncerx, BABYLON.PhysicsImpostor.MeshImpostor, { mass: 1, restitution: restitution, friction: 0 }, scene)
                        }
                    }

                    else if (mname.indexOf("custom") > -1) {
                        {
                            let iom = mname.indexOf("custom");
                            //Will be executed in the order of MASS, RESTITUTION, FRICTION --- MASS is required
                            let mass = Number(mname.slice(iom + 6, iom + 7)) * 0.1;
                            let restitution = 0;
                            let friction = 0.5;
                            if (mname.length > iom + 7) restitution = Number(mname.slice(iom + 7, iom + 8)) * 0.1
                            if (mname.length > iom + 8) friction = Number(mname.slice(iom + 8, iom + 9)) * 0.1
                            m.physicsImpostor = new BABYLON.PhysicsImpostor(bouncerx, BABYLON.PhysicsImpostor.MeshImpostor, { mass: mass, restitution: restitution, friction: friction }, scene)
                        }
                    }
                    else if (mname.indexOf("start") > -1) {
                        {
                            ball.physicsImpostor.disablePreStep = false;
                            //Starting point
                            let startpoint = gM("start").position;

                            ball.position = startpoint;
                            sessionStorage.setItem('checkpoint', JSON.stringify(rvec(startpoint)));

                            m.dispose();
                        }
                    }
                    else if (mname.indexOf("end") > -1) {
                        {
                            //Sets a new finish point
                            finishPoint = m;
                        }
                    }
                    else if (mname == "water") {
                        let water = m;
                    }
                    else if (mname == "course") {
                        {
                            let iom = mname.indexOf("course");
                            let coursex = m;
                            let restitution = 0;
                            let friction = 400;
                            coursex.isPickable = false;
                            if (mname.length > iom + 7) restitution = Number(mname.slice(iom + 7, iom + 8)) * 0.1
                            if (mname.length > iom + 8) friction = Number(mname.slice(iom + 8, iom + 9)) * 0.1
                            coursex.physicsImpostor = new BABYLON.PhysicsImpostor(coursex, BABYLON.PhysicsImpostor.MeshImpostor, { mass: 0, restitution: restitution, friction: friction }, scene);

                            if (gM('course').material.name == '__GLTFLoader._default') {
                                let newdefault = new BABYLON.StandardMaterial("newdefault", scene);
                                /*newdefault.specularColor = (.3,.3,.3);
                                newdefault.specularPower = 1;
                                newdefault.ambientColor = new BABYLON.Color3(0.9,0.1,0.1);
                                newdefault.diffuseColor=new BABYLON.Color3(1,1,1);*/

                                newdefault.specularColor = new BABYLON.Color3(.3, .3, .3);
                                newdefault.specularPower = 1;
                                newdefault.ambientColor = new BABYLON.Color3(.1, .1, .1);
                                newdefault.diffuseColor = new BABYLON.Color3(.9, .9, .9);

                                gM('course').material = newdefault;

                            }
                            else {/*load normal material*/ }

                            setTimeout(function () {
                                shba = gM('ball');
                                //SHADOWS
                                //shadowGenerator.getShadowMap().renderList.push(shba);
                                shadowGenerator.addShadowCaster(shba);
                                shadowGenerator.addShadowCaster(gM('course'));
                                //gM('course').receiveShadows = true;
                                console.log("shadow added");

                            }, 100
                            );

                            ball.physicsImpostor.disablePreStep = true;
                            ball.physicsImpostor.setLinearVelocity(new BABYLON.Vector3(0, 0, 0));

                            //CHECK IF BALL COLLIDES WITH PHYSICAL MATERIAL TO PLAY SOUND
                            ball.physicsImpostor.registerOnPhysicsCollide(coursex.physicsImpostor, function (main, collided) {
                                //console.log("collided");
                                let ioxd = BABYLON.Vector3.Distance(main.getLinearVelocity(), new BABYLON.Vector3.Zero());
                                //USE THE IMPULSE TO CALCULATE HOW LOUD THE SOUND WILL BE.
                                //max v is 1;
                                if (ioxd > 5) {
                                    //ballhit.setVolume(1*baseVOL);
                                    //ballhit.play();
                                }
                                else {
                                    //ballhit.setVolume((ioxd*5*baseVOL));
                                    //identifier... function for alerting the user of the ball hit... some sort of assurance when sound is disabled.
                                }
                            });

                        }
                    }
                    else if(mname == "kicks"){
                        sessionStorage.setItem('kicks', mname)
                    }
                    else if (mname == "deco") {
                        //DECO

                    }
                    else if (mname == "background") {
                        {
                            let mybackground = String(mname.slice(10));
                            if (mybackground.startsWith('#') == false) { mybackground = "#" + mybackground }
                            scene.clearColor = BABYLON.Color3.FromHexString(mybackground);
                            m.dispose();
                        }
                    }

                    if (m.isVisible == true) { }
                    let game_mat = scene.getMaterialByName("__GLTFLoader._default");
                    game_mat.emissiveColor = new BABYLON.Color3(.9, 0.45, 0.45);
                    game_mat.metallic = 0.02;
                    game_mat.roughness = 0.9;

                    m.position = m.position;
                    m.enableEdgesRendering(0.007);
                    m.edgesColor = new BABYLON.Color4(0.2, 0.2, 0.2, 0.5);
                    m.edgesWidth = 4;
                }, 10);
            }
        }



        document.getElementById('resetball').onclick = function () {
            let resetpos = JSON.parse(sessionStorage.getItem('checkpoint'));
            let bal = gM('ball');
            bal.physicsImpostor.setLinearVelocity(new BABYLON.Vector3.Zero());
            bal.physicsImpostor.setAngularVelocity(new BABYLON.Vector3.Zero());

            bal.position.x = resetpos.x;
            bal.position.y = resetpos.y;
            bal.position.z = resetpos.z;
            showToast('Ball reset', 1, 3000)
        }
        document.getElementById('fullscreen').onclick = function () {
            engine.switchFullscreen(true)
            showToast('fullscreen-ed', 1, 2000);
        }

        var pullmat = new BABYLON.StandardMaterial("null", scene);
        pullmat.alpha = 0;

        var inmat = new BABYLON.StandardMaterial("nullx", scene);
        inmat.diffuseColor = new BABYLON.Color3(1, 0, 0);

        var position_disk = new BABYLON.MeshBuilder.CreateDisc('disc_putt', { tessellation: 8, radius: startbbx * 5 }, scene);
        //position_disk.rotation.x = Math.PI/2;
        position_disk.enableEdgesRendering();
        position_disk.edgesWidth = 2 / startbbx;
        position_disk.edgesColor = new BABYLON.Color4(1, 1, 1, 1);
        //position_disk.isVisible=false;
        position_disk.material = shadowmat;

        var pulling_disk = new BABYLON.MeshBuilder.CreateDisc('holder', { tessellation: 8, radius: 100 }, scene);
        pulling_disk.material = pullmat;
        pulling_disk.rotation.x = Math.PI / 2;
        pulling_disk.position.z = -0.1;
        pulling_disk.position = ball.position;
        position_disk.parent = pulling_disk;

        if (putted == "Shadow") {
            shadower.parent = pulling_disk;
            shadower.material = pullmat;
        }

        function call4thaputt(action) {
            //check for selected puth type and assign the appropriate playing stuffs
            switch (ls.getItem('puttz')) {
                case "Classic": {
                    for (var x = 0; x < 5; x++) {
                        var putt = new BABYLON.MeshBuilder.CreateBox("putt" + x.toString(), { size: 0.07, flat: true, updatable: false }, scene);
                        putt.material = matt;
                        putt.isVisible = false;
                        putt.isPickable = false;
                        putt.parent = spect;
                        putt.scaling.x = 1.7;
                        putt.scaling.z = 1.7;
                        putt.scaling.y = 0.9;
                    }
                };
                case "Boxes": {
                    for (var x = 0; x < 5; x++) {
                        var putt = new BABYLON.MeshBuilder.CreateBox("putt" + x.toString(), { size: 0.07, flat: true, updatable: false }, scene);
                        putt.material = matt;
                        putt.isVisible = false;
                        putt.isPickable = false;
                        putt.parent = spect;
                        putt.scaling.x = 1.7;
                        putt.scaling.z = 1.7;
                        putt.scaling.y = 0.9;
                    }
                };
                case "Simple": {

                };
                    break;
            }
        }

        var inpointer = new BABYLON.Mesh.CreateBox("inpointer", 0.2, scene);
        inpointer.parent = pulling_disk;
        inpointer.isPickable = false;
        inpointer.material = inmat;
        inpointer.isVisible = false;

        var spect = new BABYLON.Mesh.CreateBox("boxx", 0.1, scene);
        spect.material = pullmat;
        spect.isPickable = false;
        spect.position = ball.position;

        if (em == "false") {
            for (var x = 0; x < 5; x++) {
                var putt = new BABYLON.MeshBuilder.CreateBox("putt" + x.toString(), { size: 0.07, flat: true, updatable: false }, scene);
                putt.material = matt;
                putt.isVisible = false;
                putt.isPickable = false;
                putt.parent = spect;
                putt.scaling.x = 1.7;
                putt.scaling.z = 1.7;
                putt.scaling.y = 0.9;
            }
        }
        else {

        }

        var actt;
        let pauses = [];
        let pausetime;

        {
            if (stoppedx == 1 && Parse.User()) {
                //start the time immediately
                const games = Parse.Object.extend('games');
                const current_game = new games();

                current_game.set("uniqueC", random_name);
                current_game.set("position", 0);
                current_game.set("won", false);
                current_game.set("pauses", pauses);
                current_game.save()
            }
            else if (stoppedx && !Parse.User()) {
                ls.setItem("Time", Date.now());
            }
        }

        ge("pauseb").onclick = function () {
            //I might need to read the time even when its paused
            const current_game = object.get('current_game');
            current_game.add("pauses", pauseT);
        }

        for (let y = 0; y < pauses.length; y++) {
            pausetime += pauses[y];
        }





        ball.physicsImpostor.setLinearVelocity(new BABYLON.Vector3(0, 0, 0));
        ball.physicsImpostor.physicsBody.linearDamping = 15;
        ball.physicsImpostor.physicsBody.angularDamping = 15;





        /*BABYLON.Tools.CreateScreenshot(engine, camera, {width:1920, height:1080}, function(img){
            console.log('screeenshot created');

        }, 'image/png', true);*/




        /****** SPECIAL SECTION ******/
        scene.registerBeforeRender(async function () {
            let bv = ball.physicsImpostor.getLinearVelocity();
            let t_v = BABYLON.Vector3.Distance(bv, BABYLON.Vector3.Zero());

            {
                if (ls.getItem('sound') == "false") {
                    BABYLON.Engine.audioEngine.setGlobalVolume(0)
                }
                else {
                    BABYLON.Engine.audioEngine.setGlobalVolume(1)
                }
            }

            
        let getkicks = parseInt(sessionStorage.getItem('kicks'));
        if(getkicks == 0 && ball.intersectsPoint(gM("end").position, true) == false && t_v < 0.05 && xyz == 0){
            //USER LOST
            ge("loseimage").style.display = "block";
            showToast('YOU LOST, BRO!', 2, 5000);
            ge("won").style.display = "block";
            //Calculate finish time
            const stt = parseInt(sessionStorage.getItem('start time'));
            const endtime = ((Date.now() - stt)/1000).toFixed(2);
            console.log(endtime);

            
            ge('wintime').innerHTML = 'Time :- '+endtime;
            xyz = 1
        }

            if (ball.intersectsPoint(gM("end").position, true) == true && xyz == 0) {
                showToast('WINNNNNNNN!', 2, 5000);
                //USER WIN
                //Calculate finish time
                const stt = parseInt(sessionStorage.getItem('start time'));
                const endtime = ((Date.now() - stt)/1000).toFixed(2);
                console.log(endtime)

                ge("won").style.display = "block";
                ge("winimage").style.display = "block";
                ge('wintime').innerHTML = 'Time :- '+endtime+' seconds';

                //GET AND SET DATA FOR WIN ON SERVER SIDE AND CLIENT SIDE
                let dB = JSON.parse(ls.getItem('dB'));
                if (dB.levels.findIndex(d => d.link == courseloc) == -1) { dB.levels.push({ link: courseloc, score: stoppedx, finishTime: finishTime }) }
                else {
                    dB.levels.find(d => d.link == courseloc) = { link: courseloc, score: stoppedx, finishTime: finishTime }
                }
                ls.setItem('dB', JSON.stringify(dB));
                xyz = 1;

                //ask if user wants to replay or go to menu to load a new course


                //Save to SERVER if user is logged in!
                if (Parse.User.Current()) {
                    const levels = Parse.Object.extend("record", dB);
                    const lve = new levels();
                    lve.save({ creator: creator, unique: id, time: ccx, strikes: getkicks }).then((levels) => {

                    },
                        (error) => {

                        }
                    );
                }
            }
            else {
                //NO WIN YET                                            

                function timeout(ms) {
                    return new Promise(resolve => setTimeout(resolve, ms))
                }

                /*

                ball.physicsImpostor.registerOnPhysicsCollide(gM('water').physicsImpostor, function(main, collided) {
                    //THE BALL WILL BE PUT IN THE PREVIOUS POSITION
                    resetBall();
                    ball.physicsImpostor.unregisterOnPhysicsCollide(gM('water').physicsImpostor, function(){});
                });
            	
*/

                //water.physicsImpostor.registerOnPhysicsCollide(ball.physicsImpostor, function(){console.log("hitt")});
                let newvelocity = ball.physicsImpostor.getLinearVelocity();

                scene.onBeforeRenderObservable.add(() => {

                })
                //console.log(checkPoint)
                const anlv = ball.physicsImpostor.getAngularVelocity();
                ball.physicsImpostor.setAngularVelocity(anlv.scale(0.93));

                //let this calc the difference in position of the ball.
                let lastpos = JSON.parse(sessionStorage.getItem('checkpoint'));

                if (ball.intersectsMesh(water, false)) {
                    //THE BALL WILL BE PUT IN THE PREVIOUS POSITION
                    setTimeout(
                        function () {
                            ball.physicsImpostor.setLinearVelocity(new BABYLON.Vector3.Zero());
                            ball.physicsImpostor.setAngularVelocity(new BABYLON.Vector3.Zero());

                            ball.position.x = lastpos.x;
                            ball.position.y = lastpos.y;
                            ball.position.z = lastpos.z;
                            showToast("Ball Revived", 2, 2000);
                            //PLAY minus 1 kinda sound

                        }, 2000
                    )
                }
                else if (t_v < 0.05 && ball.intersectsMesh(gM('course'), true)/* && actt==false*/) {
                    //ALLOW DRAG FUNCTION... THIS MAY NOT WORK
                    stoppedx = true;
                    sessionStorage.setItem('kicks', getkicks-1);

                    if (position_disk.isVisible == false || pulling_disk.isVisible == false) {

                        position_disk.isVisible = true;
                        pulling_disk.isVisible = true;
                        gM('inpointer').isVisible = true;

                        position_disk.dispose();
                        position_disk = new BABYLON.MeshBuilder.CreateDisc('disc_putt', { tessellation: 8, radius: startbbx * 5, sideOrientation: 2 }, scene);
                        position_disk.parent = pulling_disk;
                        position_disk.material = shadowmat;
                        position_disk.enableEdgesRendering();
                        position_disk.edgesWidth = 2 / startbbx;
                        position_disk.isPickable = false;
                        position_disk.edgesColor = new BABYLON.Color4(1, 1, 1, 1);
                        position_disk.rotation.z = Math.PI / 2;
                        for (var pn = 0; pn < 5; pn++) {
                            scene.getMeshByName("putt" + pn.toString()).isVisible = true;
                            //scene.getMeshByName("putt"+pn.toString()).position.z=0*(0.18*(pn+1));
                        }
                    }

                }
                else if (t_v > 0.1) {
                    stoppedx = false;
                    (camera.radius) + t_v;

                    pulling_disk.isVisible = false;
                    position_disk.isVisible = false;
                    gM('inpointer').isVisible = false;

                    for (var pn = 0; pn < 5; pn++) {
                        scene.getMeshByName("putt" + pn.toString()).isVisible = false;
                    }
                    //console.log('is movin'+t_v);
                }
            }

            pulling_disk.position = ball.position.add(new BABYLON.Vector3(0, -0.1, 0));
            spect.position = ball.position;
            if (putted == "Shadow") {
                shadower.position.y = ball.position.y;
            }
            castRay();

        });

        /*scene.onBeforeRenderObservable.add(() => {
            if (water.intersectsMesh(ball, false)) {
                console.log('collided with ground')
            }
        });*/

        //NORMALIZE PICKER POSITION.
        function mousemovef() {
            var pickResult = scene.pick(scene.pointerX, scene.pointerY);
            var distance = BABYLON.Vector3.Distance(pickResult.pickedPoint, pulling_disk.position);

            var diffX = pickResult.pickedPoint.x - pulling_disk.position.x;
            var diffY = pickResult.pickedPoint.z - pulling_disk.position.z;

            pulling_disk.rotation.y = Math.atan2(diffX, diffY);
            spect.rotation.y = Math.atan2(diffX, diffY);

            //console.log(diffX)
            if (pickResult.hit) {
                if (distance < 4) {

                    if (putted == "Classic") {
                        position_disk.isVisible = true;
                        position_disk.dispose();
                        position_disk = new BABYLON.MeshBuilder.CreateDisc('disc_putt', { tessellation: 8, radius: distance * 0.95, arc: distance / 2, sideOrientation: 2 }, scene);
                        position_disk.parent = pulling_disk;
                        position_disk.material = shadowmat;
                        position_disk.enableEdgesRendering();
                        position_disk.edgesWidth = 2 / startbbx;
                        position_disk.isPickable = false;
                        position_disk.edgesColor = new BABYLON.Color4(1, 1, 1, 1);
                        position_disk.rotation.z = Math.PI / 2;

                        for (var pn = 0; pn < 5; pn++) {
                            scene.getMeshByName("putt" + pn.toString()).isVisible = true;
                            scene.getMeshByName("putt" + pn.toString()).position.z = distance * (0.18 * (pn + 1));
                        }
                        //This can be used for the pull instead of spect mesh
                    }
                    else if (putted == "Boxes") {
                        for (var pn = 0; pn < 5; pn++) {
                            scene.getMeshByName("putt" + pn.toString()).isVisible = true;
                            scene.getMeshByName("putt" + pn.toString()).position.z = distance * (0.18 * (pn + 1));
                        }
                    }
                    else {
                        shadower.position.z = distance * 0.8;
                        shadower.scaling.scaleInPlace(1 + (distance * 0.5));
                    }
                    sessionStorage.setItem('pull', scene.getMeshByName("putt4").position.z);
                    //console.log(pickResult.pickedPoint);    
                }
                else {
                    //strr = new BABYLON.Vector3().divide(new BABYLON.Vector3(2,2,2)).negate();
                }
                //ball.position.normalize();
                pickResult.pickedPoint.subtract(ball.position);
                inpointer.setAbsolutePosition(pickResult.pickedPoint);
                //inpointer.position.y=distance;
                //all i have to do is set a limit
                let xtrr = inpointer.getAbsolutePosition();
                let pull = pickResult.pickedPoint.subtract(ball.position);

                strr = new BABYLON.Vector3.Clamp(ball.position.subtract(xtrr).multiply(new BABYLON.Vector3(1, 0, 1)), 0.01, 5);

                //console.log(strr); xtrr.multiply(new BABYLON.Vector3(0.9,0,0.9)).negate()
                //new BABYLON.Vector3(0,0,0).normalize();
                //strr = new BABYLON.Vector3.Clamp(pickResult.pickedPoint.divide(new BABYLON.Vector3(10,1,10)), new BABYLON.Vector3(-2, 0, -3), new BABYLON.Vector3(2,0,3)).negate();
            }
        }

        scene.onPointerDown = function () {
            if (scene.pick(scene.pointerX, scene.pointerY).hit == true) {
                if (BABYLON.Vector3.Distance(scene.pick(scene.pointerX, scene.pointerY).pickedPoint, ball.position) < 1) {
                    actt = true;
                }
            }
        }
        scene.onPointerUp = upolo;

        function upolo(t_v) {

            actt = false;
            var thx = scene.pick(scene.pointerX, scene.pointerY);
            var thxc = thx.hit;

            //stoppedx++;
            camera.attachControl(canvas, true);
            if (scene.getMeshByName("putt4").position.z > 1) {
                //set as new checkpoint as well :)
                let newpos = rvec(ball.position);
                sessionStorage.setItem('checkpoint', JSON.stringify(newpos));
                //APPLY IMPULSE ON THE BALL WHEN THE ePUTT IS BEING RELEASED WITH MORE OR EQUAL TO THE MINIMUM THRESHOLD!
                ball.applyImpulse(strr, ball.getAbsolutePosition());
                position_disk.dispose();
                scene.getMeshByName("inpointer").position = new BABYLON.Vector3(0, 0, 0);
            }
            else {
                //PULL THRESHOLD IS NOT REACHED
                if (thxc == true) {
                    //call4thaputt();
                    if (t_v) {
                        //make a pulling disk

                    }
                    position_disk.isVisible = true;
                    position_disk.dispose();
                    position_disk = new BABYLON.MeshBuilder.CreateDisc('disc_putt', { tessellation: 8, radius: startbbx * 5, sideOrientation: 2 }, scene);
                    position_disk.parent = pulling_disk;
                    position_disk.material = shadowmat;
                    position_disk.enableEdgesRendering();
                    position_disk.edgesWidth = 2 / startbbx;
                    position_disk.isPickable = false;
                    position_disk.edgesColor = new BABYLON.Color4(1, 1, 1, 1);
                    position_disk.rotation.z = Math.PI / 2;
                }
            }
            for (var pn = 0; pn < 5; pn++) {
                scene.getMeshByName("putt" + pn.toString()).position.z = 0;
                scene.getMeshByName("putt" + pn.toString()).isVisible = false;
            }

            if (putted == "Shadow") {
                shadower.isVisible = false;
            }
        }
        scene.onPointerMove = function () {
            var pickResultx = scene.pick(scene.pointerX, scene.pointerY);
            if (actt == true) {
                var distancex = BABYLON.Vector3.Distance(pickResultx.pickedPoint, pulling_disk.position);
                if (distancex < 30) setTimeout(function () { camera.detachControl(canvas); mousemovef() }, 0);
            }
            else { }
        }
        scene.setGravity = new BABYLON.Vector3(0, -9.8, 0);

        function vecToLocal(vector, mesh) {
            var m = mesh.getWorldMatrix();
            var v = BABYLON.Vector3.TransformCoordinates(vector, m);
            return v;
        }

        function castRay() {
            var origin = pulling_disk.position;

            var forward = new BABYLON.Vector3(0, 0, 1);
            forward = vecToLocal(forward, pulling_disk);

            var direction = forward.subtract(origin);
            direction = BABYLON.Vector3.Normalize(direction);

            var length = 100;

            var ray = new BABYLON.Ray(origin, direction, length);

            var hit = scene.pickWithRay(ray);

            if (hit.pickedMesh) {
                //hit.pickedMesh.scaling.y += 0.01;
            }
        }

    });

    assetsManager.onProgress = function (remaining, total, lastFinished) { }
    assetsManager.onTaskErrorObservable.add(function (task) {
        console.log('task failed', task.errorObject.message, task.errorObject.exception);
    });

    // Radial explosion
    function explode(origin, strength, radius, cdx) {
        setTimeout(function (origin, strength, radius) {
            let event = pH.applyRadialExplosionImpulse( // or .applyRadialExplosionForce
                origin,
                {
                    radius: radius,
                    strength: strength,
                    falloff: BABYLON.PhysicsRadialImpulseFalloff.Linear, // or BABYLON.PhysicsRadialImpulseFalloff.Constant
                }
            );

            // Debug
            let eventData = event.getData();
        }, cdx);
    }


    //LOADERS
    //CONTROLLING AN ENCLOSED CODE FROM THE OUTSIDE
    document.getElementById('large-importer').onchange = function (evt) {
        file = evt.target.files;
        //let fileI = new BABYLON.FilesInput(engine, null, scene);
        //const newGame = true;
        assetsManager.reset()

        //CHANGE THE ELEMENTS THERE
        var filename = file[0].name;
        console.log(filename);
        ge('large-importer').style.display = 'none';
        ge('replacer').innerHTML = filename;
        ge('replacer').style.display = 'block';
        //assetsManager.reset();

        var blob = new Blob([file[0]]);
        console.log(blob);

        BABYLON.FilesInput.FilesToLoad[filename.toLowerCase()] = blob;
        //const cou = URL.createObjectURL(file[0]);

        const newCOURSE = assetsManager.addMeshTask("NEWSCENE", "", 'file:', filename);

        newCOURSE.onSuccess = function (task) {
            console.log('mesh loaded');
            loader = showToast("", 3, 100000, function () { });
        }
        newCOURSE.onError = function (task) {
            console.log("tis a bust")
        }
        assetsManager.load();
        //ge("playb").disable()
    }

    document.getElementById("urlinput").onsubmit = ulrOpener;
    
    function ulrOpener(urlx) {
        let urldata;

        if(urldata = undefined) urldata = document.getElementById("inputz").value;
        else urldata = urlx;
        assetsManager.reset();
        assetsManager.addMeshTask("game", "", urldata);
        assetsManager.load();

        loader.innerHTML = "URL Loading";
    }

    assetsManager.onProgress = function (remaining, totalC) {
        let percentage = ((totalC - remaining) / totalC) * 100;
        loader.innerHTML = loader.innerHTML + "Loading..." + percentage.toString() + "%";
    }

    assetsManager.onFinish = function () {
        loader.innerHTML = "Capturing Preview";


        //FAST 10 secs SCREENSHOT FOR GOLF COURSE SHOWCASE... this will be useful when other users are looking for a particular course.
        if (scene.getMeshByName('course')) {
            console.log('course exists');
            let imgT = 0;
            let frames = [];
            let snapper = setInterval(function () {
                if (imgT < 10) {
                    console.log('rendering.....');

                    BABYLON.Tools.CreateScreenshot(engine, snapcam, 1600, function (gif) {
                        frames.push(gif);
                    });
                    imgT++
                }
                else {
                    clearInterval(snapper);
                    console.log(frames);
                    loader.innerHTML = "Loaded :)";
                    setTimeout(function () { loader.click() }, 3000)

                    
            //process the image and save the image with the course itself
            //ximg = processed gif
            gifshot.createGIF({
                images:frames,
                gifWidth: 800,
                interval: 0.5,
            }, function (obj) {
                if (!obj.error) {
                    let nim = obj.image;
                    console.log(nim);
                    const splitimg = nim.split('1')[1];
                    const thegif = new Parse.File(random_name+'.gif', {base64: nim}, 'image/gif');
                    thegif.save().then(function () {
                    ximg = thegif.url();



                            //STORE the file on user request
        showToast("Save Course&quest;", 3, 5000, function () {
            //maybe i should show a naming box
            if (!Parse.User.current()) {
                let ggv = showToast("You have to login first", 1, 3000, function () { ge('logger').click() });
                ggv.style.left = '0px';
            }
            else {
                //const myexport = btoa(JSON.stringify(BABYLON.SceneSerializer.SerializeMesh()));

                //const dFile = new Parse.File(random_name, {base64:myexport});
                const dFile = new Parse.File(random_name, file);
                let lll = showToast('Saving...', 3, 5000, function () { lll = showToast('Patience Maaaam...', 3, 10000) });
                dFile.save().then(function () {
                    lll.remove();
                    cc = dFile.url();

                    // Save file reference to Parse ------ this will be read to append courses
                    const fileInfo = new Parse.Object('Courses');
                    fileInfo.set('name', random_name+'.glb');
                    fileInfo.set('owner_name', Parse.User.current().get("username"));
                    //Will change it to server time later
                    fileInfo.set('date', Date.now());
                    fileInfo.set('thumbnail', ximg);
                    fileInfo.set('url', cc);

                    var ioj = showToast('Saved. Copy link?', 1, 1000, function () { let link = dFile.url(); navigator.clipboard.writeText(link) });
                    ioj.style.left = '0px';
                    ioj.style.top = '62px';

                    ls.setItem('current_course', cc)
                }, function (error) {
                    showToast("ERROR: Not Saved", 2, 3000);
                })
            }
        })
            })
                }
                else{alert('error capturing course');}
            });


                }

            }, 1000);

            //ALSO SAVE THE COURSE AS WELL

        }


    }
    assetsManager.onError = function () {

    }


    document.addEventListener("keydown", function (opk){
        let keyc = opk.keyCode;
        let keyn = opk.key;
        if (keyn == "control") {
            //i dont know wtf to use this for yet.

        }
        else if (keyn == "escape") {
            //a back button of some sort... but mainly for in-pause.
            if (ge("menu").style.display == false) pauseGame(1);
        }
    });

    //when the mouse is off page/document
    document.addEventListener('onmouseout', function () {

    })
    document.getElementById("captureb").onclick = function () {
        BABYLON.Tools.CreateScreenshot(engine, camera, { precision: 3 }, function (png) {
            console.log('screenshot taken - ' + png);
            const linkim = document.createElement('a');
            linkim.href = png;
            linkim.download = 'snapshotxyz';
            document.body.appendChild(linkim);
            linkim.click();
            document.body.removeChild(linkim);

            //store the image under 'pictures taken', which can be used for showcase or flaunting
            /*const simg = new Parse.File('screenshots', png);
            simg.save().then(function(){
                const screenshots = Parse.Object.extend("screenshots");
                screenshots.set("screenshot", simg.url());
                screenshots.save();
                let showimg = showToast(`<img width='200px' src='${simg.url()}'/>`, 1, 3000)
            })
            */
            // console.log(png)

        }, true)
    }
    document.getElementById('pauseb').onclick = pauseGame;

    //PAUSE THE GAME... LIKE A BOSS.
    function pauseGame(r) {
        ge("gameMenu").style.display = "block";
        //physics engine must slow down & the counter must do the same, or rather counter completely and ball completely
        scene.getPhysicsEngine().setTimeStep(1 / 5000);
        //I can make R the reason for pausing
        if (r == window.onfocus) { }
    }


    return scene;
}
window.initFunction = async function(){
    var asyncEngineCreation = async function () {
        try {
            return createDefaultEngine();
        } catch (e) {
            console.log("the available createEngine function failed. Creating the default engine instead");
            return createDefaultEngine();
        }
    }

    window.engine = await asyncEngineCreation();
    BABYLON.Effect.ShadersStore["shadowsFragmentFunctions"] = "precision highp sampler2DShadow;\n" + BABYLON.Effect.ShadersStore["shadowsFragmentFunctions"];
    console.log('windows innit')
    if (!engine) throw 'engine should not be null.';
    window.scene = createScene();
    BABYLON.Effect.ShadersStore["shadowsFragmentFunctions"] = "precision highp sampler2DShadow;\n" + BABYLON.Effect.ShadersStore["shadowsFragmentFunctions"];
}
initFunction().then(() => {
    sceneToRender = scene
    engine.hideLoadingUI();
    engine.runRenderLoop(function () {
        if (sceneToRender && sceneToRender.activeCamera) {
            sceneToRender.render();
        }
    });
});
// Resize
window.addEventListener("resize", function () {
    ge('pp_input').style.height = (Number(ge('pp?').clientHeight) - 20).toString() + "px";
    engine.resize();
});

function loadFinished() {

}