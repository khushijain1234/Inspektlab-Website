import axios from 'axios'

export default async function handler(req, res) {
    const posts = await axios.get('https://inspektlabs.com/blog/ghost/api/v3/content/posts/?key=1f5d047c1423354837ce935ff0&include=tags')
    res.status(200).json(posts.data)
}