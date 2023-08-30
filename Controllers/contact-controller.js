
const asyncHandler = require("express-async-handler")


const Contact = require("../models/contact")

/**
 *  get All Contacts
 * @param {Express.Request} req 
 * @param {Express.Response} res 
 * @route GET /api/contact
 */
const getContacts = asyncHandler(async (req, res) => {
    const contacts = await Contact.find()
    res.json({
        msg: "Contacts", method: req.method, contacts
    })
})
/**
 *  get All Contacts
 * @param {Express.Request} req 
 * @param {Express.Response} res 
 * @route GET /api/contact/:id
 */
const getContact = asyncHandler(async (req, res) => {

    const contact = await Contact.findById(req.params.id)
    if (!contact) {
        res.status(404)
        throw new Error("Not Found")
    }
    res.json({
        msg: "Contacts", method: req.method, id: req.params.id, contact
    })
})

/**
 *  Create New Contact
 * @param {Express.Request} req 
 * @param {Express.Response} res 
 * @route POST /api/contact
 */
const createContact = asyncHandler(async (req, res) => {
    res.status(200)
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
        res.status(400);
        throw new Error("All fields are mandatory !");
    }
    const newContact = await Contact.create({
        name, email, phone
    })
    res.json({
        msg: "Contacts", method: req.method, body: req.body, contact: newContact
    })
})

/**
 * Update Contact With id 
 * @param {Express.Request} req 
 * @param {Express.Response} res 
 * @route PUT /api/contact/:id
 */
const updateContact = asyncHandler(async (req, res) => {

    const updatedContact = await Contact.findByIdAndUpdate(req.params.id,
        req.body, {
        new: true
    })
    if (!updateContact) {
        res.status(404)
        throw new Error("Not Found")
    }
    res.status(201)
    res.json({
        msg: "Updated Successfully", method: req.method, id: req.params.id, updatedContact
    })


})

/**
 * 
 * delete Certain Contact
 * @param {Express.Request} req 
 * @param {Express.Response} res 
 * @route DELETE /api/contact/:id
 */
const deleteContact = asyncHandler(async (req, res) => {

    const deletedContact = await Contact.findByIdAndRemove(req.params.id)
    if (!deletedContact) {
        res.status(404)
        throw new Error("Not Found")
    }
    res.json({
        msg: "Removed Successfully", method: req.method, id: req.params.id
    })
})


module.exports = { getContacts, getContact, createContact, updateContact, deleteContact, }