# from flask import Flask, request
import flask

app = flask.Flask(__name__)
# flask.abort(401) 
# return error

@app.errorhandler(404)
def page_not_found(error):
    return flask.render_template('page_not_found.html'), 404

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

from werkzeug.utils import secure_filename

@app.route('/upload', methods=['GET', 'POST'])
def upload_file():
    if flask.request.method == 'POST':
        file = flask.request.files['the_file']
        file.save(f"/var/www/uploads/{secure_filename(file.filename)}")

@app.route("/neveruser")
def redirect_route():
    return flask.redirect(flask.url_for('login'))