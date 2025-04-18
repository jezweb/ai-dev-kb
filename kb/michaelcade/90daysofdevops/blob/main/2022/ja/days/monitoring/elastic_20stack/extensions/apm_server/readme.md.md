# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/Monitoring/Elastic%20Stack/extensions/apm-server/README.md
Language: multiple

## Snippet: Running Docker Compose with APM Server Extension
Description: Command to start Docker Compose with the APM Server extension included. This combines the main docker-compose.yml file with the APM server-specific compose file.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/Monitoring/Elastic Stack/extensions/apm-server/README.md#2025-04-17_snippet_0
Language: console

```console
$ docker-compose -f docker-compose.yml -f extensions/apm-server/apm-server-compose.yml up
```

## Snippet: Configuring Python Flask for APM Integration
Description: Example configuration for integrating a Python Flask application with Elastic APM. This setup specifies the service name and APM server URL, which are essential for trace reporting.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/Monitoring/Elastic Stack/extensions/apm-server/README.md#2025-04-17_snippet_1
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