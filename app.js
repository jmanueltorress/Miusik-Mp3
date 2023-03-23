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
//agregar archivos para su uso en carpeta assets img=source& music=path
const songs = [
    {

        name: "The Rage",
        author: "OMAS & Awon",
        path: "./assets/music/music1.mp3",//ruta de audio
        source: "./assets/img/ncs1.png" //ruta de imagen cover
    },
    {
         name: "Lost Sky",
         author: "Fearless ft cris linton",
         path: "./assets/music/music2.mp3",
         source: "./assets/img/ncs2.png"
    },
     {
          name: "Sound no.1",
          author: "autor music",
          path: "./assets/music/3.mp3",
          source: "./assets/img/imgd.png"
      },
      {
          name: "Sound no.2",
          author: "autor music",
          path: "./assets/music/4.mp3",
          source: "./assets/img/imgd.png"
      },
      {
         name: "Sound no.3",
         author: "autor music",
         path: "./assets/music/5.mp3",
         source: "./assets/img/imgd.png"
     },
     {
         name: "Sound no.4",
         author: "autor music",
         path: "./assets/music/6.mp3",
         source: "./assets/img/imgd.png"
     },
     {
         name: "Sound no.5",
         author: "autor music",
         path: "./assets/music/7.mp3",
         source: "./assets/img/imgd.png"
     },
     {
         name: "Sound no.6",
         author: "autor music",
         path: "./assets/music/8.mp3",
         source: "./assets/img/imgd.png"
     },
     {
         name: "Sound no.7",
         author: "autor music",
        path: "./assets/music/9.mp3",
        source: "./assets/img/imgd.png"

    }
    //agregar coma a llave final para agregar mas elementos
    
    
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