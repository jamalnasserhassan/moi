import { useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const DonutChart = ({ name = "", data = [], colors = [], legend = false }) => {

	const width = (legend) ? 300 : 200;
	const height = (legend) ? 300 : 200;
	const fontWeight = (legend) ? 300 : 600;


    const [chartData, setChartData] = useState(data);

	const options = {
		chart: {
			plotBackgroundColor: null,
			plotBorderWidth: 0,
			plotShadow: false,
			backgroundColor: 'transparent',
			height: height,
			width: width,
			events: {
				load: function () {
					this.series[0].points[0].update({
						dataLabels: {
							enabled: true
						}
					});
				}
			}
		},
		title: {
			text: ''
		},
		exporting: {
			enabled: false
		},
		credits: {
			enabled: false
		},
		plotOptions: {
			pie: {
				allowPointSelect: true,
				cursor: 'pointer',
				dataLabels: {
					enabled: false,
					useHTML: true,
					distance: 0,
					y: 0,
					align: 'center',
					verticalAlign: 'middle',
					formatter: function () {
						return '<span style="width: ' + width + 'px; height: ' + height + 'px; display: flex; justify-content: center; flex-direction: column; align-items: center; position: absolute; top: 0; left: 0; pointer-events:none; z-index:0;"><strong style="font-weight:600; font-size: 24px; line-height: 20px; margin-top: 8px; margin-bottom:3px;">' + this.point.percentage.toFixed(1) + '%' + '</strong><strong style="color:' + ((legend) ? '#8E9AA0' : this.point.color) + ';white-space:nowrap; font-weight:'+ fontWeight+';">' + this.point.name + '</strong></span>';
					},
					style: {
						fontWeight: '600',
						fontFamily: 'Bahij TheSansArabic',
						color: 'black',
						fontSize: '14px'
					},
				},
				showInLegend: false,
				borderWidth: 3
			},
			series: {
				point: {
					events: {
						click: function () {
							var chart = this.series.chart;
							chart.series[0].points.forEach(function (point) {
								point.update({
									dataLabels: {
										enabled: false
									}
								}, false);
							});
							this.update({
								dataLabels: {
									enabled: true,
								}
							});
						}
					}
				}
			}
		},
		tooltip: {
			enabled: false,
			// useHTML: true,
			// formatter: function () {
			// 	var tooltip = '<b>' + this.x + '</b><br/><ul>';
			// 	if (this.points) {
			// 		this.points.forEach(function (point) {
			// 			tooltip += '<li><span style="color:' + point.color + '">' + point.series.name + '</span>: ' + point.y + 'm</li>';
			// 		});
			// 	} else {
			// 		tooltip += '<li><span style="color:' + this.point.color + '">' + this.point.series.name + '</span>: ' + this.point.y + 'm</li>';
			// 	}
			// 	tooltip += '</ul>';
			// 	return tooltip;
			// },
			// shared: true,
			// backgroundColor: '#fff',
			// borderColor: 'black',
			// borderRadius: 5,
			// borderWidth: 0,
			// shadow: true,
			// style: {
			// 	fontWeight: '600',
			// 	fontFamily: 'Bahij TheSansArabic',
			// 	color: 'black',
			// 	fontSize: '14px'
			// }
		},
		series: [{
			type: 'pie',
			innerSize: '80%',
			name: name,
			data: chartData,
		}],
		colors: colors,
        legend: {
            enabled: false
		},
		accessibility: {
			enabled: false
		}
	};

	const handleLegendItemClick = (index) => {
        const newData = [...chartData];
        newData[index].visible = !newData[index].visible;
        setChartData(newData);
    };

    const customLegend = (
        <ul className="Chart__legend">
            {data.map((item, index) => (
                <li key={index} className={`Chart__legend-item ${chartData[index]?.visible ? 'active' : ''}`} onClick={() => handleLegendItemClick(index)}>
                    <span className="legend-icon" style={{ backgroundColor: colors[index] }} />
                    <span className="legend-label">{item.name}</span>
                </li>
            ))}
        </ul>
    );

	return (
		<div className="Chart" >
			<HighchartsReact highcharts={Highcharts} options={options} />
			{legend && customLegend}
		</div>
	);

};
export default DonutChart;
