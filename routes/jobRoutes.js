
const express = require("express")
const { createJob, updateJob, deleteJob, showStats } = require("../controllers/jobsController")
const router = express.Router()

router.route("/create").post(createJob)
router.route("/update").patch(updateJob)
router.route("/delete").delete(deleteJob)
router.route("/stats").get(showStats)

module.exports = router