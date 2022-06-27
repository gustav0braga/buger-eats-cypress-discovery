var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {

    deliver: function() {

        var  firstName = faker.name.firstName()
        var  lastName = faker.name.lastName()

        var data = {
            
                name: `${firstName} ${lastName}`,
                cpf: cpf.generate(),
                email: faker.internet.email(firstName),
                whatsapp: '11912345678',
                address: {
                    postalcode: '03513020',
                    street: 'Rua Doutor Armando Brandão',
                    number: '225',
                    details: 'Ap 04',
                    district: 'Vila Matilde',
                    city_state: 'São Paulo/SP'
                },
                deliver_method: 'Moto',
                cnh: 'cnh-digital.jpg'
            
        }

        return data
    }
}