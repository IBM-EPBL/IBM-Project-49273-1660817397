import os
from flask import Flask,request,jsonify, json, Response, make_response, render_template
from flask_pymongo import PyMongo
from flask_bcrypt import Bcrypt
from flask_cors import CORS
import db
import pickle
import numpy as np

app = Flask(__name__)
bcrypt = Bcrypt(app)
CORS(app)

@app.route('/')
def hello():
    print("done")
    return "hello"


@app.route('/test')
def test():
    return "hello"



class UserAuthUtil:
    
    @app.route("/", methods=['GET'])
    def hello_world():
        return "Working"

    @app.route("/predict", methods=['POST'])
    def predict():
        print("came")
        try:
            print("trying")
            if request.method=='POST':
                data = request.get_json()
                print(data['cholesterol'])
                new_input =np.array([[data['age'],data['sex'],data['cpt'],data['bp'],data['cholesterol'],data['fbs'],data['exg'],data['maxHr'],data['exercise'],data['stDepression'],data['slope'],data['vessels'],	data['thallium']]])
                loaded_model = pickle.load(open('F:\ibm project\BackEnd\heart-model','rb'))
                result = loaded_model.predict(new_input)
                print(result[0])    
                if(result[0]==0):
                    return Response(response=json.dumps({'result': "negative",'message':"The patient is more possibility to have heart disease"}), status=200, mimetype="application/json")
                else:
                    return Response(response=json.dumps({'result': "positive",'message':"The patient is more possibility to have heart disease"}), status=200, mimetype="application/json")
                # return make_response(jsonify({'name':res}), 201)
            else:
                return Response(status=400, response=json.dumps({'message': 'Bad request'}), mimetype='application/json')
        except Exception as Ex:
            print(Ex)
            return Response(response=json.dumps({'message': "Internal Server error"}), status=500, mimetype="application/json")


    @app.route("/login", methods=['POST'])
    def login_user():
        try:
            if request.method == 'POST':
                form_data = request.get_json()
                email = form_data['email']
                password = form_data['password']
                if(email != '' and password != ''):
                    data = list(db.users.find({'email': email}))
                    if(len(data) == 0):
                        return Response(status=404, response=json.dumps({'message': 'user does not exist'}), mimetype='application/json')
                    else:
                        data = data[0]
                        if(bcrypt.check_password_hash(data['password'], password)):
                            #token =jwt.encode({'email': email}, app.config['SECRET_KEY'])
                            return make_response(jsonify({'name':data['username']}), 201)
                        else:
                            return Response(status=402, response=json.dumps({'message': 'Invalid password'}), mimetype='application/json')
                else:
                    return Response(status=400, response=json.dumps({'message': 'Bad request'}), mimetype='application/json')
            else:
                return Response(status=401, response=json.dumps({'message': 'invalid request type'}), mimetype='application/json')
        except Exception as Ex:
            print(Ex)
            return Response(response=json.dumps({'message': "Internal Server error"}), status=500, mimetype="application/json")


    @app.route("/register", methods=['POST'])
    def register_user():
        try:
            if request.method == "POST":
                user_details = request.get_json()
                username = user_details["username"]
                email = user_details["email"]
                password = user_details["password"]
                password_hash = bcrypt.generate_password_hash(password).decode('utf-8')
                if (username != '' and email != '' and password_hash != ''):
                    
                    db.users.insert_one({'username':username,'email':email,'password':password_hash})
                    return Response(response=json.dumps({'name': username}), status=200, mimetype="application/json")
                else:
                    return Response(status=400, response=json.dumps({'message': 'Please enter your details'}), mimetype='application/json')
            else:
                return Response(status=400, response=json.dumps({'message': 'Bad request'}), mimetype='application/json')
        except Exception as Ex:
            
            print(Ex)
            return Response(response=json.dumps({'message': "Internal Server Error"}), status=500, mimetype="application/json")    

if __name__ == '__main__':
    app.run(port=8000)
