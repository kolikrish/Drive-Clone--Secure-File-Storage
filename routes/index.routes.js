const express = require('express');
const authMiddleware = require('../middleware/auths');

const router = express.Router();
const crypto = require('crypto');
const multer = require('multer');
const path = require('path');

const fileModel = require('../models/file.model');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/Images/uploads');
    },
    filename: function (req, file, cb) {
      crypto.randomBytes(12 , function(err, bytes) {
        const fn = bytes.toString('hex') + path.extname(file.originalname);
        cb(null, fn);
      })
    }
})

const upload = multer({ storage: storage })

router.get('/upload',authMiddleware, async (req,res) => {

  const userFiles = await fileModel.find({
    user: req.user.userId,
  })

  res.render('upload');
})

router.post('/upload',authMiddleware , upload.single('Image') ,async (req,res) => {
    console.log(req.file);
    res.send('File uploaded');

    const newFile = await fileModel.create({
      path: req.file.path,
      originalName: req.file.originalname,
      user: req.user.userId,
    })

})

router.get('/download/:path', authMiddleware ,async (req,res) => {
  const loggedInUserId = req.user.userId;
  const path = req.params.path;

  const file = await fileModel.findOne({
    user: loggedInUserId,
    path: path,
  })

  if(!file) {
    return res.status(401).json({
      message: 'Unauthorized',
    })
  }
})

module.exports = router;
