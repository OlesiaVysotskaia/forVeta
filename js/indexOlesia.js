let b = anime.timeline({
autoplay: false
})

b
.add({
  targets: '#B',
  rotate: ['90deg','0deg'],
  color: '#F3A251',
  easing: 'easeInOutBack',
  duration: 500,

  begin: function () {
    document.querySelector('#B').style.textShadow = '#F3A251 0 0 10px'}
})
let bPlay =
document.querySelector('#B')

bPlay.onclick = b.play




let u = anime.timeline({
autoplay: false
})

u
.add({
  targets: '#U',
  rotate: ['180deg','0deg'],
  color: '#59AEFF',
  easing: 'easeInOutBack',
  duration: 500,

  begin: function () {
    document.querySelector('#U').style.textShadow = '#59AEFF 0 0 10px'}
})
let uPlay =
document.querySelector('#U')

uPlay.onclick = u.play




let l = anime.timeline({
autoplay: false
})

l
.add({
  targets: '#L',
  rotate: ['180deg','0deg'],
  color: '#ED5A62',
  easing: 'easeInOutBack',
  duration: 500,

  begin: function () {
    document.querySelector('#L').style.textShadow = '#ED5A62 0 0 10px'}
})
let lPlay =
document.querySelector('#L')

lPlay.onclick = l.play




let sh = anime.timeline({
autoplay: false
})

sh
.add({
  targets: '#SH',
  rotate: ['180deg','0deg'],
  color: '#D275FF',
  easing: 'easeInOutBack',
  duration: 500,

  begin: function () {
    document.querySelector('#SH').style.textShadow = '#D275FF 0 0 10px'}
})
let shPlay =
document.querySelector('#SH')

shPlay.onclick = sh.play




let i = anime.timeline({
autoplay: false
})

i
.add({
  targets: '#I',
  rotate: ['180deg','0deg'],
  color: '#6BE4F9',
  easing: 'easeInOutBack',
  duration: 500,

  begin: function () {
    document.querySelector('#I').style.textShadow = '#6BE4F9 0 0 10px'}
})
let iPlay =
document.querySelector('#I')

iPlay.onclick = i.play




let t = anime.timeline({
autoplay: false
})

t
.add({
  targets: '#T',
  rotate: ['180deg','0deg'],
  color: '#A8EA67',
  easing: 'easeInOutBack',
  duration: 500,

  begin: function () {
    document.querySelector('#T').style.textShadow = '#A8EA67 0 0 10px'}
})
let tPlay =
document.querySelector('#T')

tPlay.onclick = t.play
