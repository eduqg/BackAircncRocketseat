// Para o multer upload de imagens
const multer = require('multer');
const path = require('path');

// diskStorage salva nos arquivos do projeto
// criar pasta uploads que deve ficar fora do src
// __dirname retorna a pasta atual
module.exports = {
  storage: multer.diskStorage({
    destination: path.resolve(__dirname, '..', '..', 'uploads'),
    filename: (req, file, cb) => {
      const ext = path.extname(file.originalname);
      const name = path.basename(file.originalname, ext);
      cb(null, `${name}-${Date.now()}${ext}`);
    },
  }),
};