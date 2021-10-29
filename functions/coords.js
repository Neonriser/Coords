let crdArray = [0, 0];

exports.handler = async () => {
  const x = crdArray[0];
  const y = crdArray[1];
  return {
    statusCode: 200,
    headers: { "Access-Control-Allow-Origin": "*" },
    body: JSON.stringify(crdArray),
  };
};
