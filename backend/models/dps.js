import mongoose from 'mongoose';

const dpsSchema = new mongoose.Schema({
  no: { type: String, required: true },
  opiniRisalah: { type: String, required: true },
  tahun: { type: Number, required: true },
  noOpini: { type: String, required: true },
  tanggalMasehi: { type: Date, required: true },
  agendaFile: { type: String, required: true },
  judulOpiniFile: { type: String, required: true },
  kelompok: { type: String, required: true },
  kategori: { type: String, required: true }
});

export default mongoose.model('DPS', dpsSchema);
