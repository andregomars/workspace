from bottle import Bottle
from bottle.ext.mongo import MongoPlugin

app = Bottle()

db_name = 'mdb'
db_uri = 'mongodb://andre:Pa20090508@ds119355.mlab.com:19355/mdb'
db_plugin = MongoPlugin(uri=db_uri, db=db_name)

app.install(db_plugin)

@app.route('/getall')
def getAll(mongodb):
  query = mongodb['myCollection'].find()
  results = []

  for q in query:
    results.append(q['name'])
  
  return {'list': results}

app.run(debug=True, reloader=True)
