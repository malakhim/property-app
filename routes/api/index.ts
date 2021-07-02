import express from "express";
import property from './property';
import tenancy from './tenancy';

const router = express.Router();

router.use("/properties", property);
router.use("/tenancies", tenancy);


module.exports = router;