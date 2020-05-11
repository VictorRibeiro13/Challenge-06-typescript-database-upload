import multer from 'multer';
import path from 'path';
import crypto from 'crypto';

const tmpPath = path.resolve(__dirname, '..', '..', 'tmp');

export default {
  directoryTmp: tmpPath,

  storage: multer.diskStorage({
    destination: tmpPath,
    filename(request, file, callback) {
      const fileHash = crypto.randomBytes(10).toString('Hex');
      const fileName = `${fileHash}-${file.originalname}`;

      // first argument: error | filename
      return callback(null, fileName);
    },
  }),
};
