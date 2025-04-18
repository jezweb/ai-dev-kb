# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day19.md
Language: python

## Snippet: Creating AWS Lambda Function with Python
Description: A Python function for AWS Lambda that returns details about the Lambda execution environment. It leverages environmental variables available during function execution to access information like the region, memory allocated, and function name.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day19.md#2025-04-17_snippet_0
Language: python

```python
import json\nimport os\n\ndef lambda_handler(event, context):\n    json_region = os.environ['AWS_REGION']\n    return {\n        \"statusCode\": 200,\n        \"body\": json.dumps({\n            \"message\": \"hello world\",\n            \"region\": json_region,\n            \"memory\": context.memory_limit_in_mb,\n            \"function_name\": context.function_name\n        }),\n    }
```