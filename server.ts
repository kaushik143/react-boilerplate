import express from 'express'
import {config} from 'node-config-ts'
import path from 'path'

const app = express()

app.use('/public', express.static(path.join(__dirname, 'public')))

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.listen(config.port, () => {
  // tslint:disable-next-line: no-console
  console.log(`Example app listening at http://localhost:${config.port}`)
})
