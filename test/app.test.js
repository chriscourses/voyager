const request = require('supertest')
const app = require('../app')

describe('GET /', function() {
    it('should render successfully', function(done) {
        request(app)
            .get('/')
            .expect(200, done)
    })
})
