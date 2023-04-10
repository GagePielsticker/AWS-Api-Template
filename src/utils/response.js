
function formatResponse (data, stat) {
  let statusCode

  if (!data || typeof data !== 'object') {
    data = 'Invalid Server Response.'
    statusCode = 400
  }
  else if (!stat) statusCode = 200
  else statusCode = stat

  return {
    statusCode,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(
      {
        region: process.env.AWS_REGION,
        data
      }
    )
  }
}

module.exports = {
  formatResponse
}
