module.exports = function validator (request, response, next) {
    const person = {
      name: request.query.name,
    };
    if(!person.name){
      response.status(500).send({
        status: 500,
        error: 'No name',
      });
    }
    next();
  };