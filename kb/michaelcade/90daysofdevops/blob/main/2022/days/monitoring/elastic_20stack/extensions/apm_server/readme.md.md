# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/Monitoring/Elastic%20Stack/extensions/apm-server/README.md
Language: multiple

## Snippet: Running Docker Compose with APM Server Extension
Description: Command to start the Docker Compose stack including the APM Server extension by referencing both the main docker-compose.yml file and the apm-server extension compose file.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/Monitoring/Elastic Stack/extensions/apm-server/README.md#2025-04-17_snippet_0
Language: console

```console
$ docker-compose -f docker-compose.yml -f extensions/apm-server/apm-server-compose.yml up
```

## Snippet: Configuring Python Flask Application with Elastic APM
Description: Example configuration for connecting a Python Flask application to the APM Server. It demonstrates setting up the ElasticAPM extension with required service name and server URL configuration.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/Monitoring/Elastic Stack/extensions/apm-server/README.md#2025-04-17_snippet_1
Language: python

```python
import elasticapm
from elasticapm.contrib.flask import ElasticAPM

from flask import Flask

app = Flask(__name__)
app.config['ELASTIC_APM'] = {
    # Set required service name. Allowed characters:
    # a-z, A-Z, 0-9, -, _, and space
    'SERVICE_NAME': 'PYTHON_FLASK_TEST_APP',

    # Set custom APM Server URL (default: http://localhost:8200)
    'SERVER_URL': 'http://apm-server:8200',

    'DEBUG': True,
}
```