const axios = require('axios')
class LyricsController {
    static getLyrics(req, res) {
        axios({
            method: "GET",
            url: `https://api.lyrics.ovh/v1/${req.body.artist}/${req.body.title}`
        })
        .then(song => {
            console.log(song.data)
            let formatted = song.data.lyrics.replace(/\n/g, '<br>')
            res.status(200).json({data:formatted})

        })
        .catch(err => {
            console.log(err.response.data)
            res.status(500).json({message: err.response.data.error || "Artist not Found"})
        })
    }
    static getVideo(req, res) {
        axios({
            method: "GET",
            url: `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${req.body.artist}`
        })
        .then(data => {
            if(data.data.artists) {
                req.artistId = data.data.artists[0].idArtist
                return axios({
                    method: "GET",
                    url: `https://theaudiodb.com/api/v1/json/1/mvid.php?i=${req.artistId}`
                })
                .then(songs => {
                    console.log('songs', songs.data.mvids)
                    let filtered = songs.data.mvids.filter(song => song.strTrack.toLowerCase() == req.body.title.toLowerCase()) 
                    console.log('filtered', filtered)
                    // console.log(filtered)
                    let url = filtered[0].strMusicVid.split('=')[1]
                    res.status(200).json({data: `http://www.youtube.com/embed/${url}`})
                })
            } else {
                res.status(400).json({message: "Artist not found"})
            }
            
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({message: "Error Please see console"})
        })
    }

}

module.exports = LyricsController