import express from "express";
import path from 'path';

const router = express.Router();

// router.use("/properties", property);

// If no API routes are hit, send the Angular app
router.use(function(req: express.Request, res: express.Response) {
  res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

// export {router};
module.exports = router;