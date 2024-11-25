import express from 'express';
import multer from 'multer';
import path from 'path';
import { createDps, getAllDps, updateDps, deleteDps } from '../controllers/dps.controller.js';

const router = express.Router();

// Set up file storage using multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads'); // Pastikan folder uploads sudah ada
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

// Routes
router.post('/', upload.fields([{ name: 'agendaFile' }, { name: 'judulOpiniFile' }]), createDps);
router.get('/', getAllDps);
router.put('/:id', upload.fields([{ name: 'agendaFile' }, { name: 'judulOpiniFile' }]), updateDps);
router.delete('/:id', deleteDps);

export default router;
