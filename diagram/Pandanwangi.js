
FusionCharts.ready(function () {
								
								var revenueChart = new FusionCharts({
										type: 'doughnut2d',
										renderAt: 'Pandanwangi2',
										width: '400',
										height: '300',
										dataFormat: 'json',
										dataSource: {
											"chart": {
												"subCaption": "Persentase Kekumuhan",
												"numberPrefix": "$",
												"paletteColors": "#ff0000,#1aaf5d,#f2c500,#f45b00,#8e0000",
												"bgColor": "#ffffff",
												"showBorder": "0",
												"use3DLighting": "0",
												"showShadow": "0",
												"enableSmartLabels": "0",
												"startingAngle": "310",
												"showLabels": "0",
												"showPercentValues": "1",
												"showLegend": "1",
												"legendShadow": "0",
												"legendBorderAlpha": "0",                                
												"decimals": "2",
												"captionFontSize": "12",
												"subcaptionFontSize": "12",
												"subcaptionFontBold": "0",
												"toolTipColor": "#ffffff",
												"toolTipBorderThickness": "0",
												"toolTipBgColor": "#000000",
												"toolTipBgAlpha": "80",
												"toolTipBorderRadius": "2",
												"toolTipPadding": "5",
											},
											"data": [
												{
													"label": "Kumuh",
													"value": "24.44"
												}, 
																							
												{
													"label": "Tidak Kumuh",
													"value": "75.56"
												}
											]
										}
									}).render();
									
									var topStores = new FusionCharts({
									type: 'bar2d',
									renderAt: 'Pandanwangi1',
									width: '420',
									height: '450',
									dataFormat: 'json',
									dataSource: {
										"chart": {
											"subCaption": "Persentase Parameter Kekumuhan",
											"yAxisName": "Persentase (%)",
											"paletteColors": "#0075c2",
											"bgColor": "#ffffff",
											"showBorder": "0",
											"showCanvasBorder": "0",
											"usePlotGradientColor": "0",
											"plotBorderAlpha": "20",
											"placeValuesInside": "1",
											"valueFontColor": "#ffffff",
											"showAxisLines": "1",
											"axisLineAlpha": "25",
											"divLineAlpha": "10",
											"alignCaptionWithCanvas": "0",
											"showAlternateVGridColor": "0",
											"captionFontSize": "12",
											"subcaptionFontSize": "12",
											"subcaptionFontBold": "0",
											"toolTipColor": "#ffffff",
											"toolTipBorderThickness": "0",
											"toolTipBgColor": "#000000",
											"toolTipBgAlpha": "80",
											"toolTipBorderRadius": "2",
											"toolTipPadding": "5"
										},
										
										"data": [
											{
												"label": "Ketidakteraturan Bangunan",
												"value": "20"
											}, 
											
											{
												"label": "Tingkat Kepadatan Bangunan",
												"value": "9.44"
											}, 
											{
												"label": "Bangunan Tidak Sesuai Teknis",
												"value": "5.98"
											}, 
											{
												"label": "Cakupan Jalan Buruk ",
												"value": "3.14"
											},
											
											{
												"label": "Kualitas Jalan Buruk ",
												"value": "4"
											},
											{
												"label": "Ketidaktersediaan Akses Air Minum",
												"value": "16"
											},
											{
												"label": "Air Minum Tidak Terpenuhi",
												"value": "1.5"
											},
											{
												"label": "Drainase Tidak Mampu Mengalirkan Limpasan Air ",
												"value": "1.5"
											},
											{
												"label": "Drainase Tidak Tersedia",
												"value": "7.7"
											},
											{
												"label": "Drainase Tidak Terhubung Dengan Drainase Perkotaan ",
												"value": "0.63"
											},
											{
												"label": "Drainase Tidak Terpelihara",
												"value": "0.62"
											},
											{
												"label": "Kualitas Konstruksi Drainase Buruk",
												"value": "7.71"
											},
											{
												"label": "Pengolahan Air Limbah Tidak Sesuai Standar",
												"value": "53.3"
											},
											{
												"label": "Sarana dan Prasarana Pengelolaan Air Limbah Tidak Standar",
												"value": "4.5"
											},
											{
												"label": "Sarana dan Prasarana Persampahan Tidak Standar",
												"value": "4.5"
											},
											{
												"label": "Pengolahan Sampah Tidak Standar",
												"value": "4.5"
											},
											
											{
												"label": "Sarana dan Prasarana Pengelolaan Sampah Tidak Terpelihara",
												"value": "4.5"
											},
											{
												"label": "Ketidaktersediaan Sarana Proteksi Kebakaran ",
												"value": "94.48"
											},
											{
												"label": "Ketidaktersediaan Prasarana Proteksi Kebakaran ",
												"value": "100"
											},
										]
									}
								})
								.render();
								
									
									
									
							});
							