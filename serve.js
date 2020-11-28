import express, { static as handleStatic } from 'express'

const app = express()

// static files
app.use(handleStatic('static'))
app.use(handleStatic('dist'))

app.get('/ping', (req, res) => {
    res.end('pong')
})

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log('Serving on port ' + port)
})
