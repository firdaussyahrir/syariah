import DPS from '../models/dps.js';
import path from 'path';

// Create DPS entry
export const createDps = async (req, res) => {
  try {
    const { no, opiniRisalah, tahun, noOpini, tanggalMasehi, kelompok, kategori } = req.body;
    
    // Validasi input
    if (!no || !opiniRisalah || !tahun || !noOpini || !tanggalMasehi) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Handle file uploads for agendaFile and judulOpiniFile
    const agendaFile = req.files?.agendaFile ? req.files.agendaFile[0].path : '';
    const judulOpiniFile = req.files?.judulOpiniFile ? req.files.judulOpiniFile[0].path : '';

    // Create a new DPS entry
    const newDps = new DPS({
      no,
      opiniRisalah,
      tahun,
      noOpini,
      tanggalMasehi,
      agendaFile,
      judulOpiniFile,
      kelompok,
      kategori
    });

    // Save the new DPS entry to the database
    await newDps.save();
    res.status(201).json(newDps);
  } catch (err) {
    // Handle server errors and send response
    res.status(500).json({ error: err.message });
  }
};

// Read all DPS entries
export const getAllDps = async (req, res) => {
  try {
    const dpsList = await DPS.find();
    res.status(200).json({ data: "BEERHASIL WOII"});
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update DPS entry
export const updateDps = async (req, res) => {
  try {
    const { id } = req.params;
    const { no, opiniRisalah, tahun, noOpini, tanggalMasehi, kelompok, kategori } = req.body;
    
    // Validate input
    if (!no || !opiniRisalah || !tahun || !noOpini || !tanggalMasehi) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Handle file uploads for agendaFile and judulOpiniFile
    const agendaFile = req.files?.agendaFile ? req.files.agendaFile[0].path : '';
    const judulOpiniFile = req.files?.judulOpiniFile ? req.files.judulOpiniFile[0].path : '';

    // Update the DPS entry
    const updatedDps = await DPS.findByIdAndUpdate(
      id,
      {
        no,
        opiniRisalah,
        tahun,
        noOpini,
        tanggalMasehi,
        agendaFile,
        judulOpiniFile,
        kelompok,
        kategori
      },
      { new: true }
    );

    if (!updatedDps) {
      return res.status(404).json({ error: 'DPS entry not found' });
    }

    res.status(200).json(updatedDps);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete DPS entry
export const deleteDps = async (req, res) => {
  try {
    const { id } = req.params;
    
    // Find and delete the DPS entry by its ID
    const deletedDps = await DPS.findByIdAndDelete(id);
    
    if (!deletedDps) {
      return res.status(404).json({ error: 'DPS entry not found' });
    }

    res.status(200).json({ message: 'DPS entry deleted', id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
