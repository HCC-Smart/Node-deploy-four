// Import server here and start the application
import server from './api/server.js'

const PORT = 9000

server.listen(PORT, () => console.log(`server running on port ${PORT}`))