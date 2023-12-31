const express = require("express")
const ContactController = require('../Controllers/contact-controller')
const contactRouter = express.Router()
const validateToken = require("../Middleware/validateTokenHandler")
/**
 * Routing For Contact 
 * @route api/Contact/Optional<id>
 * kinda like urls.py in django
 */

// Make All Routes Private need Authentication
contactRouter.use(validateToken);

contactRouter.get('/',ContactController.getContacts)
contactRouter.get('/:id',ContactController.getContact)
contactRouter.post('/',ContactController.createContact)
contactRouter.put('/:id',ContactController.updateContact)
contactRouter.delete('/:id',ContactController.deleteContact)




module.exports = contactRouter