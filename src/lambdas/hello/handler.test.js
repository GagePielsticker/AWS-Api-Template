let {handler} = require('./handler')
process.env.AWS_REGION = 'us-east-1'

test('Testing hello handler 200 response', () => {

    let result = handler({}, null, processResult)

    function processResult(err, data) {
        expect(data.statusCode).toBe(200)
    }
})