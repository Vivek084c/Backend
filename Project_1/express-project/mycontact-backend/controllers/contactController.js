// imporitng the async handler 
const asyncHandler  = require('express-async-handler');

//accessing the contact schema
const Contact = require("../models/contactModel")

//@desc Get all contacts
//@route Get /api/contact
//@access public
const getContacts = asyncHandler (async (req, res)=>{
    const contacts = await Contact.find();
    res.status(200).json(contacts);
});

//@desc Create new contacts
//@route POST /api/contact
//@access public
const createContact = asyncHandler(async (req, res)=>{
    console.log("The requrest body is :", req.body)
    const {name, email, phone}  = req.body;

    // checking if the name, email, contact is empty
    if (!name || !email || !phone){
        res.status(401);
        throw new Error("All Fields are necessary");
    }

    // creating a contact object
    const contact = await Contact.create({
        name, 
        email, 
        phone
    })

    // passing the contact created above as json file
    res.status(201).json(contact);
});

//@desc Get contacts
//@route GET /api/contact/:id
//@access public
const getContact = asyncHandler ( async (req, res)=>{
    // extracting the id from the req.param and using this as parameter to serach the database
    const contact = await Contact.findById(req.params.id)

    //throwing an error if the contact is not found 
    if (!contact){
        res.status(404);
        throw new Error("Contact not found");
    }

    //returning the contact if the contact is found 
    res.status(200).json(contact);
});

//@desc update contacts
//@route PUT /api/contact/:id
//@access public
const updateContact = asyncHandler( async (req, res)=>{
    // extracting the id from the req.param and using this as parameter to serach the database
    const contact = await Contact.findById(req.params.id)

    //throwing an error if the contact is not found 
    if (!contact){
        res.status(404);
        throw new Error("Contact not found");
    }

    // updating the contact if found 
    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body, 
        {new : true }
    );

    // sending updated contact to the user
    res.status(200).json(updatedContact);
});

//@desc delete contacts
//@route DELETE /api/contact/:id
//@access public
const deleteContact =asyncHandler( async (req, res)=>{
    // extracting the id from the req.param and using this as parameter to serach the database
    const contact = await Contact.findById(req.params.id)

    //throwing an error if the contact is not found 
    if (!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
    await Contact.deleteOne(contact);


    res.status(200).json(contact);
});

module.exports = {getContacts, createContact, getContact, updateContact, deleteContact};