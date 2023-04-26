function hello() {
    document.getElementById("hello").innerHTML = "Hello";
  };

function sin() {
    context = new AudioContext();
    osc = context.createOscillator();
    osc.frequency.setValueAtTime(880, 2); // value in hertz
    osc.connect(context.destination);

    /* Let's play a sine wave for 5 seconds. */

    osc.start();
    osc.stop(context.currentTime + 5);
}