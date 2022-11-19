import pandas as pd #read the dataset
import numpy as np #numerical python
import pickle
data = pd.read_csv("F:\ibm project\BackEnd\Heart_Disease_Prediction.csv")


from sklearn.preprocessing import LabelEncoder, OneHotEncoder
le = LabelEncoder()
data['Heart Disease'] = le.fit_transform(data['Heart Disease'])



# from sklearn.model_selection import train_test_split
# x = data.iloc[:,data.columns!='Heart Disease'] #data
# y = data.iloc[:,data.columns=='Heart Disease'] #outcome / label
# xtrain, xtest, ytrain, ytest = train_test_split(x,y,test_size=0.01)
# from sklearn.ensemble import RandomForestClassifier
# model=RandomForestClassifier()
# model.fit(xtrain.values,ytrain.values)
filename = 'F:\ibm project\BackEnd\heart-model'
# pickle.dump(model, open(filename, 'wb'))
new_input =np.array([[64,	1,	1,	110,	211,	0,	2,	144,	1,	1.8,	2,	0,	3]])
# result =model.predict(new_input)
# print(result)
loaded_model = pickle.load(open(filename,'rb'))
result =loaded_model.predict(new_input)
print(result)