# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day46.md
Language: python

## Snippet: Creating a Basic Flask Web Application in Python
Description: This snippet demonstrates how to create a simple Flask web application with a single route that returns 'Hello, World!' when the root URL is accessed.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day46.md#2025-04-17_snippet_0
Language: python

```python
from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello, World!'
```

## Snippet: Integrating SQLAlchemy with Flask for Database Operations in Python
Description: This code example shows how to set up a Flask application with SQLAlchemy to work with a SQLite database. It defines a User model and creates a route to query and display all users.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day46.md#2025-04-17_snippet_1
Language: python

```python
from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///test.db'
db = SQLAlchemy(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50))

@app.route('/')
def index():
    users = User.query.all()
    return render_template('index.html', users=users)
```