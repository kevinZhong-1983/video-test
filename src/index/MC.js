var index=index||{};
index.MC=function(){
	var s = this;
	F2xMovieClip.call(s);
	s.initUI();
};
F2xExtend(index.MC,F2xMovieClip);
index.MC.prototype.initUI=function(){
	var s = this;
	//f2x_auto_created_init_start
	var _d0=new index.F2xAuto_1();
	_d0.name="start_btn";
	s.start_btn=_d0;
	var _d1=new index.F2xAuto_3();
	s.a().b(39).b(1);
	s.a().b(28).b(1).c(_d0,{x:307,y:784.8,a:0.09999,b:0.09999}).b(1).c(_d0,{x:289.7,y:769,a:0.2562,b:0.2562}).b(1).c(_d0,{x:274.1,y:754.65,a:0.3975,b:0.3975}).b(1).c(_d0,{x:260.1,y:741.8,a:0.5239,b:0.5239}).b(1).c(_d0,{x:247.75,y:730.5,a:0.6355,b:0.6355}).b(1).c(_d0,{x:237.1,y:720.65,a:0.7322,b:0.7322}).b(1).c(_d0,{x:228.05,y:712.3,a:0.814,b:0.814}).b(1).c(_d0,{x:220.65,y:705.55,a:0.881,b:0.881}).b(1).c(_d0,{x:214.85,y:700.25,a:0.9331,b:0.9331}).b(1).c(_d0,{x:210.75,y:696.5,a:0.9702,b:0.9702}).b(1).c(_d0,{x:208.3,y:694.25,a:0.9925,b:0.9925}).b(1).c(_d0,{x:208,y:694});
	s.a().b(40).c(_d1);
	s.as(function(){this.stop();}.bind(this),39);
	//f2x_auto_created_init_end
	
};
