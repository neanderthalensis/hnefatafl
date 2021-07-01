function king(gsize, width, ctx, x, y, snap){
	// #layer1
	ctx.resetTransform();
	if (snap){
		ctx.transform(((width/gsize)/68.18)*2.5, 0, 0, ((width/gsize)/68.18)*2.5, ((width/gsize)*x)-((width/gsize)/68.18)*17, (width/gsize)*y) //1 and 4 parameter scales based on cell size, 5 and 6 does the offset
	}
	else{
		ctx.transform(((width/gsize)/68.18)*2.5, 0, 0, ((width/gsize)/68.18)*2.5, x-((width/gsize)/68.18)*50, y-((width/gsize)/68.18)*40)
	}
// #g8772-9-8
	ctx.save();
	ctx.transform(1.000000, 0.000000, 0.000000, -1.000000, -23.689000, 268.223000);
	
// #g8111-1-2
	
// #path8686-2-3
	ctx.beginPath();
	ctx.fillStyle = 'rgb(244, 244, 244)';
	ctx.strokeStyle = 'rgb(0, 0, 0)';
	ctx.lineWidth = 0.070004;
	ctx.lineCap = 'butt';
	ctx.lineJoin = 'miter';
	ctx.moveTo(34.561380, 242.420410);
	ctx.lineTo(53.930946, 242.420410);
	ctx.moveTo(53.930948, 242.420410);
	ctx.bezierCurveTo(53.930948, 242.420410, 56.019823, 259.020460, 44.246164, 259.020460);
	ctx.moveTo(34.561380, 242.420410);
	ctx.bezierCurveTo(34.561380, 242.420410, 32.472505, 259.020460, 44.246164, 259.020460);
	ctx.fill();
	ctx.stroke();
	ctx.restore();
	
// #path2105-9-3
	ctx.save();
	ctx.beginPath();
	ctx.transform(1.000000, 0.000000, 0.000000, -1.000000, 0.000000, 0.000000);
	ctx.fillStyle = 'rgb(244, 244, 244)';
	ctx.strokeStyle = 'rgb(0, 0, 0)';
	ctx.lineWidth = 0.070004;
	ctx.moveTo(20.557182, -15.943607);
	ctx.bezierCurveTo(23.651071, -15.943607, 26.159164, -13.222964, 26.159164, -9.866880);
	ctx.bezierCurveTo(26.159164, -6.510797, 23.651071, -3.790154, 20.557182, -3.790154);
	ctx.bezierCurveTo(17.463293, -3.790154, 14.955200, -6.510797, 14.955200, -9.866880);
	ctx.bezierCurveTo(14.955200, -13.222964, 17.463293, -15.943607, 20.557182, -15.943607);
	ctx.fill();
	ctx.stroke();
	ctx.restore();
	
// #path12603-6-2
	ctx.beginPath();
	ctx.fillStyle = 'rgb(244, 244, 244)';
	ctx.strokeStyle = 'rgb(0, 0, 0)';
	ctx.lineWidth = 0.008882;
	ctx.moveTo(10.953384, 25.137646);
	ctx.bezierCurveTo(10.890284, 24.381996, 10.869284, 22.356716, 10.915784, 21.514226);
	ctx.bezierCurveTo(11.080274, 18.532006, 11.645364, 16.114676, 12.632904, 14.168806);
	ctx.bezierCurveTo(13.071674, 13.304246, 13.492604, 12.680606, 14.087504, 12.013706);
	ctx.bezierCurveTo(14.370084, 11.696926, 14.940884, 11.164266, 14.968344, 11.191726);
	ctx.bezierCurveTo(14.976344, 11.199726, 15.011744, 11.325446, 15.046644, 11.470776);
	ctx.bezierCurveTo(15.472834, 13.245346, 16.681614, 14.781946, 18.253174, 15.546946);
	ctx.bezierCurveTo(18.655764, 15.742926, 19.069254, 15.883596, 19.545604, 15.986656);
	ctx.bezierCurveTo(19.849224, 16.052356, 19.995804, 16.062956, 20.603034, 16.062956);
	ctx.bezierCurveTo(21.379724, 16.062956, 21.696374, 16.016156, 22.313984, 15.809936);
	ctx.bezierCurveTo(24.142024, 15.199646, 25.633124, 13.553496, 26.126674, 11.600786);
	ctx.bezierCurveTo(26.168674, 11.434616, 26.214174, 11.285906, 26.227714, 11.270326);
	ctx.bezierCurveTo(26.261214, 11.231826, 27.064354, 12.036266, 27.345144, 12.389666);
	ctx.bezierCurveTo(28.843494, 14.275436, 29.778604, 16.957126, 30.101864, 20.295286);
	ctx.bezierCurveTo(30.252794, 21.853926, 30.264194, 23.724196, 30.132864, 25.372666);
	ctx.lineTo(30.110764, 25.649616);
	ctx.lineTo(20.553474, 25.649616);
	ctx.lineTo(10.996184, 25.649616);
	ctx.fill();
	ctx.stroke();
	
// #g34500
	ctx.save();
	ctx.transform(1.000000, 0.000000, 0.000000, -1.000000, -94.653300, 268.582000);
	
// #path34392-7
	ctx.beginPath();
	ctx.strokeStyle = 'rgb(0, 0, 0)';
	ctx.lineWidth = 0.074253;
	ctx.lineCap = 'butt';
	ctx.lineJoin = 'miter';
	ctx.moveTo(120.299230, 261.086810);
	ctx.bezierCurveTo(120.299230, 261.086810, 118.783900, 266.176330, 115.202210, 266.079680);
	ctx.moveTo(110.105200, 261.086810);
	ctx.bezierCurveTo(110.105200, 261.086810, 111.620530, 266.176330, 115.202210, 266.079680);
	ctx.moveTo(109.990430, 261.036330);
	ctx.lineTo(120.396970, 261.069930);
	ctx.moveTo(114.782470, 258.674380);
	ctx.lineTo(115.638490, 258.674380);
	ctx.lineTo(115.638490, 260.986000);
	ctx.lineTo(114.782470, 260.986000);
	ctx.stroke();
	ctx.restore();
	
// #path34559
	ctx.beginPath();
	ctx.fillStyle = 'rgb(0, 0, 0)';
	ctx.strokeStyle = 'rgb(0, 0, 0)';
	ctx.lineWidth = 0.001758;
	ctx.miterLimit = 4;
	ctx.moveTo(15.564824, 7.330966);
	ctx.bezierCurveTo(15.663224, 7.045966, 15.705034, 6.948256, 15.806864, 6.765666);
	ctx.bezierCurveTo(16.611444, 5.323026, 17.860924, 4.315026, 19.307244, 3.941776);
	ctx.bezierCurveTo(19.763954, 3.823926, 19.965844, 3.800696, 20.534384, 3.800696);
	ctx.bezierCurveTo(21.102914, 3.800696, 21.304804, 3.823896, 21.761514, 3.941776);
	ctx.bezierCurveTo(22.976004, 4.255196, 24.063044, 5.021786, 24.855944, 6.123996);
	ctx.bezierCurveTo(25.019154, 6.350856, 25.232424, 6.699726, 25.305284, 6.858996);
	ctx.bezierCurveTo(25.378984, 7.020156, 25.533334, 7.445106, 25.522324, 7.456656);
	ctx.bezierCurveTo(25.515324, 7.463656, 18.463254, 7.496156, 16.549094, 7.497256);
	ctx.lineTo(15.507194, 7.497816);
	ctx.fill();
	ctx.stroke();
	
// #path34598
	ctx.beginPath();
	ctx.fillStyle = 'rgb(0, 0, 0)';
	ctx.strokeStyle = 'rgb(0, 0, 0)';
	ctx.lineWidth = 0.001880;
	ctx.miterLimit = 4;
	ctx.moveTo(16.324864, 5.656666);
	ctx.bezierCurveTo(16.324864, 5.633966, 16.694514, 5.022216, 16.812294, 4.850026);
	ctx.bezierCurveTo(17.423194, 3.957106, 18.078584, 3.324326, 18.787454, 2.942966);
	ctx.bezierCurveTo(19.167854, 2.738336, 19.474544, 2.631446, 19.897854, 2.555926);
	ctx.bezierCurveTo(20.176034, 2.506326, 20.873384, 2.506326, 21.151544, 2.555926);
	ctx.bezierCurveTo(21.574864, 2.631426, 21.881554, 2.738336, 22.261954, 2.942966);
	ctx.bezierCurveTo(22.934954, 3.305006, 23.555434, 3.887386, 24.130204, 4.696396);
	ctx.bezierCurveTo(24.294454, 4.927596, 24.698684, 5.582896, 24.685804, 5.597076);
	ctx.bezierCurveTo(24.681804, 5.601076, 24.601604, 5.529176, 24.508594, 5.435476);
	ctx.bezierCurveTo(23.334414, 4.251356, 21.892744, 3.647416, 20.363524, 3.698986);
	ctx.bezierCurveTo(19.521364, 3.727286, 18.778234, 3.928656, 18.017334, 4.334436);
	ctx.bezierCurveTo(17.474944, 4.623676, 17.000194, 4.988736, 16.468654, 5.525246);
	ctx.bezierCurveTo(16.389654, 5.605046, 16.324864, 5.664216, 16.324864, 5.656666);
	ctx.fill();
	ctx.stroke();
	
// #path34637
	ctx.beginPath();
	ctx.fillStyle = 'rgb(0, 0, 0)';
	ctx.strokeStyle = 'rgb(0, 0, 0)';
	ctx.lineWidth = 0.001871;
	ctx.miterLimit = 4;
	ctx.moveTo(20.271844, 8.687056);
	ctx.lineTo(20.271844, 7.435556);
	ctx.lineTo(20.557184, 7.435556);
	ctx.lineTo(20.842524, 7.435556);
	ctx.lineTo(20.842524, 8.687056);
	ctx.lineTo(20.842524, 9.938566);
	ctx.lineTo(20.557184, 9.938566);
	ctx.lineTo(20.271844, 9.938566);
	ctx.fill();
	ctx.stroke();
	
// #path35065
	ctx.save();
	ctx.beginPath();
	ctx.transform(1.000000, 0.000000, 0.000000, -1.000000, 0.000000, 0.000000);
	ctx.fillStyle = 'rgb(0, 0, 0)';
	ctx.strokeStyle = 'rgb(0, 0, 0)';
	ctx.lineWidth = 0.026458;
	ctx.miterLimit = 4;
	ctx.moveTo(14.253029, -25.132691);
	ctx.bezierCurveTo(17.556674, -25.132691, 20.234807, -22.433303, 20.234807, -19.103439);
	ctx.bezierCurveTo(20.234807, -15.773575, 17.556674, -13.074187, 14.253029, -13.074187);
	ctx.bezierCurveTo(10.949384, -13.074187, 8.271251, -15.773575, 8.271251, -19.103439);
	ctx.bezierCurveTo(8.271251, -22.433303, 10.949384, -25.132691, 14.253029, -25.132691);
	ctx.fill();
	ctx.stroke();
	ctx.restore();
	
// #path35169
	ctx.save();
	ctx.beginPath();
	ctx.transform(1.000000, 0.000000, 0.000000, -1.000000, 0.000000, 0.000000);
	ctx.fillStyle = 'rgb(0, 0, 0)';
	ctx.strokeStyle = 'rgb(0, 0, 0)';
	ctx.lineWidth = 0.026458;
	ctx.miterLimit = 4;
	ctx.moveTo(17.884811, -9.656004);
	ctx.bezierCurveTo(18.264992, -9.656004, 18.573190, -9.358433, 18.573190, -8.991362);
	ctx.bezierCurveTo(18.573190, -8.624290, 18.264992, -8.326720, 17.884811, -8.326720);
	ctx.bezierCurveTo(17.504630, -8.326720, 17.196432, -8.624290, 17.196432, -8.991362);
	ctx.bezierCurveTo(17.196432, -9.358433, 17.504630, -9.656004, 17.884811, -9.656004);
	ctx.fill();
	ctx.stroke();
	ctx.restore();
	
// #path35169-8
	ctx.save();
	ctx.beginPath();
	ctx.transform(1.000000, 0.000000, 0.000000, -1.000000, 0.000000, 0.000000);
	ctx.fillStyle = 'rgb(0, 0, 0)';
	ctx.strokeStyle = 'rgb(0, 0, 0)';
	ctx.lineWidth = 0.026458;
	ctx.miterLimit = 4;
	ctx.moveTo(23.510544, -9.798460);
	ctx.bezierCurveTo(23.890725, -9.798460, 24.198923, -9.500889, 24.198923, -9.133818);
	ctx.bezierCurveTo(24.198923, -8.766746, 23.890725, -8.469176, 23.510544, -8.469176);
	ctx.bezierCurveTo(23.130363, -8.469176, 22.822165, -8.766746, 22.822165, -9.133818);
	ctx.bezierCurveTo(22.822165, -9.500889, 23.130363, -9.798460, 23.510544, -9.798460);
	ctx.fill();
	ctx.stroke();
	ctx.restore();
}

function pawna(gsize, width, ctx, x, y, snap){
	// #layer1

	ctx.resetTransform();
	if (snap){
		ctx.transform(((width/gsize)/68.18)*2.5, 0, 0, ((width/gsize)/68.18)*2.5, ((width/gsize)*x)-((width/gsize)/68.18)*4, ((width/gsize)*y)-((width/gsize)/68.18)*3.7)
	}
	else{
		ctx.transform(((width/gsize)/68.18)*2.5, 0, 0, ((width/gsize)/68.18)*2.5, x-((width/gsize)/68.18)*38, y-((width/gsize)/68.18)*45)
	}
// #g8772-9-8
	ctx.save();
	ctx.transform(1.000000, 0.000000, 0.000000, -1.000000, -29.006100, 269.742000);
	
// #g8111-1-2
	
// #path8686-2-3
	ctx.beginPath();
	ctx.fillStyle = 'rgb(244, 244, 244)';
	ctx.strokeStyle = 'rgb(0, 0, 0)';
	ctx.lineWidth = 0.070004;
	ctx.lineCap = 'butt';
	ctx.lineJoin = 'miter';
	ctx.moveTo(34.561380, 242.420410);
	ctx.lineTo(53.930946, 242.420410);
	ctx.moveTo(53.930948, 242.420410);
	ctx.bezierCurveTo(53.930948, 242.420410, 56.019823, 259.020460, 44.246164, 259.020460);
	ctx.moveTo(34.561380, 242.420410);
	ctx.bezierCurveTo(34.561380, 242.420410, 32.472505, 259.020460, 44.246164, 259.020460);
	ctx.fill();
	ctx.stroke();
	ctx.restore();
	
// #path2105-9-3
	ctx.save();
	ctx.beginPath();
	ctx.transform(1.000000, 0.000000, 0.000000, -1.000000, 0.000000, 0.000000);
	ctx.fillStyle = 'rgb(244, 244, 244)';
	ctx.strokeStyle = 'rgb(0, 0, 0)';
	ctx.lineWidth = 0.070004;
	ctx.moveTo(15.240045, -17.462790);
	ctx.bezierCurveTo(18.333934, -17.462790, 20.842027, -14.742147, 20.842027, -11.386064);
	ctx.bezierCurveTo(20.842027, -8.029981, 18.333934, -5.309338, 15.240045, -5.309338);
	ctx.bezierCurveTo(12.146156, -5.309338, 9.638063, -8.029981, 9.638063, -11.386064);
	ctx.bezierCurveTo(9.638063, -14.742147, 12.146156, -17.462790, 15.240045, -17.462790);
	ctx.fill();
	ctx.stroke();
	ctx.restore();
	
// #path12603-6-2
	ctx.beginPath();
	ctx.fillStyle = 'rgb(242, 244, 244)';
	ctx.strokeStyle = 'rgb(244, 244, 244)';
	ctx.lineWidth = 0.008882;
	ctx.moveTo(5.636244, 26.656825);
	ctx.bezierCurveTo(5.573144, 25.901175, 5.552144, 23.875895, 5.598644, 23.033405);
	ctx.bezierCurveTo(5.763134, 20.051186, 6.328224, 17.633856, 7.315764, 15.687986);
	ctx.bezierCurveTo(7.754534, 14.823426, 8.175464, 14.199786, 8.770364, 13.532886);
	ctx.bezierCurveTo(9.052944, 13.216106, 9.623744, 12.683446, 9.651204, 12.710906);
	ctx.bezierCurveTo(9.659204, 12.718906, 9.694604, 12.844626, 9.729504, 12.989956);
	ctx.bezierCurveTo(10.155694, 14.764526, 11.364474, 16.301126, 12.936034, 17.066126);
	ctx.bezierCurveTo(13.338624, 17.262106, 13.752114, 17.402776, 14.228464, 17.505836);
	ctx.bezierCurveTo(14.532084, 17.571536, 14.678664, 17.582136, 15.285894, 17.582136);
	ctx.bezierCurveTo(16.062584, 17.582136, 16.379234, 17.535336, 16.996844, 17.329116);
	ctx.bezierCurveTo(18.824884, 16.718826, 20.315984, 15.072676, 20.809534, 13.119966);
	ctx.bezierCurveTo(20.851534, 12.953796, 20.897034, 12.805086, 20.910574, 12.789506);
	ctx.bezierCurveTo(20.944074, 12.751006, 21.747214, 13.555446, 22.028004, 13.908846);
	ctx.bezierCurveTo(23.526354, 15.794616, 24.461464, 18.476306, 24.784724, 21.814465);
	ctx.bezierCurveTo(24.935654, 23.373105, 24.947054, 25.243375, 24.815724, 26.891845);
	ctx.lineTo(24.793624, 27.168795);
	ctx.lineTo(15.236334, 27.168795);
	ctx.lineTo(5.679044, 27.168795);
	ctx.fill();
	ctx.stroke();
	
// #g34500
	ctx.save();
	ctx.transform(1.000000, 0.000000, 0.000000, -1.000000, -99.970400, 270.101000);
	
// #path34392-7
	ctx.beginPath();
	ctx.strokeStyle = 'rgb(0, 0, 0)';
	ctx.lineWidth = 0.074253;
	ctx.lineCap = 'butt';
	ctx.lineJoin = 'miter';
	ctx.moveTo(120.299230, 261.086810);
	ctx.bezierCurveTo(120.299230, 261.086810, 118.783900, 266.176330, 115.202210, 266.079680);
	ctx.moveTo(110.105200, 261.086810);
	ctx.bezierCurveTo(110.105200, 261.086810, 111.620530, 266.176330, 115.202210, 266.079680);
	ctx.moveTo(109.990430, 261.036330);
	ctx.lineTo(120.396970, 261.069930);
	ctx.moveTo(114.782470, 258.674380);
	ctx.lineTo(115.638490, 258.674380);
	ctx.lineTo(115.638490, 260.986000);
	ctx.lineTo(114.782470, 260.986000);
	ctx.stroke();
	ctx.restore();
	
// #path34559
	ctx.beginPath();
	ctx.fillStyle = 'rgb(0, 0, 0)';
	ctx.strokeStyle = 'rgb(0, 0, 0)';
	ctx.lineWidth = 0.001758;
	ctx.miterLimit = 4;
	ctx.moveTo(10.247684, 8.850146);
	ctx.bezierCurveTo(10.346084, 8.565146, 10.387894, 8.467436, 10.489724, 8.284846);
	ctx.bezierCurveTo(11.294304, 6.842206, 12.543784, 5.834206, 13.990104, 5.460956);
	ctx.bezierCurveTo(14.446814, 5.343106, 14.648704, 5.319876, 15.217244, 5.319876);
	ctx.bezierCurveTo(15.785774, 5.319876, 15.987664, 5.343076, 16.444374, 5.460956);
	ctx.bezierCurveTo(17.658864, 5.774376, 18.745904, 6.540966, 19.538804, 7.643176);
	ctx.bezierCurveTo(19.702014, 7.870036, 19.915284, 8.218906, 19.988144, 8.378176);
	ctx.bezierCurveTo(20.061844, 8.539336, 20.216194, 8.964286, 20.205184, 8.975836);
	ctx.bezierCurveTo(20.198184, 8.982836, 13.146114, 9.015336, 11.231954, 9.016436);
	ctx.lineTo(10.190054, 9.016996);
	ctx.fill();
	ctx.stroke();
	
// #path34598
	ctx.beginPath();
	ctx.fillStyle = 'rgb(0, 0, 0)';
	ctx.strokeStyle = 'rgb(0, 0, 0)';
	ctx.lineWidth = 0.002134;
	ctx.miterLimit = 4;
	ctx.moveTo(10.686134, 7.699284);
	ctx.bezierCurveTo(10.686134, 7.672163, 11.084840, 6.941297, 11.211877, 6.735579);
	ctx.bezierCurveTo(11.870795, 5.668794, 12.577700, 4.912802, 13.342288, 4.457185);
	ctx.bezierCurveTo(13.752588, 4.212711, 14.083385, 4.085008, 14.539968, 3.994783);
	ctx.bezierCurveTo(14.840013, 3.935524, 15.592177, 3.935524, 15.892200, 3.994783);
	ctx.bezierCurveTo(16.348795, 4.084984, 16.679590, 4.212711, 17.089891, 4.457185);
	ctx.bezierCurveTo(17.815790, 4.889720, 18.485041, 5.585498, 19.104989, 6.552035);
	ctx.bezierCurveTo(19.282149, 6.828253, 19.718152, 7.611150, 19.704259, 7.628091);
	ctx.bezierCurveTo(19.699859, 7.632861, 19.613439, 7.546970, 19.513121, 7.435025);
	ctx.bezierCurveTo(18.246648, 6.020339, 16.691660, 5.298802, 15.042240, 5.360414);
	ctx.bezierCurveTo(14.133885, 5.394225, 13.332343, 5.634804, 12.511636, 6.119596);
	ctx.bezierCurveTo(11.926613, 6.465155, 11.414546, 6.901298, 10.841227, 7.542275);
	ctx.bezierCurveTo(10.756017, 7.637613, 10.686134, 7.708304, 10.686134, 7.699284);
	ctx.fill();
	ctx.stroke();
	
// #path34637
	ctx.beginPath();
	ctx.fillStyle = 'rgb(0, 0, 0)';
	ctx.strokeStyle = 'rgb(0, 0, 0)';
	ctx.lineWidth = 0.002270;
	ctx.miterLimit = 4;
	ctx.moveTo(14.821160, 10.206236);
	ctx.lineTo(14.821160, 8.955097);
	ctx.lineTo(15.241337, 8.955097);
	ctx.lineTo(15.661512, 8.955097);
	ctx.lineTo(15.661512, 10.206236);
	ctx.lineTo(15.661512, 11.457385);
	ctx.lineTo(15.241337, 11.457385);
	ctx.lineTo(14.821160, 11.457385);
	ctx.fill();
	ctx.stroke();
	
// #path35169
	ctx.save();
	ctx.beginPath();
	ctx.transform(1.000000, 0.000000, 0.000000, -1.000000, 0.000000, 0.000000);
	ctx.fillStyle = 'rgb(0, 0, 0)';
	ctx.strokeStyle = 'rgb(0, 0, 0)';
	ctx.lineWidth = 0.026458;
	ctx.miterLimit = 4;
	ctx.moveTo(12.567673, -11.175187);
	ctx.bezierCurveTo(12.947854, -11.175187, 13.256052, -10.877617, 13.256052, -10.510545);
	ctx.bezierCurveTo(13.256052, -10.143473, 12.947854, -9.845903, 12.567673, -9.845903);
	ctx.bezierCurveTo(12.187492, -9.845903, 11.879294, -10.143473, 11.879294, -10.510545);
	ctx.bezierCurveTo(11.879294, -10.877617, 12.187492, -11.175187, 12.567673, -11.175187);
	ctx.fill();
	ctx.stroke();
	ctx.restore();
	
// #path35169-8
	ctx.save();
	ctx.beginPath();
	ctx.transform(1.000000, 0.000000, 0.000000, -1.000000, 0.000000, 0.000000);
	ctx.fillStyle = 'rgb(0, 0, 0)';
	ctx.strokeStyle = 'rgb(0, 0, 0)';
	ctx.lineWidth = 0.026458;
	ctx.miterLimit = 4;
	ctx.moveTo(18.193405, -11.317643);
	ctx.bezierCurveTo(18.573586, -11.317643, 18.881784, -11.020073, 18.881784, -10.653001);
	ctx.bezierCurveTo(18.881784, -10.285929, 18.573586, -9.988359, 18.193405, -9.988359);
	ctx.bezierCurveTo(17.813224, -9.988359, 17.505026, -10.285929, 17.505026, -10.653001);
	ctx.bezierCurveTo(17.505026, -11.020073, 17.813224, -11.317643, 18.193405, -11.317643);
	ctx.fill();
	ctx.stroke();
	ctx.restore();
	
// #path3978
	ctx.save();
	ctx.beginPath();
	ctx.transform(0.264583, 0.000000, 0.000000, 0.264583, 0.000000, 0.000000);
	ctx.fillStyle = 'rgb(249, 249, 249)';
	ctx.strokeStyle = 'rgb(249, 249, 249)';
	ctx.lineWidth = 0.002923;
	ctx.moveTo(61.142639, 66.191265);
	ctx.bezierCurveTo(63.848726, 65.702215, 66.420294, 64.677813, 68.762671, 63.155775);
	ctx.bezierCurveTo(69.194032, 62.875483, 69.659231, 62.548379, 70.036846, 62.259841);
	ctx.bezierCurveTo(70.196030, 62.138208, 70.197028, 62.137655, 70.216256, 62.160591);
	ctx.bezierCurveTo(70.226886, 62.173271, 70.235386, 62.189321, 70.235136, 62.196241);
	ctx.bezierCurveTo(70.234233, 62.221101, 69.630012, 62.660833, 69.171228, 62.970523);
	ctx.bezierCurveTo(67.564318, 64.055225, 65.921745, 64.863640, 64.092603, 65.470042);
	ctx.bezierCurveTo(62.887211, 65.869656, 62.013782, 66.087411, 61.109798, 66.213686);
	ctx.bezierCurveTo(60.866203, 66.247716, 60.879127, 66.238896, 61.142638, 66.191266);
	ctx.fill();
	ctx.stroke();
	ctx.restore();
}

function pawnb(gsize, width, ctx, x, y, snap){
	ctx.resetTransform();
	if (snap){
		ctx.transform(((width/gsize)/68.18)*2.5, 0, 0, ((width/gsize)/68.18)*2.5, ((width/gsize)*x)-((width/gsize)/68.18)*4, ((width/gsize)*y)-((width/gsize)/68.18)*3.7)
	}
	else{
		ctx.transform(((width/gsize)/68.18)*2.5, 0, 0, ((width/gsize)/68.18)*2.5, x-((width/gsize)/68.18)*38, y-((width/gsize)/68.18)*45)
	}
// #g8772-9-8
	ctx.save();
	ctx.transform(1.000000, 0.000000, 0.000000, -1.000000, -29.006100, 269.742000);
	
// #g8111-1-2
	
// #path8686-2-3
	ctx.beginPath();
	ctx.fillStyle = 'rgb(153, 153, 153)';
	ctx.strokeStyle = 'rgb(0, 0, 0)';
	ctx.lineWidth = 0.070004;
	ctx.lineCap = 'butt';
	ctx.lineJoin = 'miter';
	ctx.moveTo(34.561380, 242.420410);
	ctx.lineTo(53.930946, 242.420410);
	ctx.moveTo(53.930948, 242.420410);
	ctx.bezierCurveTo(53.930948, 242.420410, 56.019823, 259.020460, 44.246164, 259.020460);
	ctx.moveTo(34.561380, 242.420410);
	ctx.bezierCurveTo(34.561380, 242.420410, 32.472505, 259.020460, 44.246164, 259.020460);
	ctx.fill();
	ctx.stroke();
	ctx.restore();
	
// #path2105-9-3
	ctx.save();
	ctx.beginPath();
	ctx.transform(1.000000, 0.000000, 0.000000, -1.000000, 0.000000, 0.000000);
	ctx.fillStyle = 'rgb(153, 153, 153)';
	ctx.strokeStyle = 'rgb(0, 0, 0)';
	ctx.lineWidth = 0.070004;
	ctx.moveTo(15.240045, -17.462790);
	ctx.bezierCurveTo(18.333934, -17.462790, 20.842027, -14.742147, 20.842027, -11.386064);
	ctx.bezierCurveTo(20.842027, -8.029981, 18.333934, -5.309338, 15.240045, -5.309338);
	ctx.bezierCurveTo(12.146156, -5.309338, 9.638063, -8.029981, 9.638063, -11.386064);
	ctx.bezierCurveTo(9.638063, -14.742147, 12.146156, -17.462790, 15.240045, -17.462790);
	ctx.fill();
	ctx.stroke();
	ctx.restore();
	
// #path12603-6-2
	ctx.beginPath();
	ctx.fillStyle = 'rgb(153, 153, 153)';
	ctx.strokeStyle = 'rgb(153, 153, 153)';
	ctx.lineWidth = 0.008882;
	ctx.moveTo(5.636244, 26.656825);
	ctx.bezierCurveTo(5.573144, 25.901175, 5.552144, 23.875895, 5.598644, 23.033405);
	ctx.bezierCurveTo(5.763134, 20.051186, 6.328224, 17.633856, 7.315764, 15.687986);
	ctx.bezierCurveTo(7.754534, 14.823426, 8.175464, 14.199786, 8.770364, 13.532886);
	ctx.bezierCurveTo(9.052944, 13.216106, 9.623744, 12.683446, 9.651204, 12.710906);
	ctx.bezierCurveTo(9.659204, 12.718906, 9.694604, 12.844626, 9.729504, 12.989956);
	ctx.bezierCurveTo(10.155694, 14.764526, 11.364474, 16.301126, 12.936034, 17.066126);
	ctx.bezierCurveTo(13.338624, 17.262106, 13.752114, 17.402776, 14.228464, 17.505836);
	ctx.bezierCurveTo(14.532084, 17.571536, 14.678664, 17.582136, 15.285894, 17.582136);
	ctx.bezierCurveTo(16.062584, 17.582136, 16.379234, 17.535336, 16.996844, 17.329116);
	ctx.bezierCurveTo(18.824884, 16.718826, 20.315984, 15.072676, 20.809534, 13.119966);
	ctx.bezierCurveTo(20.851534, 12.953796, 20.897034, 12.805086, 20.910574, 12.789506);
	ctx.bezierCurveTo(20.944074, 12.751006, 21.747214, 13.555446, 22.028004, 13.908846);
	ctx.bezierCurveTo(23.526354, 15.794616, 24.461464, 18.476306, 24.784724, 21.814465);
	ctx.bezierCurveTo(24.935654, 23.373105, 24.947054, 25.243375, 24.815724, 26.891845);
	ctx.lineTo(24.793624, 27.168795);
	ctx.lineTo(15.236334, 27.168795);
	ctx.lineTo(5.679044, 27.168795);
	ctx.fill();
	ctx.stroke();
	
// #g34500
	ctx.save();
	ctx.transform(1.000000, 0.000000, 0.000000, -1.000000, -99.970400, 270.101000);
	
// #path34392-7
	ctx.beginPath();
	ctx.strokeStyle = 'rgb(0, 0, 0)';
	ctx.lineWidth = 0.074253;
	ctx.lineCap = 'butt';
	ctx.lineJoin = 'miter';
	ctx.moveTo(120.299230, 261.086810);
	ctx.bezierCurveTo(120.299230, 261.086810, 118.783900, 266.176330, 115.202210, 266.079680);
	ctx.moveTo(110.105200, 261.086810);
	ctx.bezierCurveTo(110.105200, 261.086810, 111.620530, 266.176330, 115.202210, 266.079680);
	ctx.moveTo(109.990430, 261.036330);
	ctx.lineTo(120.396970, 261.069930);
	ctx.moveTo(114.782470, 258.674380);
	ctx.lineTo(115.638490, 258.674380);
	ctx.lineTo(115.638490, 260.986000);
	ctx.lineTo(114.782470, 260.986000);
	ctx.stroke();
	ctx.restore();
	
// #path34559
	ctx.beginPath();
	ctx.fillStyle = 'rgb(0, 0, 0)';
	ctx.strokeStyle = 'rgb(0, 0, 0)';
	ctx.lineWidth = 0.001758;
	ctx.miterLimit = 4;
	ctx.moveTo(10.247684, 8.850146);
	ctx.bezierCurveTo(10.346084, 8.565146, 10.387894, 8.467436, 10.489724, 8.284846);
	ctx.bezierCurveTo(11.294304, 6.842206, 12.543784, 5.834206, 13.990104, 5.460956);
	ctx.bezierCurveTo(14.446814, 5.343106, 14.648704, 5.319876, 15.217244, 5.319876);
	ctx.bezierCurveTo(15.785774, 5.319876, 15.987664, 5.343076, 16.444374, 5.460956);
	ctx.bezierCurveTo(17.658864, 5.774376, 18.745904, 6.540966, 19.538804, 7.643176);
	ctx.bezierCurveTo(19.702014, 7.870036, 19.915284, 8.218906, 19.988144, 8.378176);
	ctx.bezierCurveTo(20.061844, 8.539336, 20.216194, 8.964286, 20.205184, 8.975836);
	ctx.bezierCurveTo(20.198184, 8.982836, 13.146114, 9.015336, 11.231954, 9.016436);
	ctx.lineTo(10.190054, 9.016996);
	ctx.fill();
	ctx.stroke();
	
// #path34598
	ctx.beginPath();
	ctx.fillStyle = 'rgb(0, 0, 0)';
	ctx.strokeStyle = 'rgb(0, 0, 0)';
	ctx.lineWidth = 0.002134;
	ctx.miterLimit = 4;
	ctx.moveTo(10.686134, 7.699284);
	ctx.bezierCurveTo(10.686134, 7.672163, 11.084840, 6.941297, 11.211877, 6.735579);
	ctx.bezierCurveTo(11.870795, 5.668794, 12.577700, 4.912802, 13.342288, 4.457185);
	ctx.bezierCurveTo(13.752588, 4.212711, 14.083385, 4.085008, 14.539968, 3.994783);
	ctx.bezierCurveTo(14.840013, 3.935524, 15.592177, 3.935524, 15.892200, 3.994783);
	ctx.bezierCurveTo(16.348795, 4.084984, 16.679590, 4.212711, 17.089891, 4.457185);
	ctx.bezierCurveTo(17.815790, 4.889720, 18.485041, 5.585498, 19.104989, 6.552035);
	ctx.bezierCurveTo(19.282149, 6.828253, 19.718152, 7.611150, 19.704259, 7.628091);
	ctx.bezierCurveTo(19.699859, 7.632861, 19.613439, 7.546970, 19.513121, 7.435025);
	ctx.bezierCurveTo(18.246648, 6.020339, 16.691660, 5.298802, 15.042240, 5.360414);
	ctx.bezierCurveTo(14.133885, 5.394225, 13.332343, 5.634804, 12.511636, 6.119596);
	ctx.bezierCurveTo(11.926613, 6.465155, 11.414546, 6.901298, 10.841227, 7.542275);
	ctx.bezierCurveTo(10.756017, 7.637613, 10.686134, 7.708304, 10.686134, 7.699284);
	ctx.fill();
	ctx.stroke();
	
// #path34637
	ctx.beginPath();
	ctx.fillStyle = 'rgb(0, 0, 0)';
	ctx.strokeStyle = 'rgb(0, 0, 0)';
	ctx.lineWidth = 0.002270;
	ctx.miterLimit = 4;
	ctx.moveTo(14.821160, 10.206236);
	ctx.lineTo(14.821160, 8.955097);
	ctx.lineTo(15.241337, 8.955097);
	ctx.lineTo(15.661512, 8.955097);
	ctx.lineTo(15.661512, 10.206236);
	ctx.lineTo(15.661512, 11.457385);
	ctx.lineTo(15.241337, 11.457385);
	ctx.lineTo(14.821160, 11.457385);
	ctx.fill();
	ctx.stroke();
	
// #path35169
	ctx.save();
	ctx.beginPath();
	ctx.transform(1.000000, 0.000000, 0.000000, -1.000000, 0.000000, 0.000000);
	ctx.fillStyle = 'rgb(0, 0, 0)';
	ctx.strokeStyle = 'rgb(0, 0, 0)';
	ctx.lineWidth = 0.026458;
	ctx.miterLimit = 4;
	ctx.moveTo(12.567673, -11.175187);
	ctx.bezierCurveTo(12.947854, -11.175187, 13.256052, -10.877617, 13.256052, -10.510545);
	ctx.bezierCurveTo(13.256052, -10.143473, 12.947854, -9.845903, 12.567673, -9.845903);
	ctx.bezierCurveTo(12.187492, -9.845903, 11.879294, -10.143473, 11.879294, -10.510545);
	ctx.bezierCurveTo(11.879294, -10.877617, 12.187492, -11.175187, 12.567673, -11.175187);
	ctx.fill();
	ctx.stroke();
	ctx.restore();
	
// #path35169-8
	ctx.save();
	ctx.beginPath();
	ctx.transform(1.000000, 0.000000, 0.000000, -1.000000, 0.000000, 0.000000);
	ctx.fillStyle = 'rgb(0, 0, 0)';
	ctx.strokeStyle = 'rgb(0, 0, 0)';
	ctx.lineWidth = 0.026458;
	ctx.miterLimit = 4;
	ctx.moveTo(18.193405, -11.317643);
	ctx.bezierCurveTo(18.573586, -11.317643, 18.881784, -11.020073, 18.881784, -10.653001);
	ctx.bezierCurveTo(18.881784, -10.285929, 18.573586, -9.988359, 18.193405, -9.988359);
	ctx.bezierCurveTo(17.813224, -9.988359, 17.505026, -10.285929, 17.505026, -10.653001);
	ctx.bezierCurveTo(17.505026, -11.020073, 17.813224, -11.317643, 18.193405, -11.317643);
	ctx.fill();
	ctx.stroke();
	ctx.restore();
	
// #path3585
	ctx.save();
	ctx.beginPath();
	ctx.transform(0.264583, 0.000000, 0.000000, 0.264583, 0.000000, 0.000000);
	ctx.fillStyle = 'rgb(153, 153, 153)';
	ctx.strokeStyle = 'rgb(153, 153, 153)';
	ctx.lineWidth = 0.001713;
	ctx.moveTo(60.870808, 66.236146);
	ctx.bezierCurveTo(61.567464, 66.117142, 62.189059, 65.982758, 62.799619, 65.819150);
	ctx.bezierCurveTo(65.409534, 65.119790, 67.848775, 63.917510, 70.058401, 62.241362);
	ctx.lineTo(70.203886, 62.131003);
	ctx.lineTo(70.224326, 62.167073);
	ctx.lineTo(70.244766, 62.203143);
	ctx.lineTo(70.175086, 62.256763);
	ctx.bezierCurveTo(70.068163, 62.339023, 69.799812, 62.536198, 69.637831, 62.651508);
	ctx.bezierCurveTo(68.469874, 63.482947, 67.260338, 64.176464, 65.990567, 64.742756);
	ctx.bezierCurveTo(65.374267, 65.017613, 64.759589, 65.254280, 64.079726, 65.478479);
	ctx.bezierCurveTo(62.788253, 65.904370, 61.889548, 66.120863, 60.906935, 66.242786);
	ctx.bezierCurveTo(60.727898, 66.264996, 60.715373, 66.262696, 60.870805, 66.236186);
	ctx.fill();
	ctx.stroke();
	ctx.restore();
	}