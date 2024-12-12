let isGrowing = true;  // Flag to control if the dot is growing or shrinking
let isMinuteChange = false;  // Flag to check if the minute just changed

// Function to detect minute change
function isNewMinute() {
    const currentMinute = new Date().getMinutes();
    return currentMinute % 1 === 0; // True when it's the start of a new minute
}

function updateDotSize() {
    const dot = document.getElementById('dot');
    
    // Get current size from the style attribute or default to 50px
    let currentSize = parseInt(dot.style.width) || 50;

    // Determine the size change amount
    const baseSize = 50;  // Base size for heartbeat effect
    const maxSize = isMinuteChange ? 120 : 100;  // Increase to 120px at the start of a new minute
    
    // Heartbeat effect: Grow and shrink
    if (isGrowing) {
        currentSize += 100;  // Grow by 100px per cycle
        if (currentSize >= maxSize) {
            isGrowing = false;  // Shrink after reaching max size
        }
    } else {
        currentSize -= 100;  // Shrink by 100px per cycle
        if (currentSize <= baseSize) {
            isGrowing = true;  // Grow again after reaching min size
        }
    }

    // Apply the new size to the dot
    dot.style.width = `${currentSize}px`;
    dot.style.height = `${currentSize}px`;
}

// Update the dot size every second (1000 milliseconds)
setInterval(() => {
    updateDotSize();
    checkMinuteChange();
    checkHourChange();
}, 1000);

// Initialize the size when the page loads
updateDotSize();

function checkMinuteChange() {
    const now = new Date();
    const seconds = now.getSeconds();


    // Check if the seconds are 0 (new minute)
    if (seconds === 0) {
        document.body.classList.add('red-background');  // Turn background red
        
    } else {
        document.body.classList.remove('red-background');  // Revert background
      
    }
}

function checkHourChange() {
    const now = new Date();
    const minutes = now.getMinutes();
    let textObject = document.getElementById("letsMoveText");
 
 // Show text for the first 1 minute of each hour
    if (minutes < 1) {
      textObject.classList.remove("textHide");    
    }
    else{
      textObject.classList.add("textHide");    
    }
}
