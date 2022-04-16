const firstItem = {
  city: 'Rostov-on-Don',
  hotel: 'LCD admiral',
  area: '81 m<sup>2</sup>',
  repairTime: '3.5 months',
  repairCost: 'Upon Request'
}

const secondItem = {
  city: 'Sochi',
  hotel: 'Thieves',
  area: '105 m<sup>2</sup>',
  repairTime: '4 months',
  repairCost: 'Upon Request'
}

const thirdItem = {
  city: 'Rostov-on-Don',
  hotel: 'LCD admiral',
  area: '93 m<sup>2</sup>',
  repairTime: '3 months',
  repairCost: 'Upon Request'
}

const slLeft = document.getElementById('slider-left')
const slFirst = document.getElementById('slider-first')
const slSecond = document.getElementById('slider-second')
const slThird = document.getElementById('slider-third')
const slRight = document.getElementById('slider-right')
const firstTop = document.getElementById('firstSlide')
const secondTop = document.getElementById('secondSlide')
const thirdTop = document.getElementById('thirdSlide')
const imageNode = document.getElementById('project__img')

const selectFirst = function() {
  slFirst.className += ' active';
  firstTop.className += ' selected'

  slSecond.classList.remove('active')
  slThird.classList.remove('active')
  secondTop.classList.remove('selected')
  thirdTop.classList.remove('selected')

  slFirst.src = 'img/projects__dot-active.svg';
  slSecond.src = 'img/projects__dot-disabled.svg';
  slThird.src = 'img/projects__dot-disabled.svg';
  imageNode.src ='img/projects__item-1.png'
  document.getElementById('city').innerHTML = firstItem.city + '<br>' + firstItem.hotel;
  document.getElementById('area').innerHTML = firstItem.area
  document.getElementById('repairTime').innerHTML = firstItem.repairTime
  document.getElementById('repairCost').innerHTML = firstItem.repairCost
}

const selectSecond = function() {
  slSecond.className += ' active';
  secondTop.className += ' selected'

  slFirst.classList.remove('active')
  slThird.classList.remove('active')
  firstTop.classList.remove('selected')
  thirdTop.classList.remove('selected')

  slFirst.src = 'img/projects__dot-disabled.svg';
  slSecond.src = 'img/projects__dot-active.svg';
  slThird.src = 'img/projects__dot-disabled.svg';
  imageNode.src ='img/projects__item-2.jpg'
  document.getElementById('city').innerHTML = secondItem.city + '<br>' + secondItem.hotel;
  document.getElementById('area').innerHTML = secondItem.area
  document.getElementById('repairTime').innerHTML = secondItem.repairTime
  document.getElementById('repairCost').innerHTML = secondItem.repairCost
}

const selectThird = function() {
  slThird.className += ' active';
  thirdTop.className += ' selected'

  slSecond.classList.remove('active')
  slFirst.classList.remove('active')
  firstTop.classList.remove('selected')
  secondTop.classList.remove('selected')
  
  slFirst.src = 'img/projects__dot-disabled.svg';
  slSecond.src = 'img/projects__dot-disabled.svg';
  slThird.src = 'img/projects__dot-active.svg';
  imageNode.src ='img/projects__item-3.jpg'
  document.getElementById('city').innerHTML = thirdItem.city + '<br>' + thirdItem.hotel;
  document.getElementById('area').innerHTML = thirdItem.area
  document.getElementById('repairTime').innerHTML = thirdItem.repairTime
  document.getElementById('repairCost').innerHTML = thirdItem.repairCost
}



slLeft.addEventListener('click', () => {
  if (slFirst.classList.contains('active')) {
    selectThird()
  }
  else if (slSecond.classList.contains('active')) {
    selectFirst()
  }
  else if (slThird.classList.contains('active')) {
    selectSecond()
  }
  else {
    console.log('Что-то пошло не так')
  }
})

slRight.addEventListener('click', () => {
  if (slFirst.classList.contains('active')) {
    selectSecond()
  }
  else if (slSecond.classList.contains('active')) {
    selectThird()
  }
  else if (slThird.classList.contains('active')) {
    selectFirst()
  }
  else {
    console.log('Что-то пошло не так')
  }
})

slFirst.addEventListener('click', () => {
  selectFirst()
})

firstTop.addEventListener('click', () => {
  selectFirst()
})

slSecond.addEventListener('click', () => {
  selectSecond()
})

secondTop.addEventListener('click', () => {
  selectSecond()
})

slThird.addEventListener('click', () => {
  selectThird()
})

thirdTop.addEventListener('click', () => {
  selectThird()
})