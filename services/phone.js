const fs = require("fs")

var phone_list = JSON.parse(fs.readFileSync('./phone.json'))

function submit() {
    fs.writeFileSync('./phone.json', JSON.stringify(phone_list, null, '  '))
}

const GetAll =() => {
    phone_list =JSON.parse(fs.readFileSync('./phone.json'))
    return phone_list 
}

const Add = (note) => {
    if (note.fio && note.number) 
        phone_list.push(note)
    submit()
}

const Update = (note) => {
    let to_upd = phone_list.find(n => n.fio == note.fio)
    if(to_upd) {
        to_upd.number = note.number
        submit()
    } else throw new Error('Note does not exist')
}
    
const Delete = (fio) => {
    let to_del = phone_list.find(n => n.fio == fio)
    if(to_del) {
        phone_list = phone_list.filter(n => n != to_del)
        submit()
    }
    else throw new Error('Note does not exist')
}

module.exports = {
    GetAll,
    Add,
    Update,
    Delete
}