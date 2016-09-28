
FusionCharts.ready(function () {
								
								var revenueChart = new FusionCharts({
										type: 'doughnut2d',
										renderAt: 'Tulusrejo2',
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
													"value": "2.8.60"
												}, 
																							
												{
													"label": "Tidak Kumuh",
													"value": "71.40"
												}
											]
										}
									}).render();
									
									var topStores = new FusionCharts({
									type: 'bar2d',
									renderAt: 'Tulusrejo1',
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
												"label": "Keteraturan Bangunan",
												"value": "70"
											}, 
											
											{
												"label": "Luas Bangunan Sesuai Teknis",
												"value": "94"
											}, 
											{
												"label": "Bangunan Sesuai Teknis",
												"value": "96"
											}, 
											{
												"label": "Kawasan Jalan Baik",
												"value": "82"
											},
											
											{
												"label": "Kondisi Jalan Baik",
												"value": "74"
											},
											{
												"label": "Kawasan Bebas Banjir",
												"value": "100"
											},
											{
												"label": "Drainase Baik",
												"value": "74"
											},
											{
												"label": "Masyarakat Terlayani Air",
												"value": "72"
											},
											{
												"label": "Masyarakat Terpenuhi Kebutuhan Air",
												"value": "98"
											},
											{
												"label": "Masyarakat Memiliki Jamban Bersama",
												"value": "95"
											},
											{
												"label": "Jumlah Jamban sesuai Syarat",
												"value": "92"
											},
											{
												"label": "Saluran Limbah Terpisah drainase",
												"value": "34"
											},
											{
												"label": "Sampah diangkut ke TPS",
												"value": "92"
											},
											{
												"label": "Sarana Pencegah Kebakaran",
												"value": "4"
											},
											{
												"label": "Bangunan Ber-IMB",
												"value": "60"
											},
											{
												"label": "Lahan Bangunan Memiliki Surat",
												"value": "92"
											},
											
											{
												"label": "Masyarakat Pedagang/Jasa",
												"value": "77"
											},
											{
												"label": "Rumah Listrik 900 Watt",
												"value": "60"
											},
											{
												"label": "Pengguna Fasilitas Puskesmas/Pustu",
												"value": "57"
											},
											{
												"label": "Pengguna Fasilitas Pendidikan damlam Kelurahan/Kecamatan",
												"value": "42"
											},
										]
									}
								})
								.render();
								
									
									
									
							});
							