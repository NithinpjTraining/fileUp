const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const multer = require('multer');
//const { unlinkFiles } = require('../Module/fileoperation/index')

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, './uploads/');
      
    },
    filename: function(req, file, cb) {
      cb(null, new Date().toISOString() + file.originalname);
    }
  })

constfileFilter = (req, file, cb) => {
    // reject a file
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
      cb(null, true);
    } else {
      cb(null, false);
    
    }
  }
  const fileSettings = {
	image: {
		maxSize: 10,
	},
	
}

  const upload = multer({
    storage: storage,
    limits: {
      fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
  })
  