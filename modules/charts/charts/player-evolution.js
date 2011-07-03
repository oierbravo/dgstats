Drupal.behaviors.dgstatsChartsPlayerEvolution = function(){
  options = {
      chart: {
         renderTo: 'dgstats-charts-player-evolution-wrapper',
         zoomType: 'x'
      },
           title: {
         text: Drupal.t('Player evolution')
      },
           subtitle: {
         text: 'Click and drag in the plot area to zoom in'
      },
      xAxis: {
         type: 'datetime',
         maxZoom: 14 * 24 * 3600000, // fourteen days
         title: {
            text: null
         }
      },
      yAxis: {
         title: {
            text: null
         },
         min: 0.6,
         startOnTick: false,
         showFirstLabel: false
      },
       tooltip: {
         formatter: function() {
            return ''+
               Highcharts.dateFormat('%A %B %e %Y', this.x) + ':'+
               this.series.name  + ': '+ Highcharts.numberFormat(this.y, 2);
         }
      },

      legend: {
         enabled: true
      },
      plotOptions: {
         area: {
            lineWidth: 1,
            marker: {
               enabled: false,
               states: {
                  hover: {
                     enabled: true,
                     radius: 5
                  }
               }
            },
            shadow: false,
            states: {
               hover: {
                  lineWidth: 1
               }
            }
         }
      },
series:[]
//      series:[{
//          type: 'area',
//         name: 'points',
//         pointInterval: 24 * 3600 * 1000,
//         pointStart: Date.UTC(2010, 0, 01),
//         data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 3.8581061959267, 3.8581061959267, 3.8581061959267, 3.8581061959267, 3.7928746938705, 3.7928746938705, 3.8140127658844, 3.7228620052338, 3.6400332450867, 3.6400332450867, 3.6400332450867, 3.5316598415375, 3.5316598415375, 3.5116184949875, 3.577540063858, 3.577540063858, 3.577540063858, 3.3819941282272, 3.3819941282272, 3.3819941282272, 3.1785569190979, 3.1811852455139, 3.1811852455139, 3.1811852455139, 3.1031119823456, 3.1095690727234, 3.1095690727234, 3.1095690727234, 3.00801217556, 3.0772347450256, 2.9422578811645, 2.9422578811645, 2.920711517334, 2.9430215358734, 2.9430215358734, 2.9430215358734, 2.9430215358734, 2.9430215358734, 2.846533536911, 2.846533536911, 2.846533536911, 2.846533536911, 3.0529131889343, 3.0529131889343, 3.1819095611572, 2.925766825676, 2.925766825676, 2.925766825676, 2.925766825676, 2.8616936206818, 2.9572348594666, 2.9422588348389, 2.8689506053925, 2.8689506053925, 2.8689506053925, 2.8689506053925, 2.8689506053925, 2.8689506053925, 2.9296684265137, 2.9296684265137, 2.7546620368958, 2.7546620368958, 2.7546620368958, 2.7182829380035, 2.686572154363, 2.2782397270203, 2.2782397270203, 2.2782397270203, 2.1955335405138, 2.1955335405138, 2.5296397209167, 2.369048833847, 2.6630215644836, 2.8298752307892, 2.7926721572876, 2.4857171376546, 2.4857171376546, 2.6207418441773, 2.6682684421539, 2.9571194251378, 2.3146250247955, 2.4517464505302, 2.7035984992981, 4.0977271795273, 4.0310860872269, 3.8761126995087, 3.8761126995087, 3.8761126995087, 3.8634939193726, 3.8634939193726, 3.8939813375473, 4.0472653706869, 4.0472653706869, 4.4539196491241, 4.4539196491241, 4.3603751659393, 4.3603751659393, 4.3861522674561, 4.4337018966675, 4.4337018966675, 4.617960691452, 4.6314716339111, 4.6314716339111, 4.6314716339111, 4.6314716339111, 4.6314716339111, 4.6314716339111, 4.6314716339111, 4.6314716339111, 4.6314716339111, 4.6314716339111, 4.6314716339111, 4.6868744850159, 4.6755294799805, 4.6952195167542, 4.7065806388855, 4.678147315979, 4.678147315979, 4.8001193470425, 4.8129216829936, 4.8129216829936, 4.8129216829936, 4.8859457969666, 4.8905630111694, 4.7945766448975, 4.7807955741882, 4.7859978675842, 4.7859978675842, 4.7859978675842, 4.7859978675842, 4.7859978675842, 4.7859978675842, 4.7859978675842, 4.7841391563416, 4.7841391563416, 4.7841391563416, 4.7841391563416, 4.7428037325541, 4.7873630523682, 4.7873630523682, 4.8260684013367, 4.8260684013367, 4.8260684013367, 4.8106842041016, 4.8106842041016, 4.8106842041016, 4.8106842041016, 4.8106842041016, 4.8106842041016, 4.8106842041016, 4.8106842041016, 4.8106842041016, 4.8106842041016, 4.8106842041016, 4.8406620025635, 4.7976222038269, 4.7837328910828, 4.8227622509003, 4.8772268295288, 4.8772268295288, 4.8772268295288, 4.8772268295288, 4.8756937980652, 4.8756937980652, 5.0283522605896, 5.0540728569031, 5.0540728569031, 5.0540728569031, 5.0540728569031, 5.08642689387, 5.1089510917664, 5.1530981063843, 5.1530981063843, 5.1530981063843, 5.2271464347839, 5.3197164535522, 5.3197164535522, 5.3197164535522, 5.3197164535522, 5.3197164535522, 5.3197164535522, 5.3197164535522, 5.3197164535522, 5.3197164535522, 5.3197164535522, 5.3197164535522, 5.4032444953919, 5.3629553318024, 5.3163769585746, 5.4121505816777, 5.4121505816777, 5.434522151947, 5.434522151947, 5.5096175670624, 5.5132417678833, 5.5748224258423, 5.5885739326477, 5.5885739326477, 5.5885739326477, 5.5885739326477, 5.6371665000916, 5.6532325744629, 5.6532325744629, 5.622282409668, 5.662594795227, 5.662594795227, 5.6908321380615, 5.7150411605835, 5.7005867958069, 5.7467746734619, 5.7371368408203, 5.7371368408203, 5.7639796733856, 5.8327202796936, 5.8604691028595, 5.8282132148743, 5.8041095733643, 5.7943502834865, 5.7943502834865, 5.7186679840088, 5.6696836948395, 5.6427373886108, 5.6427373886108, 5.5960255861282, 5.5482423305512, 5.5341544151306, 5.5341544151306, 5.5341544151306, 5.5341544151306, 5.5341544151306, 5.5444188117981, 5.5444188117981, 5.5444188117981, 5.5385475158691, 5.5385475158691, 5.5385475158691, 5.5589737892151, 5.5570500691732, 5.5570500691732, 5.5483341217041]
//      }]
  }

  params = {
    key:'player_evolution',
    playername:Drupal.settings.dgstatsCharts.playername,
    cols:'points'
  }
  $.post('/js/charts',params,function(data){
//    alert('pp');
    serie = {

         type: 'area',
         name: 'points',
         pointInterval: 24 * 3600 * 1000,
         pointStart: Date.UTC(2010, 0, 01),
         data: data.points

    };
//    console.log(data.points);
    options.series.push(serie);
    chart = new Highcharts.Chart(options);
//
  }, "json");

}