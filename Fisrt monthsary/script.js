const CORRECT_PASSWORD = "102226";
const PASSWORD_HINT = "our monthsary date";

const AUDIO_FILE = "Music/someday.mp3";
const SONG_TITLE = "Someday";
const SONG_ARTIST = "The Ridleys ♡";

// Get elements
const lockScreen = document.getElementById("lockScreen");
const mainContent = document.getElementById("mainContent");

const passwordInput = document.getElementById("passwordInput");
const unlockBtn = document.getElementById("unlockBtn");
const togglePassword = document.getElementById("togglePassword");

const passwordError = document.getElementById("passwordError");
const passwordHint = document.getElementById("passwordHint");

const song = document.getElementById("ourSong");
const musicButton = document.getElementById("musicButton");
const musicButton2 = document.getElementById("musicButton2");

const songTitle = document.getElementById("songTitle");
const songArtist = document.getElementById("songArtist");

// Set password hint
passwordHint.textContent = PASSWORD_HINT;

// Set song information
song.src = AUDIO_FILE;
songTitle.textContent = SONG_TITLE;
songArtist.textContent = SONG_ARTIST;


// =========================
// PASSWORD UNLOCK
// =========================

function unlock() {

    if (passwordInput.value === CORRECT_PASSWORD) {

        // Hide password screen
        lockScreen.classList.add("hidden");

        // Show website
        mainContent.classList.remove("hidden");

        // Start music after user interaction
        song.volume = 0.4;

        song.play().catch(() => {
            console.log("Music could not autoplay.");
        });

        // Go to top
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    } else {

        passwordError.textContent =
            "Hmm... that's not it, baby. Try again. 🤍";

        passwordInput.value = "";
        passwordInput.focus();
    }
}


// Unlock button
unlockBtn.addEventListener("click", unlock);


// Press Enter to unlock
passwordInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        unlock();
    }

});


// =========================
// SHOW / HIDE PASSWORD
// =========================

togglePassword.addEventListener("click", function() {

    const isPassword = passwordInput.type === "password";

    if (isPassword) {

        passwordInput.type = "text";
        togglePassword.textContent = "○";

    } else {

        passwordInput.type = "password";
        togglePassword.textContent = "◉";

    }

});


// =========================
// SPOTIFY BUTTON
// =========================

function openSpotify() {

    window.open(
        "https://open.spotify.com/track/1Qha6JOhv7VKIHzvn8I36I?si=3c7d2fbbe44c4c1c",
        "_blank"
    );

}

musicButton.addEventListener("click", openSpotify);
musicButton2.addEventListener("click", openSpotify);


// =========================
// MUSIC ENDED
// =========================

song.addEventListener("ended", function() {

    musicButton.textContent = "♪ Play our song";
    musicButton2.textContent = "▶";

});