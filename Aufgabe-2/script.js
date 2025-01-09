import http from 'http'
import fs from 'fs'


const port = process.env.PORT || 3030;

const server = http.createServer((req, res) => {
  try {
      throw new Error('Error')
  } catch (error) {
      res.statusCode = 500
      res.setHeader('Content-Type', 'text/plain')
      res.end('Server error')

      const timeStamp = new Date().toISOString()
      const log = `${timeStamp} - ${error.message}\n`

      fs.appendFile('errors.log', log, (error) => {
        if (error) {
          console.error('Error in log file', error);
        }
      })
  }
})

server.listen(port, () => {
  console.log(`Server is running http://localhost:${port}`);
})
