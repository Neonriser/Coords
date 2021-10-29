let crdArray = [0, 0];

exports.handler = async (event) => {
  const x = event.queryStringParameters.lat;
  const y = event.queryStringParameters.lng;

  crdArray[0] = x;
  crdArray[1] = y;

  console.log(crdArray);

  return {
    statusCode: 200,
    headers: { "Access-Control-Allow-Origin": "*" },
    body: JSON.stringify(crdArray),
  };
};
