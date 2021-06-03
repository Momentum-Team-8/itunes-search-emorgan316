

const url = 'https://itunes.apple.com/search?'
const form = document.getElementById('input-field')
const container = document.querySelector('.container')
const searchInput = document.getElementById('search-input')
searchResults = document.getElementById('output')

document.addEventListener('submit', event => {
    event.preventDefault()
    searchArtist()
});

function searchArtist() {
    const search = searchInput.value
    fetch(url + 'term=' + `${search}` + '&entity=song' + '&limit=10')
    .then(response =>  response.json())
    .then((data) => {

        document.getElementById('output').innerHTML = '';
        for (let item of data.results) {
            console.log(item)
            renderResults(item)
        }
    })
};

function renderResults(data) {
    
    let eachResult = document.createElement('li')
    eachResult.id = data.trackId
    searchResults.appendChild(eachResult)

    let trackName = document.createElement('div')
    trackName.setAttribute('id', 'track-name')
    eachResult.appendChild(trackName)
    trackName.innerHTML = `${data.trackName}`

    let trackArt = document.createElement('img')
    trackArt.setAttribute('id', 'track-image')
    eachResult.appendChild(trackArt)
    trackArt.src = `${data.artworkUrl60}`

    let artist = document.createElement('div')
    artist.setAttribute('id', 'artist-name')
    eachResult.appendChild(artist)
    artist.innerHTML = `${data.artistName}`

        let audio = document.createElement('audio')
        audio.id = 'audio-preview'
        audio.controls = 'controls'
        audio.src = `${data.previewUrl}`
        eachResult.appendChild(audio)

}
