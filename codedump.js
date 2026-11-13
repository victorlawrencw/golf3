/**THIS IS MY CODE DUMP OR CODE RECYCLING BIN */
//DO NOT CLOSE THIS WITHOUT SAVING IT!
var database = {levels:[]}

database.levels.push({fold:"bold"});

console.log(database.levels[0].fold);

var string = "custom67";
switch(true){
case string.length>7 : alert(Number(string.slice(7, 8))); break;
default: alert(100)
}

toasty.style.minWidth='80px';
toasty.style.lineHeight='50px';
toasty.style.height='50px';
toasty.style.display='block';
toasty.style.verticalAlign='middle';
toasty.style.transition='opacity 0.5s linear, font-size 0.1s linear';
toasty.style.textAlign='center';
toasty.style.position='fixed';
toasty.style.zIndex= '10000';
toasty.style.right='10px';
toasty.style.border='2px solid var(--black)';
toasty.style.fontSize='20px';
toasty.style.fontFamily='ddt';
toasty.style.paddingLeft= '20px';
toasty.style.paddingRight= '20px';
toasty.style.bottom='75px';
toasty.style.opacity='0%';
toasty.style.background='var(--white)';

				/*toasty.style = {
					width:'100px',
					height:'60px',
					display:'block',
					padding:'10px',
					verticalAlign:'middle',
					transition:'opacity 2s linear, transform 2s linear',
					textAlign:'center',
					position:'fixed',
					left:'calc(50% - 50px)',
					bottom:'0',
					opacity:'0%',
					boxShadow:'-2px 0 0px 0px #82bf6f',
					background:'#ffffff'
				}
				*/
				            /*
            let ballhit = new BABYLON.Sound("bounce", "assets/bounce.wav", scene, null, {
                spatialSound:true,
                autoplay:false
            });
            */


				<div style="display: inline-block; height: 50px; width: 100px; vertical-align:middle; font-size: 16px; line-height: 50px;">Metamask</div>
							
		/*	async function loaded(evt) {
				//IF USER IS LOGGED IN
				let fname = ge('replacer').innerHTML;
				let fileBinary = evt.target.result;
				console.log(fileBinary)
				
				if(Moralis.User.current()){
					const dFile = new Moralis.File(fname, fileBinary);
					var lll = showToast('Loading...', 3, 5000, function(){lll=showToast('Loading...', 3, 10000)});
					await dFile.saveIPFS().then(function(){
						lll.remove();
						cc=dFile.ipfs();
						reloader();
						
						// Save file reference to Moralis
						const fileInfo = new Moralis.Object('Files');
						fileInfo.set('name', fname.slice(0, fname.lastIndexOf(".")));
						fileInfo.set('owner_name', Moralis.User.current().get("username"));
						fileInfo.set('ethAddress', Moralis.User.current().get("ethAddress"));
						fileInfo.set('ipfs', dFile.ipfs());
						fileInfo.set('hash', dFile.hash());
						fileInfo.save();
						
						showToast('FileSaved', 1, 3000);
						console.log(dFile.ipfs());
					}, function(error){
						showToast("Not Saved", 2, 3000);
					});
				}
				else{
					
				}
			}
					.coursex:hover{
			
			
		}
				.courbot{
			
		}
			*/

			                    /* if(newGame == true){
                        const gamenft = filename;
                        //document.getElementsByTagName("body")[0].appendChild(nft_h);
                        ge("nftask").style.display="block";
                    }else{
                        const gamenft = "free";
                    }*/

					engine.dispose();
					setTimeout(function(){
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
							window.scene = createScene();}
							initFunction().then(() => {sceneToRender = scene    
								engine.hideLoadingUI();    
								engine.runRenderLoop(function () {
									if (sceneToRender && sceneToRender.activeCamera) {
										sceneToRender.render();
									}
								});
							});
						}, 100);
						
						var courseloc;
						async function reup(){
							//courseloc = await Moralis.Cloud.run("overKill", {random_name: random_name, url:cc});
							/*
							var request = await new XMLHttpRequest();
							request.open('GET', cc, true);
							request.send(null);
							request.onreadystatechange = function (){
								if (request.readyState === 4 && request.status === 200) {
									var type = request.getResponseHeader('Content-Type');
									if (type.indexOf("text") !== 1) {
										let uiox = new Blob([request.responseText], {type:"model/gltf-binary"})
										const rrf = new Moralis.File(random_name, uiox);
										rrf.save().then(function(){courseloc=rrf.url()}, function(error){console.log(error); toasty("Error: Reload", 2, 5000, function(){reloader()})})
									}
								}
							}*/
						}
						reup();
						
						//console.log(courseloc);
			



						let lastpos = sessionStorage.getItem('checkpoint');
                        console.log(JSON.parse(lastpos));

                        if(ball.intersectsMesh(water, false)){
							console.log('touchhhhhhed');
                            //THE BALL WILL BE PUT IN THE PREVIOUS POSITION
                            setTimeout(
                                function(){
                                    let lasttt = JSON.parse(lastpos);
                                    //ball.physicsImpostor.setLinearVelocity(new BABYLON.Vector3.Zero())
                                    ball.position.x=lasttt.x;
                                    ball.position.y=lasttt.y;
                                    ball.position.z=lasttt.z;
                                    showToast("Ball Revived", 2, 2000);
                                }, 2000
                                )
                            }


							 if(Moralis.User.Current()){
                            const games = new Moralis.Object.extend('games');
                            const start = new Moralis.Query(games);
                            start.get(random_name).then(function(current_game){
                                const sT = current_game.createdAt;
                                const eT = current_game.updatedAt;
                                const tT = eT - sT;
                                current_game.set("totalTime", tT)
                            });
                            /*
                            start.equalTo("uniqueC", random_name);
                            const results = ();

                            results[0].Created_At();
                            */
                            
                             let finishTime = Moralis.set("finish", true)}
                        else{
                            const finishTime = (Date.now() - Number(ls.getItem("Time"))).toString() + ' mins';;
                            current_game.set("totalTime", finishTime);
                        }


						                       
                        const totalTT = aju.get("Created_At") - aju.get('finish');

                        
                        pauses.forEach(function(value, index, array){
                            //add each pause time.
                            pausetime+=pauses[index];
                        })
        

									unloadedcs = false;
				//check under the files table
				const users_courses = new Moralis.Query('Courses');
				const results = await query.find();
				for(let num = 0; num<results.length; num++){
					cere.innerHTML = '<div class="courside" ></div> <div class="mirrorer" onfocus="validategame();">'+
						'<img class="courseximg" src="'+results.img+'"/>'+
						'<div class="courseinfo">'+results.description+'</div></div>'+
						'<div class="oler"><button class="namecc">'+results.name+'</button><button class="favcc"></button></div>';
						cere.onclick = check(results.uniqueID);
						//append a coursex element for each files... in both the user minitab and the community minitab
						ge("usergames").appendChild(cere);
					}
					//Now we query public courses for community tab
					const public_courses = new Moralis.Query('pCourses');
					const p_results = await public_courses.find();
					for(let pc = 0; pc<p_results.length; pc++){
						cere.innerHTML = '<div class="courside"></div> <div class="mirrorer" onfocus="validategame();">'+
							'<img class="courseximg" src="'+p_results.img+'"/>'+
							'<div class="courseinfo">'+p_results.description+'</div></div>'+
							'<div class="oler"><button class="namecc">'+p_results.name+'</button><button class="favcc"></button></div>';
							cere.onclick = check(p_results.uniqueID);
							ge("communitygames").appendChild(cere);
						}

						                                
                                //file info in JSON for NFT marketplace.
                                const jsoninfo = {name:random_name, ipfsurl:cc, date_created:new Date.now(), owner:Parse.User.current().get("ethAddress")};
                                
                                //Save To localStorage
                                const nftinfo = new Parse.File(random_name, {JSON:jsoninfo});
                                nftinfo.saveIPFS().then(function(){});



/*

												<div class="coursex">
					<div class="courside"></div>
					<div class="mirrorer" onfocus="validategame();">
						<img class="courseximg" src="svgs/igo.png"/>
						<div class="courseinfo"></div>
					</div>
					<div class="oler"><button class="namecc">Ace 55</button><button class="favcc"></button></div>
				</div>
				
				<div class="coursex" >
					<div class="courside" ></div>
					<div class="mirrorer" onfocus="validategame();">
					<img class="courseximg" src="svgs/igo.png"/>
					<div class="courseinfo"></div>
					</div>
					<div class="oler"><button class="namecc"></button><button class="favcc"></button></div>
					<div></div>
				</div>

				*/


				for(var v=start; v<end; v++){
			const query = new Parse.Query('Courses');
			query.get("course"+v).then((specs) => {
				// The object was retrieved successfully.
				const name = specs.get("name");
				const owner_name = specs.get("owner_name");
				const thumbmail = specs.get("thumbmail");
				
				let courses = document.createElement("div");
				courses.innerHTML = "<div class=''></div>";
				
				ge("coursex").appendChild(courses);
			}, (error) => {
				// The object was not retrieved successfully.
				// error is a Parse.Error with an error code and message.
			});
		}