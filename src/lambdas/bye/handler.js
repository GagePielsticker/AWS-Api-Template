/* Coldstart dependency loading */
const { formatResponse } = require('../../utils/response')

/* Invoke handler */
/* Note: Lambda qualifies 'error' (500 code) from when a lambda exits before processed full request */
exports.handler = (event) => {
  const params = event.queryStringParameters

  console.log(`Lambda Invoked with params:\n${JSON.stringify(params, null, 4)}`)

  const data = {
    hello: ':)'
  }

  return formatResponse(data)
}
