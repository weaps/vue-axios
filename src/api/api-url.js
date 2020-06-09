const files = require.context('./apiUrl', true, /\.js$/)
const API_URL = {}
files.keys().forEach(key => {
  const item = files(key).default
  for(const i in item) {
    API_URL[i] = item[i]
  }
})
export default API_URL
