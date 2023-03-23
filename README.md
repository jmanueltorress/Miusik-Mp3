# Proyecto2_reproductor_ musica
## Código del Reproductor y estructura HTML. 
- GH page: https://jmanueltorress.github.io/reproductor-mp3/



1. Demo design - IMG (Desktop, not still responsive)

![Desktop use](https://github.com/RoyalMasterDevs/proy2-reproductor-musica/blob/test/assets/img/demo2.png)

2. ### Music source - credits 
    ##### La musica utilizada en este proyecto es sin fines de lucro, no se pretende ganar dinero de el reproductor de musica, los 2 track agregados son propiedad de NCS. Con fines demostrativos de usabilidad de la app web.
       -Track: OMAS & Awon - The Rage (feat. Micah Martin) [NCS Release]
    Music provided by NoCopyrightSounds.
    Watch:    • OMAS & Awon - The...  
     Free Download / Stream: http://ncs.io/therage


       -Track: Lost Sky - Fearless pt.II (feat. Chris Linton) [NCS Release]
    Music provided by NoCopyrightSounds.
    Watch:    • Lost Sky - Fearle...  
    Free Download / Stream: http://ncs.io/Fearless2YO

3. Code js in app.js

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



