// Get references to DOM elements
const playlist = document.getElementById('playlist');
const audioPlayer = document.getElementById('audio-player');
const songInfo = document.getElementById('song-info');
const progressBar = document.getElementById('progress-bar');
const playPauseBtn = document.getElementById('play-pause-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

// Initialize currentSongIndex 
let currentSongIndex = 0;

// Define an array of songs with their information
const songs = [
    { title: 'Chadhya', artist: 'Mitraz', src: "../Assets/Audio/Chadya - Mitraz_192(Ghantalele.com).mp3" },
    { title: 'Sahibaa', artist: 'Darshan Raval, Antara Mitra', src: "../Assets/Audio/Sahibaa_192(Ghantalele.com).mp3" },
    { title: 'Dreams', artist: 'Zaeden', src: "../Assets/Audio/Dreams  - Zaeden.mp3" },
    { title: 'Crown', artist: 'King', src: "../Assets/Audio/CROWN - King.mp3" },
    { title: 'Kehne Ko Kya Raha', artist: ' Arjun Kanungo ft Nemo', src: "../Assets/Audio/Kehne Ko Kya Raha - Arjun Kanungo ft Nemo   Official Audio.mp3" },
    { title: 'India to Japan', artist: 'Arjun Kanungo ft Cyber Rui Shirley Setia', src: "../Assets/Audio/India to Japan  - Arjun Kanungo ft Cyber Rui Shirley Setia Official Audio.mp3" },
    { title: 'Haaye Dard', artist: 'Darshan Raval', src: "../Assets/Audio/Haaye Dard - Darshan Raval.mp3" },
    { title: 'Ho Nai Sakda', artist: 'Darshan Raval', src: "../Assets/Audio/Ho Nai Sakda - Darshan Raval.mp3" },    
    { title: 'Ek Tu Hi Hai', artist: 'Stebin Ben', src: "../Assets/Audio/Ek Tu Hi Hai - Stebin Ben.mp3" },
    { title: 'Faasla', artist: 'Darshan Raval', src: "../Assets/Audio/Faasla - Darshan Raval.mp3" },
    { title: 'Hum Tumse', artist: 'King', src: "../Assets/Audio/Hum Tumse - King.mp3" },
    { title: 'Jaane De', artist: 'Darshan Raval', src: "../Assets/Audio/Jaane De - Darshan Raval.mp3" },
    { title: 'Jannat', artist: 'Mitraz', src: "../Assets/Audio/Jannat - MITRAZ  Official Video.mp3" },
    { title: 'Lo Aayi Barsaat', artist: ' Darshan Raval', src: "../Assets/Audio/Lo Aayi Barsaat - Darshan Raval.mp3" },
    { title: 'Mahiye Jinna Sohna Unplugged ', artist: 'Darshan Raval', src: "../Assets/Audio/Mahiye Jinna Sohna Unplugged - Darshan Raval.mp3" },
    { title: 'Mannat', artist: 'Darshan Raval', src: "../Assets/Audio/Mannat - Darshan Raval.mp3" },
    { title: 'Saahiba', artist: 'Darshan Raval', src: "../Assets/Audio/Saahiba - Darshan Raval.mp3" },        
    { title: 'Sanam Aa Gaya', artist: 'Stebin Ben', src: "../Assets/Audio/Sanam Aa Gaya - Stebin Ben.mp3" },
    { title: 'Sach Bata Mujhe', artist: 'Arjun Kanungo ft Shirley Setia', src: "../Assets/Audio/Sach Bata Mujhe - Arjun Kanungo.mp3" },
];

// Function to play a song based on its index in the songs array
function playSong(index) {
    const song = songs[index];
    audioPlayer.src = song.src;
    songInfo.textContent = `${song.title} - ${song.artist}`;
    audioPlayer.play(); // Automatically play the selected song
    playPauseBtn.classList = 'fa fa-pause'; // Set the button to pause icon
}

// Function to update the progress bar based on the current playback time
function updateProgressBar() {
    const percentage = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    progressBar.style.width = `${percentage}%`;
}

// Event listeners for updating the progress bar and playing the next song
audioPlayer.addEventListener('timeupdate', updateProgressBar);
audioPlayer.addEventListener('ended', () => {
    if (currentSongIndex < songs.length - 1) {
        currentSongIndex++;
        playSong(currentSongIndex);
        audioPlayer.play(); // Start the next song when the current one ends
    }
});

// Event listener for the play/pause button
playPauseBtn.addEventListener('click', () => {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseBtn.classList = 'fa fa-pause';
    } else {
        audioPlayer.pause();
        playPauseBtn.classList = 'fa fa-play';
    }
});

// Event listener for clicking on a song in the playlist
playlist.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        const index = Array.from(e.target.parentElement.children).indexOf(e.target);
        currentSongIndex = index;
        playSong(currentSongIndex);
    }
});

// Event listener for the previous button
prevBtn.addEventListener('click', () => {
    if (currentSongIndex > 0) {
        currentSongIndex--;
        playSong(currentSongIndex);
        audioPlayer.play(); // Start playing the selected song
        playPauseBtn.classList = 'fa fa-pause';
    }
});

// Event listener for the next button
nextBtn.addEventListener('click', () => {
    if (currentSongIndex < songs.length - 1) {
        currentSongIndex++;
        playSong(currentSongIndex);
        audioPlayer.play(); // Start playing the selected song
        playPauseBtn.classList = 'fa fa-pause';
    }
});

function updateProgressBar() {
    const currentTime = formatTime(audioPlayer.currentTime);
    const totalDuration = formatTime(audioPlayer.duration);
    const percentage = (audioPlayer.currentTime / audioPlayer.duration) * 100;

    progressBar.style.width = `${percentage}%`;
    currentTimeElement.textContent = currentTime;
    totalDurationElement.textContent = totalDuration;
}

// Function to format time in minutes and seconds
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

// Update these variables to reference the new elements for time display
const currentTimeElement = document.getElementById('current-time');
const totalDurationElement = document.getElementById('total-duration');
