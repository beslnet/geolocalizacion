$(document).on('turbolinks:load', function() {

          lat = $('#latitude').val();
          lng = $('#longitude').val();
          var lat_and_long = lat+", "+lng;
          $("#geo-input").geocomplete({
            map: ".map_canvas",
            location: lat_and_long,
            details: "form ",
            markerOptions: {
              draggable: true
            }
          });
          
          $("#geo-input").bind("geocode:dragged", function(event, latLng){       
            $("#latitude").val(latLng.lat());
            $("#longitude").val(latLng.lng());
            $("#reset").show();
          });
          
          
          $("#reset").click(function(){
            $("#geo-input").geocomplete("resetMarker");
            $("#reset").hide();
            return false;
          });
          
          $("#find").click(function(){
            $("#geo-input").trigger("geocode");
            $("#latitude").val($('input[name=lat]').val());
            $("#longitude").val($('input[name=lng]').val());
            $("#reset").show();

          }).click();


          
  
}); 
