import express from "express"
import fs from "fs";

const app = express()
app.use(express.static('public'));
const port = 3000



app.get('/', (req, res) => {
    res.sendFile('views/index.html', { root: 'public' })
})

app.get('/text', (req, res) => {
    res.sendFile(__dirname + '/files/text.txt')
})

app.get('/music', (req, res) => {
    res.sendFile(__dirname + '/files/night.mp3')
})

app.get('/pic', (req, res) => {
    res.sendFile(__dirname + '/files/pic.jpeg')
})

app.get('/video', (req, res) => {
    res.sendFile(__dirname + '/files/whale.mp4')
})

app.get('/stream', (req, res) => {
    const videoPath = __dirname + '/files/whale.mp4'
    const videoStat = fs.statSync(videoPath);
    const fileSize = videoStat.size
    const headers = {
        'Content-Length': fileSize,
        'Content-Type': 'video/mp4',
    };
    res.writeHead(200, headers);
    fs.createReadStream(videoPath).pipe(res);
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})