let showingHome1 = true; // start with home1

        function toggleHome() {
            document.querySelectorAll("section").forEach(sec => sec.classList.remove("active"));
            if (showingHome1) {
                document.getElementById("home2").classList.add("active");
            } else {
                document.getElementById("home1").classList.add("active");
            }
            showingHome1 = !showingHome1; // flip state
        }

        function showSection(id) {
            document.querySelectorAll("section").forEach(sec => sec.classList.remove("active"));
            document.getElementById(id).classList.add("active");
        }