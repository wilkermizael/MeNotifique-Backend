import * as path from "path";
import { v4 as uuidv4 } from "uuid";
import multer from "multer"; // Direct import, no need for .default

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "..", "..", "uploads"));
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `${uuidv4()}${ext}`);
  },
});

const upload = multer({ storage });
export default upload;
