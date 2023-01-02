const Contact = require('../models/Contact')

const getAllContactController=(req, res, next)=>{
    Contact.find()
    .then(contacts=>{
    res.status(201).json({
        massage:'all contact found',
        contacts
    })
    })
    .catch(err=>{
        console.log(err)
    res.status(500).json({
        massage:'error find',
        error:err
    })
})

}

const postNewContactController=(req, res, next)=>{
    const contact = new Contact({
        name : req.body.name,
        phone: req.body.phone,
        email : req.body.email
        })
       
       contact.save()
        .then(data=>{
            res.status(201).json({
               massage:"Contact added",
               contact:data
           })
        })
           .catch(err=>{
               console.log(err)
           res.status(500).json({
               massage:'error find',
               error:err
           })
       })
    
}

//single contact
const getSingleContact = (req, res, next)=>{
    let id = req.params.id
    Contact.findById(id)
            .then(contact=>{
                res.status(200).json({
                    contact
                })
            })
            .catch(err=>{
                console.log(err)
            res.status(500).json({
                massage:'error find id',
                error:err
            })
        })
     
}

const deleteContact = (req, res, next)=>{
let id = req.params.id
Contact.findByIdAndDelete(id)
                        .then(result=>{
                            res.json({
                                massage:'delete massage',
                                result
                            })
                        })
                        .catch(err=>{
                            console.log(err)
                            req.status(500).json({
                                massage:'error delite',
                                error:err
                            })
                        })
}

const editContact = (req, res, next)=>{
 let id = req.params.id
    let updateContact= {
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email
    }

 Contact.findByIdAndUpdate(id, {$set:updateContact})
                    .then(contact=>{
                        res.json({
                            massage:'Updating data',
                            contact
                        })
                    })
                    .catch(err=>{
                        console.log(err)
                        res.status(500).json({
                            massage:'Updating data',
                            error:err
                        })
                    })
}

module.exports = { 
    getAllContactController,
    postNewContactController,
    getSingleContact,
    deleteContact,
    editContact

}