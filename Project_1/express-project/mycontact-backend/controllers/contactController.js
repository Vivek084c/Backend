//@desc Get all contacts
//@route Get /api/contact
//@access public
const getContacts = (req, res)=>{
    res.status(200).json({message: 'get all contact'});
};

//@desc Create new contacts
//@route POST /api/contact
//@access public
const createContact = (req, res)=>{
    res.status(201).json({message: 'post contact'});
};

//@desc Get contacts
//@route GET /api/contact/:id
//@access public
const getContact = (req, res)=>{
    res.status(200).json({message:  `got contact for ${req.params.id}`});
};

//@desc update contacts
//@route PUT /api/contact/:id
//@access public
const updateContact = (req, res)=>{
    res.status(200).json({message: `update contact for ${req.params.id}`});
};

//@desc delete contacts
//@route DELETE /api/contact/:id
//@access public
const deleteContact = (req, res)=>{
    res.status(200).json({message:  `delete contact for ${req.params.id}`});
};

module.exports = {getContacts, createContact, getContact, updateContact, deleteContact};