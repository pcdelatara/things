// HTML element with id "bsod" assumed
const bsod = document.getElementById("bsod");

// Array of color hex codes to cycle through
const colors = [
  "#FF0000", // red
  "#FF7F00", // orange
  "#FFFF00", // yellow
  "#00FF00", // green
  "#0000FF", // blue
  "#4B0082", // indigo
  "#8F00FF"  // violet
];

// Delay function
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Function to change background colors with delay
async function cycleColors() {
  for (const color of colors) {
    bsod.style.background = color;
    await sleep(500); // 500ms delay between colors
  }
  setRainbowGradient(); // Call this after all colors
}

// Start the color cycle
cycleColors();
