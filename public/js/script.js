const shareButton = document.querySelector('.content-article__share-button')
const shareBalloon = document.querySelector('.share-balloon')

shareButton.addEventListener('click', () => {
  shareBalloon.classList.toggle('state__visible')
  const viewportWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
  if (viewportWidth < 768) {
    shareButton.classList.toggle('state__active-mobile-share-button')
  }
})

window.addEventListener('click', e => {
  // Remove visilibity from the share balloon when clicking outside of it or the
  // share button
  if (!shareButton.contains(e.target) && !shareBalloon.contains(e.target)) {
    shareBalloon.classList.remove('state__visible')
    shareButton.classList.remove('state__active-mobile-share-button')
  }
})