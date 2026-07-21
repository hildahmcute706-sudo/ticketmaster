/*=========================================
TICKETMASTER HOME PAGE
=========================================*/

document.addEventListener("DOMContentLoaded", () => {

    const viewBtn = document.getElementById("viewTickets");
    const overlay = document.getElementById("overlay");
    const sheet = document.getElementById("sheet");
    const closeBtn = document.getElementById("closeSheet");

    const tickets = document.querySelectorAll(".ticket");

    const selectedCount = document.getElementById("selectedCount");

    const transferBtn = document.getElementById("transferBtn");

    /*=========================================
    OPEN DRAWER
    =========================================*/

    function openSheet(){

        overlay.classList.add("show");
        sheet.classList.add("show");

    }

    /*=========================================
    CLOSE DRAWER
    =========================================*/

    function closeSheet(){

        overlay.classList.remove("show");
        sheet.classList.remove("show");

    }

    viewBtn.addEventListener("click", openSheet);

    closeBtn.addEventListener("click", closeSheet);

    overlay.addEventListener("click", closeSheet);

    /*=========================================
    UPDATE COUNTER
    =========================================*/

    function updateCounter(){

        const total =
            document.querySelectorAll(".ticket.selected").length;

        selectedCount.textContent = total;

    }

    /*=========================================
    TICKET SELECTION
    =========================================*/

    tickets.forEach(ticket => {

        ticket.addEventListener("click", () => {

            ticket.classList.toggle("selected");

            const icon = ticket.querySelector("i");

            if(ticket.classList.contains("selected")){

                icon.className = "fa-solid fa-circle-check";

            }else{

                icon.className = "fa-regular fa-circle";

            }

            updateCounter();

        });

    });

    updateCounter();

    /*=========================================
    SAVE TICKETS
    =========================================*/

    function saveTickets(){

        const selected = [];

        document.querySelectorAll(".ticket.selected").forEach(ticket => {

            selected.push(
                ticket.querySelector(".ticket-top span").textContent
            );

        });

        localStorage.setItem(
            "selectedTickets",
            JSON.stringify(selected)
        );

    }

    /*=========================================
    TRANSFER PAGE
    =========================================*/

    transferBtn.addEventListener("click", () => {

        saveTickets();

        const total =
            document.querySelectorAll(".ticket.selected").length;

        if(total === 0){

            alert("Please select at least one ticket.");

            return;

        }

        window.location.href = "transfer/transfer.html";

    });

    /*=========================================
    ESC KEY CLOSE
    =========================================*/

    document.addEventListener("keydown", (e) => {

        if(e.key === "Escape"){

            closeSheet();

        }

    });

    /*=========================================
    SWIPE DOWN (MOBILE)
    =========================================*/

    let startY = 0;

    sheet.addEventListener("touchstart", (e) => {

        startY = e.touches[0].clientY;

    });

    sheet.addEventListener("touchmove", (e) => {

        const currentY = e.touches[0].clientY;

        if(currentY - startY > 120){

            closeSheet();

        }

    });

});