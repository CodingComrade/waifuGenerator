//const url = `https://api.waifu.im/random/?is_nsfw=true&full=false` //NSFW version
const url = `https://api.waifu.im/random/`

document.querySelector('img').addEventListener('click', refresh)

function refresh() {
  location.reload()
}


function getFetch() {
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        //console.log(data.images[0].source)
        document.querySelector('#sauce').innerText = "Sauce: " + data.images[0].source
        document.querySelector('#sauce').href = data.images[0].source
        document.querySelector('img').src = data.images[0].url
      })
      .catch(err => {
        console.log(`error ${err}`)
    });

}

getFetch()


