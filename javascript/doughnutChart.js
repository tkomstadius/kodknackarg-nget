// Include charts.js
// <script src="Chart.js"></script>
       

// console.log("i charty");
// var ctx = document.getElementById("myChart").getContext("2d");
// console.log(ctx);
// // var myNewChart = new Chart(ctx).PolarArea(data);

// // A pie chart
// var myPieChart = new Chart(ctx[0]).Pie(data,options);

// // And for a doughnut chart
// var myDoughnutChart = new Chart(ctx[1]).Doughnut(data,options);
// console.log("utanför drawDoughnut");

function drawDoughnut()
{
	console.log("i drawDoughnut");
	// data structure
	var pieData = [
		{
			value: 83,
			color:"#99BD47",
			label: 'green points',
			labelColor: "#F38630",
			labelFontSize : '16',
			strokeColor: '#F6F6F6',
			highlightStroke: '#F6F6F6'
		},
		{
			value: 17,
			color: "#F6F6F6",
			fillColor: "#F6F6F6",
			strokeColor: '#F6F6F6',
			highlightStroke: '#F6F6F6'
		}
	];
	var pieOptions = {
		segmentShowStroke : false,
		animateScale : true,
		datasetShowStroke: false,
		barShowStroke: false,
		segmentShowStroke: false,
		animationEasing: "easeOutBounce"

	}

	// Get the context of the canvas element we want to select
	var ctx = document.getElementById("myChart").getContext("2d");

	var myDoughnutChart = new Chart(ctx).Doughnut(pieData, {percentageInnerCutout : 88}, pieOptions);
}

function drawDoughnut2(){
		// data structure
		var pieData = [
			{
				value: 94,
				color:"#99BD47",
				label: 'green points',
				labelColor: "#F38630",
				labelFontSize : '16',
				strokeColor: '#F6F6F6',
				highlightStroke: '#F6F6F6'
			},
			{
				value: 6,
				color: "#F6F6F6",
				fillColor: "#F6F6F6",
				strokeColor: '#F6F6F6',
				highlightStroke: '#F6F6F6'
			}
		];
		var pieOptions = {
			segmentShowStroke : false,
			animateScale : true,
			datasetShowStroke: false,
			barShowStroke: false,
			segmentShowStroke: false,
			animationEasing: "easeOutBounce"

		}

	// var ctx = document.getElementById("myChart2").getContext("2d");

	// var myDoughnutChart = new Chart(ctx).Doughnut(pieData, {percentageInnerCutout : 88}, pieOptions);
}

			