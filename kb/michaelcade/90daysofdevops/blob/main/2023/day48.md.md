# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day48.md
Language: multiple

## Snippet: Initializing Flask App in Python
Description: Python code to import necessary modules and create a Flask app instance.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day48.md#2025-04-17_snippet_6
Language: python

```python
from flask import Flask, render_template
import markdown

app = Flask(__name__)
```

## Snippet: Creating HTML Template for Individual Blog Posts
Description: HTML template for displaying individual blog posts, rendering the Markdown content as HTML.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day48.md#2025-04-17_snippet_10
Language: html

```html
<!DOCTYPE html>
<html>
<head>
    <title>{{ title }}</title>
</head>
<body>
    <h1>{{ title }}</h1>
    <div>{{ content|safe }}</div>
</body>
</html>
```

## Snippet: Creating Virtual Environment in Linux/MacOS
Description: Command to create a virtual environment in Linux or MacOS using Python3's venv module.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day48.md#2025-04-17_snippet_1
Language: bash

```bash
python3 -m venv /path/to/new/virtual/environment
```

## Snippet: Defining Home Route in Flask
Description: Python code to define the home route for the Flask app.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day48.md#2025-04-17_snippet_7
Language: python

```python
@app.route('/')
def home():
    return render_template('index.html')
```

## Snippet: Modifying Home Route to Display Blog Post Titles
Description: Updated Python code for the home route to display a list of blog post titles from Markdown files.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day48.md#2025-04-17_snippet_11
Language: python

```python
@app.route('/')
def home():
    posts = []
    for file in os.listdir('posts'):
        if file.endswith('.md'):
            title = file[:-3]
            posts.append(title)
    return render_template('index.html', posts=posts)
```

## Snippet: Activating Virtual Environment in Windows CMD
Description: Command to activate the virtual environment in Windows Command Prompt.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day48.md#2025-04-17_snippet_2
Language: bash

```bash
C:\> <venv>\Scripts\activate.bat
```

## Snippet: Activating Virtual Environment in Windows PowerShell
Description: Command to activate the virtual environment in Windows PowerShell.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day48.md#2025-04-17_snippet_3
Language: powershell

```powershell
<venv>\Scripts\Activate.ps1
```

## Snippet: Running the Flask App
Description: Command to run the Flask application using Python.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day48.md#2025-04-17_snippet_13
Language: bash

```bash
python main.py
```

## Snippet: Defining Blog Post Route in Flask
Description: Python code to define the route for individual blog posts, reading Markdown files and converting to HTML.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day48.md#2025-04-17_snippet_8
Language: python

```python
@app.route('/posts/<path:path>')
def post(path):
    with open(f'posts/{path}.md', 'r') as file:
        content = file.read()
        html = markdown.markdown(content)
        return render_template('post.html', content=html)
```

## Snippet: Activating Virtual Environment in Linux/MacOS
Description: Command to activate the virtual environment in Linux or MacOS bash shell.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day48.md#2025-04-17_snippet_4
Language: bash

```bash
source <venv>/bin/activate
```

## Snippet: Installing Required Python Packages
Description: Command to install Flask and Markdown packages using pip.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day48.md#2025-04-17_snippet_5
Language: bash

```bash
pip install flask markdown
```

## Snippet: Creating a Sample Markdown Blog Post
Description: Example of a Markdown file (hello.md) containing a sample blog post with various Markdown syntax elements.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day48.md#2025-04-17_snippet_12
Language: markdown

```markdown
# Hello

This is my first blog post
### Heading level 3
#### Heading level 4
##### Heading level 5
###### Heading level 6

I just love **bold text**.
```

## Snippet: Creating Virtual Environment in Windows
Description: Command to create a virtual environment in Windows using Python's venv module.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day48.md#2025-04-17_snippet_0
Language: bash

```bash
c:\>python -m venv c:\path\to\myenv
```

## Snippet: Creating HTML Template for Home Page
Description: HTML template for the blog's home page, displaying a list of blog post titles.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day48.md#2025-04-17_snippet_9
Language: html

```html
<!DOCTYPE html>
<html>
<head>
    <title>My Blog</title>
</head>
<body>
    <h1>My Blog</h1>
    {% for post in posts %}
    <h2><a href="/posts/{{ post }}">{{ post }}</a></h2>
    {% endfor %}
</body>
</html>
```