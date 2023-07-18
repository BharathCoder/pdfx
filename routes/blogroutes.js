const express = require('express')
const router = express.Router()
const blogs = require('../data/blogcontent')

router.get('/', (req, res)=>{
    res.render('home', {
        blog: blogs
    })
})

router.get('/post/:slug', (req, res)=>{
    const selectedBlog = blogs.filter(blog=>{
        if (req.params.slug == blog.slug) {
            return blog
        }
    })
    res.render('post', {
        title: selectedBlog[0].title,
        content: selectedBlog[0].content
    })
})

module.exports = router