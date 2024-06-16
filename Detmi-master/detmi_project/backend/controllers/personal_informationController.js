const {Personal_information, User} = require("../models/models")
const ApiError = require('../erorr/ApiError');
const { _attributes } = require("../db");



class PersonalInformationController {
    async change_info(req, res){
        const userid = req.user.id;
        const {firstname, surname, middlename, placeOfStudy, phoneNumber} = req.body
        let user = await Personal_information.findOne({where : {UserId : userid }})

        if (user){
            await Personal_information.update(
                { firstname, surname, middlename, placeOfStudy, phoneNumber },
                { where: { UserId: userid } }
            );
            user = await Personal_information.findOne({ where: { UserId: userid } }); // чтобы вернуть обновленный объект
        }
        else {
            user = Personal_information.create({Firstname, Surname, Middlename, Place_of_study, phone_number})
        }
        return res.json(user)
    }
    async view_lk(req, res){
        const userid = req.user.id;
        const user = await Personal_information.findOne({
            attributes : ["firstname", "surname", "middlename", "placeOfStudy", "phoneNumber"],
            where : {
                UserId : userid
            }
        })
        const {firstname, surname, middlename, placeOfStudy, phoneNumber} = user
        // console.log(Firstname, Surname, Middlename, Place_of_study, phone_number)
        return res.json({firstname, surname, middlename, placeOfStudy, phoneNumber})
    }
    
}

module.exports = new PersonalInformationController()