// const asyncHandler = require("express-async-handler");
// const Contact = require('../models/contactModel');


// const getContacts = async (req, res) => {
//     const contact = await Contact.find();
//     res.status(200).json(contact);
// }

// const addContact = asyncHandler(async (req, res) => {
//     console.log(req.body);
//     const { name, email, phone } = req.body;
//     if (!name || !email || !phone) {
//         res.status(400);
//         throw new Error("All the field are required");
//     }
//     const contact = await Contact.create({
//         name,
//         email,
//         phone,
//     });
//     res.status(201).json(contact);
// });
// const getContact = asyncHandler(async (req, res) => {
//     const contact = await Contact.findById(req.params.id);
//     if (!contact) {
//         res.status(404);
//         throw new Error("The Contact does not exist!");
//     }
//     res.status(200).json(contact);
// })

// const updateContact = asyncHandler(async (req, res) => {
//     const contact = await Contact.findById(req.params.id);
//     console.log(contact);
//     if (!contact) {
//         res.status(404);
//         throw new Error("The Contact does not exist!");
//     }
//     const updatedContact = await Contact.findByIdAndUpdate(
//         req.params.id,
//         req.body,
//         { new: true }
//     )
//     res.status(200).json(updatedContact);
// });
// const deleteContact = asyncHandler(async (req, res) => {
//     const contact = await Contact.findById(req.params.id);
//     // console.log(contact);
//     if (!contact) {
//         res.status(404);
//         throw new Error("The Contact does not exist!");
//     }
//     await contact.deleteOne();
//     console.log(Contact);
//     res.status(200).json(contact);
// });
// module.exports = {
//     getContacts,
//     addContact,
//     updateContact,
//     deleteContact,
//     getContact
// }

// =============================================================
// =============================================================
// =============================================================

const asyncHandler = require('express-async-handler');
const Contact = require('../models/contactModel');
const ErrorHandler = require('../middlewares/ErrorHandler');

const getContact = asyncHandler(async (req, res) => {
    const contact = await Contact.find();
    if (!contact) {
        res.status(404);
        throw new Error("The contact Not found");
    }
    res.json(contact);
})

const addContact = asyncHandler(async (req, res) => {
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
        res.status(400);
        throw new Error("All Field are required!");
    }

    const contact = await Contact.create({
        name,
        email,
        phone
    });
    res.json(contact);
})

const getSingleContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error("The contact Not found");
    }
    res.status(200).json(contact);
})

const updateContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error("The contact Not found");
    }
    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    )
    res.status(200).json(updatedContact);
})

const deleteContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error("The contact Not found");
    }
    await contact.deleteOne();
    res.status(200).json(contact);
})
module.exports = {
    getContact,
    addContact,
    getSingleContact,
    updateContact,
    deleteContact
}