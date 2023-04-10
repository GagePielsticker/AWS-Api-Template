let {formatResponse} = require('./response')

test('Testing formatResponse 200 code on data', () => {

    let res = formatResponse({test:1})

    expect(res.statusCode).toBe(200)
})

test('Testing formatResponse 400 code on no data', () => {

    let res = formatResponse(null)

    expect(res.statusCode).toBe(400)
})

test('Testing custom response codes', () => {

    let res = formatResponse({test:1}, 500)

    expect(res.statusCode).toBe(500)
})