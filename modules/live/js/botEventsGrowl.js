Drupal.behaviors.botEventGrowl = function(){

  var hashKey = Drupal.settings.dgstatsLive.hashKey;
  var lastEid = 0;

 // $.growl.settings.displayTimeout = 11000;
  
  var f1 = setInterval(function() {
   // console.log('lastEid: ' + lastEid);
  
  $.post("/server/live/js/get-events", { last_eid: lastEid,hash_key:hashKey },
   function(data,success){
     if(success){
       //console.log(data)
       if(data.data.hashKey){
         hashKey = data.data.hashKey
       }
       var events =  data.data.events;
       //console.log('events.lenght: ' + events.length);
        //alert("Data Loaded: " + data.data.events.length);
        for(var i = 0;i< events.length;i++){
        // for(var event in data.data.events){
        event = events[i];
        //console.log(event);
        
        $.gritter.add(event);

        lastEid = event.eid
        }
     }
   }, "json");



 


 }, 15000);
}
$.extend($.gritter.options, {
	fade_in_speed: 2000,//'medium', // how fast notifications fade in (string or int)
	fade_out_speed: 2000, // how fast the notices fade out
	time: 8500 // hang on the screen for...
})