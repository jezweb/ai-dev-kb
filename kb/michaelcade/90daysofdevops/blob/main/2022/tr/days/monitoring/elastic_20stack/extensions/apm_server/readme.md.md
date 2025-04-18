# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/tr/Days/Monitoring/Elastic%20Stack/extensions/apm-server/README.md
Language: multiple

## Snippet: Configuring Python Flask with Elastic APM Agent
Description: Example configuration for connecting a Python Flask application to the APM Server. It sets the required service name and APM server URL to enable application performance monitoring.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/tr/Days/Monitoring/Elastic Stack/extensions/apm-server/README.md#2025-04-17_snippet_1
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

## Snippet: Running Docker Compose with APM Server Extension
Description: Command to launch Docker Compose with both the main stack and the APM Server extension by referencing multiple compose files.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/tr/Days/Monitoring/Elastic Stack/extensions/apm-server/README.md#2025-04-17_snippet_0
Language: console

```console
$ docker-compose -f docker-compose.yml -f extensions/apm-server/apm-server-compose.yml up
```