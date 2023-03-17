# Proyecto2_codigo_reproductor
## Código del Reproductor y estructura HTML. 
- GH page: https://royalmasterdevs.github.io/proy2-reproductor-musica/

1. Demo design - IMG (Desktop, not still responsive)

![Desktop use](https://github.com/RoyalMasterDevs/proy2-reproductor-musica/blob/test/assets/img/demo.png)

2. code js in app.js

`Variables & source`

```const btnPlay = document.querySelector("#btn-play");
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
let repeatSong = false;```



//json vector de elementos de titulo de la cancion, autor, agregando archivos de audio e imagen

```const songs = [
    {
        name: "Audio 1"
        author: "Autor 1
        path: "./assets/music/1.mp3",//ruta de audio
        source: "./assets/img/1.jpg" //ruta de imagen cover
    }, .... /*add more elements after to ","*/
    
    ]; 
