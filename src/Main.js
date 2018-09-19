var F2xExtend=__extends;
window.addEventListener("load",function(){
    annie.debug=false;
    /**
     * 最上层div的id,可以在一个页面同时放多个stage.
     * 设计尺寸的宽
     * 设计尺寸的高
     * FPS刷新率
     * 缩放模式
     * 渲染模式
     */
    var stage=new annie.Stage("annieEngine",640,1136,30,annie.StageScaleMode.FIXED_WIDTH,0);
    //默认关闭自动旋转和自动resize
    // stage.autoResize=true;
    // stage.autoSteering=true;
    stage.addEventListener(annie.Event.INIT_TO_STAGE,function (e) {
        Flash2x.loadScene("loading",function(per){

            trace("加载进度:"+per+"%");


        },function(result){

            // if($(window).width()==375&&$(window).height()==724){
            //
            //     stage.scaleMode=annie.StageScaleMode.FIXED_WIDTH
            //     stage.resize()
            //     stage.y=428
            //
            //
            // }else{
            //
            //     stage.scaleMode=annie.StageScaleMode.FIXED_WIDTH
            //     stage.resize()
            //
            //
            // }


            video_mc=document.getElementById('video_mc')
            video_play=document.getElementById('video')
            video_play.play()
            video_play.pause()

            var load = new loading.Loading();

            if(result.sceneId==result.sceneTotal) {

                stage.addChild(load);



                Flash2x.loadScene(["index"],function(per){

                    load.mc.tt.text = per+"%";


                },function(result) {

                    if (result.sceneId == result.sceneTotal) {


                        stage.removeChild(load)


                        mc=new index.MC()
                        stage.addChild(mc)
                        mc.y=stage.viewRect.y

                        alert(stage.viewRect.y)
                        stage.scaleMode=annie.StageScaleMode.FIXED_WIDTH
                        stage.resize()

                        mc.start_btn.addEventListener(annie.MouseEvent.MOUSE_DOWN,ok_C)

                        function ok_C(e){


                            console.log("开始")

                            video_mc.style.display='block'
                            video_play.play()



                            video_play.addEventListener("ended", video_end);

                            function video_end(){


                                video_play.removeEventListener("ended", video_end);
                                video_mc.style.display='none'

                            }



                        }

                    }


                })




            }

        });
    })
});