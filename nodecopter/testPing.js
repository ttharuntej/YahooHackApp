var five = require("johnny-five"),
    board, ping;

board = new five.Board();

console.log("got here");

board.on("ready", function() {

  // Create a new `ping` hardware instance.
  ping = new five.Ping(6);

  // Properties

  // ping.microseconds
  //
  // Roundtrip distance in microseconds
  //

  // ping.inches
  //
  // Calculated distance to object in inches
  //

  // ping.cm
  //
  // Calculated distance to object in centimeters
  //


  // Ping Event API

  // "data" get the current reading from the ping
  ping.on("data", function( err, value ) {
    console.log( "data", value );
  });

  ping.on("change", function( err, value ) {

    console.log( typeof this.inches );
    console.log( "Object is " + this.inches + "inches away" );
  });
});
