const seatsContainer = document.getElementById("seats");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");
const movieVideo = document.getElementById("movie-video");

let ticketPrice = +movieSelect.value;


function createSeats() {
    seatsContainer.innerHTML = '';
    for (let i = 0; i < 30; i++) {
        const seat = document.createElement("div");
      
        if (Math.random() < 0.3) { 
            seat.classList.add("seat", "occupied");
        } else {
            seat.classList.add("seat", "available");
            seat.addEventListener("click", toggleSeat);
        }
        
        seatsContainer.appendChild(seat);
    }
}


movieSelect.addEventListener("change", (e) => {
    ticketPrice = +e.target.value;
    movieVideo.src = e.target.options[e.target.selectedIndex].getAttribute("data-video");
    updateSelectedSeats();
});

// Toggle seat selection
function toggleSeat(e) {
    if (e.target.classList.contains("available")) {
        e.target.classList.toggle("selected");
        e.target.classList.toggle("available");
        updateSelectedSeats();
    } else if (e.target.classList.contains("selected")) {
        e.target.classList.toggle("selected");
        e.target.classList.toggle("available");
        updateSelectedSeats();
    }
}


function updateSelectedSeats() {
    const selectedSeats = document.querySelectorAll(".seat.selected");
    const selectedSeatsCount = selectedSeats.length;

    count.textContent = selectedSeatsCount;
    total.textContent = selectedSeatsCount * ticketPrice;
}

// Initial seat creation
createSeats();