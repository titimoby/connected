from bottle import route, run, template
import serial

@route('/punch')
def index():
    
    return template('<b>punch received</b>!', name=name)

run(host='localhost', port=8080)
