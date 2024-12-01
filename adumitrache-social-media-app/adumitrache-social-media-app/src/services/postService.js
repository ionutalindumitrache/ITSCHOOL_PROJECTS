import axios from 'axios'
import setAxiosDefaults from './config'

setAxiosDefaults()

async function get() {
    const response = await axios.get('/posts')

    return response.data
}

const postService = {
    get
}

export default postService;