//@desc Get all contacts
//@route Get /api/contact
//@access public
const getContacts = async (req, res)=>{
    res.status(200).json({message: 'get all contact'});
};

//@desc Create new contacts
//@route POST /api/contact
//@access public
const createContact = async (req, res)=>{
    console.log("The requrest body is :", req.body)
    const {name, email, contact}  = req.body;
    if (!name || !email || !contact){
        res.status(401);
        throw new Error("All Fields are necessary");
    }
    res.status(201).json({message: 'post contact'});
};

//@desc Get contacts
//@route GET /api/contact/:id
//@access public
const getContact = async (req, res)=>{
    res.status(200).json({message:  `got contact for ${req.params.id}`});
};

//@desc update contacts
//@route PUT /api/contact/:id
//@access public
const updateContact = async (req, res)=>{
    res.status(200).json({message: `update contact for ${req.params.id}`});
};

//@desc delete contacts
//@route DELETE /api/contact/:id
//@access public
const deleteContact = async (req, res)=>{
    res.status(200).json({message:  `delete contact for ${req.params.id}`});
};

module.exports = {getContacts, createContact, getContact, updateContact, deleteContact};