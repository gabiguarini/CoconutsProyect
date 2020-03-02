const express = require('express');
const members = require('../../Members')
const router = express.Router();



//? request get all
router.get('/', (request, res) =>{res.json(members)} );

//? request get id
router.get('/:id', (request, response) =>{
    const found = members.some(member => member.id === parseInt(request.params.id));

    if(found){
        response.json(members.some(member => member.id == parseInt(request.params.id)));
    }
    else{
        response.status(400).json({ msg: `No member with the id of : ${request.params.id}`})
    }
});

//? request delete

router.delete('/:id', (request, response) => {

    const found = members.some((member) => member.id === parseInt(request.params.id))
    if (found) {
        response.json(members.filter(member => member.id !== parseInt(request.params.id)))
    } else {
        response.status(400).json({ msg: `no member with the id of ${request.params.id}` })
    }
})

//? request update

router.put('/:id', (request, response) => {
    // chech to see if the member exists
    const found = members.some((member) => member.id === parseInt(request.params.id))
    if (found) {
        const updMember = request.body
        members.forEach(member => {
            if (member.id === parseInt(request.params.id)) {
                member.name = updMember.name ? updMember.name : member.name;
                member.email = updMember.email ? updMember.email : member.email;
                response.json({ msg: 'member updated', member })
            }
        })

    } else {
        response.status(400).json({ msg: `no member with the id of ${req.params.id}` })
    }
})

module.exports = router;