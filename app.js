const btnPlay = document.querySelector("#btn-play");
const btnPlayIcon = document.querySelector("#btn-play-icon");
const btnRepeat = document.querySelector("#btn-repeat");
const btnPrev = document.querySelector("#btn-prev");
const btnNext = document.querySelector("#btn-next");
const btnVolume = document.querySelector("#btn-volume");
const btnVolumeIcon = document.querySelector("#btn-volume i");
const playerVolume = document.querySelector("#player-volume");
const songName = document.querySelector("#song-name");
const songAuthor = document.querySelector("#song-author");
const playerCurrentTime = document.querySelector("#player-current-time");
const playerDuration = document.querySelector("#player-duration");
const playerProgress = document.querySelector("#player-progress");
const audioPlayer = document.querySelector("#audio-player");
const Cover = document.querySelector("#cover");

let currentSong = 0;
let repeatSong = false;

//json vector de elementos de titulo de la cancion, autor, agregando archivos de audio e imagen
const songs = [
    {
        name: "With Out me",
        author: "Eminem",
        path: "./assets/music/1.mp3",//ruta de audio
        source: "./assets/img/1.jpg" //ruta de imagen cover
    },
    {
         name: "Billie Jean",
         author: "Michael Jackson",
         path: "./assets/music/2.mp3",
         source: "./assets/img/2.jpeg"
    },
    {
         name: "21 pilots",
         author: "Stressed Out",
         path: "./assets/music/3.mp3",
         source: "./assets/img/3.jpg"
     },
     {
         name: "Believer",
         author: "Imagine Dragons",
         path: "./assets/music/4.mp3",
         source: "./assets/img/4.jpg"
     },
     {
        name: "In Da CLub",
        author: "50 cent",
        path: "./assets/music/5.mp3",
        source: "./assets/img/5.jpg"
    },
    {
        name: "Ella",
        author: "Junior H",
        path: "./assets/music/6.mp3",
        source: "./assets/img/6.webp"
    },
    {
        name: "Ojos Marrones",
        author: "Lasso ft S.Yatra",
        path: "./assets/music/7.mp3",
        source: "./assets/img/7.jpg"
    },
    {
        name: "Vol.15",
        author: "Bzrp||ALEMAN",
        path: "./assets/music/8.mp3",
        source: "./assets/img/8.jpg"
    },
    {
        name: "Janji",
        author: "Heroes Tonight",
        path: "./assets/music/9.mp3",
        source: "./assets/img/9.png"
    }
    
    
];





btnPlay.addEventListener("click", () => togglePlaySong());
btnPrev.addEventListener("click", () => changeSong(false));
btnNext.addEventListener("click", () => changeSong());
btnRepeat.addEventListener("click", () => toggleRepeatSong());
playerVolume.addEventListener("input", () => changeVolume());
playerProgress.addEventListener("input", () => changeTime());
audioPlayer.addEventListener("timeupdate", () => timeUpdate());
audioPlayer.addEventListener("ended", () => ended());

const togglePlaySong = () => {
    if (audioPlayer.paused) {
        audioPlayer.play();
        btnPlayIcon.classList.replace("bi-play-fill", "bi-pause-fill");
    } else {
        audioPlayer.pause();
        btnPlayIcon.classList.replace("bi-pause-fill", "bi-play-fill");
    }
};

const changeSong = (next = true) => {
    if (next && currentSong < songs.length - 1) {
        currentSong++;
    } else if (!next && currentSong > 0) {
        currentSong--;
    } else {
        return;
    }

    updatePlayer();
    togglePlaySong();
};

const updatePlayer = () => {
    const song = songs[currentSong];

    songName.innerHTML = song.name;
    songAuthor.innerHTML = song.author;
    audioPlayer.src = song.path;
    Cover.src=song.source;
    playerProgress.value = audioPlayer.currentTime;
};

const toggleRepeatSong = () => {
    repeatSong = !repeatSong;
    btnRepeat.classList.toggle("btn-activated");
};

const timeUpdate = () => {
    const { currentTime, duration } = audioPlayer;

    if (isNaN(duration)) return;

    playerDuration.innerHTML = formatSecondsToMinutes(duration);
    playerCurrentTime.innerHTML = formatSecondsToMinutes(currentTime);
    playerProgress.max = duration;
    playerProgress.value = currentTime;
};

const changeVolume = () => {
    const { value } = playerVolume;

    audioPlayer.volume = value;

    if (value == 0) {
        btnVolumeIcon.classList.replace("bi-volume-up-fill", "bi-volume-mute-fill");
    } else {
        btnVolumeIcon.classList.replace("bi-volume-mute-fill", "bi-volume-up-fill");
    }
};

const changeTime = () => {
    audioPlayer.currentTime = playerProgress.value;
};

const formatSecondsToMinutes = (seconds) => {
    return new Date(seconds * 1000).toISOString().slice(14, 19);
};

const ended = () => {
    repeatSong ? togglePlaySong() : changeSong(true);
};


window.onload = () => {
    updatePlayer();
};