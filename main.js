let progress = document.getElementById('progress');
let playImg = document.getElementById('playImg');
let pauseImg = document.getElementById('pauseImg');
let song = document.getElementById('song');
let songImg = document.getElementById('songImg');
let songName = document.getElementById('songName');
let singerName = document.getElementById('singerName');
let forWard = document.getElementById('forWard');
let backWard = document.getElementById('backWard');
let setting = document.getElementById('setting');
let home = document.getElementById('home');
let settingPage = document.getElementById('settingPage');
let musicPlayerPage = document.getElementById('musicPlayerPage');
let menuPage = document.getElementById('menuPage');
let backIcon = document.getElementById('backIcon');

let mode = 'play';
let Rotate = 0;
let index = 0;

let songs = [
  {songPath: 'calmDown.mp3',
  songimg: 'calmDown.png',
    singername: 'Rema',
    songname: 'CALM DOWN',
  },
  {
    songPath: 'setonfirexanoutherlove.mp3',
      songimg: 'setonfirexanoutherlove.png',
      singername: 'A x A',
      songname: 'A x A'
  }
  ]

forWard.onclick = function() {
  index += 1;
  getSong()
  song.play()
}
backWard.onclick = function() {
  index -= 1;
  getSong()
  song.play()
}

function getSong(){
  song.src = songs[index].songPath;
  songImg.src = songs[index].songimg;
  songName.innerHTML = songs[index].songname;
  singerName.innerHTML = songs[index].singername;
}


song.onloadedmetadata = function(){
  progress.max = song.duration;
  progress.value = song.currentTime;
}

function playPause(){
  if(mode == 'play'){
    mode = 'pause';
    playImg.style.display = 'none';
    pauseImg.style.display = 'block';
    songImg.classList.add('Spining');
    song.play();
  }
  else if(mode == 'pause'){
    pauseImg.style.display = 'none';
    playImg.style.display = 'block';
    songImg.classList.remove('Spining')
    song.pause();
    mode = 'play';
  }
}

if(song.play()){
  setInterval(()=>{
    progress.value = song.currentTime;
  },500)
}

progress.onchange = function(){
  song.currentTime = progress.value;
}

setting.onclick = function(){
  musicPlayerPage.style.left = '-400px';
  settingPage.style.left = '0'
}
home.onclick = function(){
  musicPlayerPage.style.left = '0px';
  settingPage.style.left = '400px'
}
backIcon.onclick = function(){
  menuPage.style.left = '0px';
  musicPlayerPage.style.left = '400px'
}


function showSongs(){
  let box = '';
  for(let i = 0; i < songs.length; i++){
    box += `
    <img src = '${songs[i].songimg}'>
    <div class = 'details'>
    <h3>${songs[i].songname}</h3>
    <p>${songs[i].singername}</p>
    </div>
    <button onclick = 'playSong(${i})'>play</button>
    `
  }
  
  let div = document.createElement('div');
  div.innerHTML = box;
  div.classList.add('songBox')
  document.getElementById('menuPage').appendChild(div)
}


function playSong(i){
  song.src = songs[i].songPath;
  songImg.src = songs[i].songimg;
  songName.innerHTML = songs[i].songname;
  singerName.innerHTML = songs[i].singername;
  song.play()
  index = i;
  menuPage.style.left = '-400px';
  musicPlayerPage.style.left = '0px'
  mode = 'pause';
  playImg.style.display = 'none';
  pauseImg.style.display = 'block';
  songImg.classList.add('Spining');
  song.play();
}


showSongs()
getSong()