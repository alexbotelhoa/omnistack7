const Post = require('../models/Post')
const sharp = require('sharp')
const path = require('path')
const fs = require('fs')

module.exports = {
   async index(req, res) {
      const posts = await Post.find().sort('-createdAt')
      return res.json(posts)
   },

   async store(req, res) {
      const { author, place, description, hashtags } = req.body

      // CONFIGURAÇÃO VIA COMPUTADOR
      // const { filename: image } = req.file
      // const [name] = image.split('.')
      // const fileName = `${name}.jpg`
      
      const { image } = req.body
      // const image = req.body.path

      console.log("image:", image)
      // console.log("fileName:", image)
      console.log("author:", author)
      console.log("place:", place)
      console.log("description:", description)
      console.log("hashtags:", hashtags)
      // console.log("fileName:", fileName)
      // console.log("path:", req.file.path)
      // console.log("destination:", req.file.destination)
      console.log("#####################################################")

      
      // await sharp(req.file.path)
      //    .resize(500)
      //    .jpeg({ quality: 70 })
      //    .toFile(
      //       path.resolve(req.file.destination, 'resized', fileName)
      //    )
      // fs.unlinkSync(req.file.path)

      // const post = await Post.create({
      //    image: fileName,
      //    author, 
      //    place, 
      //    description, 
      //    hashtags
      // })

      // req.io.emit('post', post)
      // return res.json(post)
   }
}