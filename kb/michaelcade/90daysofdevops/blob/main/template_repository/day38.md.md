# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day38.md
Language: multiple

## Snippet: Creating a Dockerfile for Python Application
Description: This Dockerfile sets up a Python 3.9 environment, specifies a working directory, copies application files, installs dependencies, and configures the container to run a Python application.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day38.md#2025-04-17_snippet_0
Language: dockerfile

```dockerfile
FROM python:3.9

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

CMD ["python", "app.py"]
```

## Snippet: Running a Docker Container
Description: Command to run a Docker container from the 'my-python-app' image, publishing port 5000 to the host.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day38.md#2025-04-17_snippet_2
Language: bash

```bash
docker run -p 5000:5000 my-python-app
```

## Snippet: Mounting a Volume for Live Code Editing
Description: Command to run a Docker container with a volume mount that links the local directory to the container's /app directory, enabling live code editing.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day38.md#2025-04-17_snippet_4
Language: bash

```bash
docker run -p 5000:5000 -v $(pwd):/app my-python-app
```

## Snippet: Running a Container in Detached Mode
Description: Command to run a Docker container in detached mode (background), with port forwarding and volume mounting for development.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day38.md#2025-04-17_snippet_5
Language: bash

```bash
docker run -d -p 5000:5000 -v $(pwd):/app my-python-app
```

## Snippet: Simple Python Flask Application
Description: A basic Flask web application that displays 'Hello, Docker!' when accessed. It listens on all interfaces (0.0.0.0) on port 5000.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day38.md#2025-04-17_snippet_3
Language: python

```python
from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello():
    return 'Hello, Docker!'

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
```

## Snippet: Creating a Python Requirements File
Description: A simple requirements.txt file that lists Flask as a dependency for the Python application.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day38.md#2025-04-17_snippet_6
Language: plaintext

```plaintext
flask==2.0.1
```

## Snippet: Building a Docker Image
Description: Command to build a Docker image from a Dockerfile, tagging it as 'my-python-app'.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day38.md#2025-04-17_snippet_1
Language: bash

```bash
docker build -t my-python-app .
```