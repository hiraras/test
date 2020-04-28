
var chart = null;
var xLength = 7;
$(function() {
	chart = echarts.init($('#chart')[0]);
	initChart();
});

function getAxisA(length) {
	var endTime = new Date().setHours(0, 0, 0, 0);
	var days = [];
	for(var i = 0; i < length; i += 1) {
		days.push(endTime - ( length - i ) * 86400 * 1000);
	}
	return days.map(item => formatMonth(item));
}

function formatMonth(time) {
	time = new Date(time);
	var month = time.getMonth() + 1;
	var day = time.getDate();
	return month + ':' + day;
}

function initChart() {
	var option = {
        tooltip: {
            trigger: 'axis',
        },
        legend: {
            data: ['付款率', '发货率', '成功率', '下单成功率'],
            icon: 'circle',
            itemWidth: 8,
            itemHeight: 8,
            left: '0%',
            textStyle: {
                fontSize: 14,
            }
        },
        color: ["#7e58ed", "#3596fc", "#18d57a", "#fec400"],
        xAxis: {
            type: 'category',
            data: getAxisA(xLength)
        },
        yAxis: {
            type: 'value',
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '10%',
            containLabel: true
        },
        series: [
            { name: '付款率', type: 'line', data: getData() },
            { name: '发货率', type: 'line', data: getData() },
            { name: '成功率', type: 'line', data: getData() },
            { name: '下单成功率', type: 'line', data: getData() },
        ],
    };
    chart.setOption(option);
}

function getData() {
	return new Array(xLength).join().split(',').map(item => getRandom());
}

function getRandom() {
	return Math.floor(Math.random() * 10000);
}



