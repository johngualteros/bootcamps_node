const express = require('express')

const router = express.Router();

router.get("/", (_req,res)=>{
    return res.status(200).json({ "message": "Get all users" })
})

router.get("/:id", (req,res)=>{
    return res.status(200).json({ "message": `Get one user ${req.params.id}` })
})

router.post("/", (req, res)=>{
    body = req.body
    return res.status(201).send(body)
})

router.put("/:id", (req, res)=>{
    return res.status(200).json({ "message": `Update one user ${req.params.id}` })
})

router.delete("/:id", (req, res)=>{
    return res.status(202).json({ "message": `Delete one user ${req.params.id}` })
})

// Export router 
module.exports = router
