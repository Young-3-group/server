const Music = require('../models/music.js')

class UploadController {
    static upload(req, res) {
        let dataMusic = {
            title: req.body.title,
            artist: req.body.artist,
            url: req.file.cloudStoragePublicUrl
        }
        Music.create(dataMusic)
        .then( music => {
            console.log([music.title,music.artist,music.url])
            res.status(200).send({
                title:music.title, 
                artist: music.artist,
                url: music.url
              })
        })
        .catch( error => {
            res.status(400).send({error})
        })       
    }

    static showList(req,res){
        Music.find({})
        .then( list => {
            console.log(list)
            res.status(200).send(list)
        })
        .catch( error => {
            res.status(400).json({error})
        })
    }
}

module.exports = UploadController