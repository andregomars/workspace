from bottle import run, route, request, error

@error(404)
def error404(error):
  return "page not found!"

@error(405)
def error405(error):
  return "method is not allowed!!"



@route('/')
def index():
  return "hi there do we!"

@route('/login')
def login():
  return "you logged in"

@route('/vendors/<vid>')
def login(vid):
  return "vendor " + vid

@route('/vendors')
def loginQuery():
  vid = request.query.vid
  # return "vendor " + vid
  return {"vid": vid, "name": "ingram"}

@route('/addnewvendor', method='POST')
def addVendor():
  return "add new vendor" 



run(debug=False, reloader=True)