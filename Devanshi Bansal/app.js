let name = prompt("Please enter your name:");

        // Display a personalized greeting based on the input
        if (name) {
            document.querySelector(".mainDiv").innerText = "Namashkar " + name + ", Welcome to our platform!";
        } else {
            document.querySelector(".mainDiv").innerText = "Hello dear guest, Hope everything is fine.";
        }

        const messages = [
            "Look up at the stars, not down at your feet.",
            "The universe is under no obligation to make sense to you.",
            "To confine our attention to terrestrial matters would be to limit the human spirit.",
            "The cosmos is within us. We are made of star-stuff.",
            "Somewhere, something incredible is waiting to be known."
        ];

        // Function to generate a random message
        function getRandomMessage() {
            const randomIndex = Math.floor(Math.random() * messages.length);
            return messages[randomIndex];
        }

        // Get the element with the ID 'message'
        const message = document.querySelector('.message');
        
        // Add an event listener to the message element
        message.textContent="Look up at the stars, not down at your feet.";
        message.addEventListener('click', () => {
            for (let i = 0; i < 5; i++) {
                setTimeout(() => {
                    message.textContent = getRandomMessage();
                }, i * 3000); // Delay each message update by i * 1000 ms (1 second intervals)
            }
        });
    
        // Display the random message in the HTML
        
        document.getElementById("calculate-button").addEventListener("click", function() {
            const celestialBody = document.getElementById("celestial-body").value;
            const distances = {
                Sun: 149600000,
                Mercury: 91600000,
                Venus: 41400000,
                Earth: 0,
                Mars: 78340000,
                Jupiter: 628730000,
                Saturn: 1275000000,
                Uranus: 2723950000,
                Neptune: 4351400000,
                Moon: 384400
            };

            const distance = distances[celestialBody];

            if (distance !== undefined) {
                document.getElementById("result").innerText = 
                    celestialBody === "Earth" ? "You are on Earth!" : 
            ` Distance from Earth to  ${celestialBody} is ${distance.toLocaleString()} km.`;
            } else {
                document.getElementById("result").innerText = "Please select a celestial body.";
            }
        });

        // Moons Counter
        document.getElementById("calculate-btn").addEventListener("click", function() {
            const planet = document.getElementById("planet").value;
            const moons = {
                Mercury: 0,
                Venus: 0,
                Earth: 1,
                Mars: 2,
                Jupiter: 79,
                Saturn: 83,
                Uranus: 27,
                Neptune: 14
            };
            const numberOfMoons = moons[planet];

            if (numberOfMoons !== undefined) {
                document.getElementById("resultt").innerText = 
                   ` ${planet} has a total of ${numberOfMoons} moon(s).`;
            } else {
                document.getElementById("resultt").innerText = "Please select a planet.";
        }
});