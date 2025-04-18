# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day34.md
Language: nginx

## Snippet: Configuring Nginx with SSL Termination for Load Balancing
Description: This configuration demonstrates SSL termination at the Nginx load balancer level. It listens on port 443 with SSL, specifies certificate files, and forwards decrypted traffic to backend servers, reducing the SSL processing load on application servers.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day34.md#2025-04-17_snippet_2
Language: nginx

```nginx
server {
    listen 443 ssl;
    server_name www.example.com;

    ssl_certificate www.example.com.crt;
    ssl_certificate_key www.example.com.key;

    location / {
        proxy_pass http://myapp1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

## Snippet: Configuring Basic HTTP Load Balancing in Nginx
Description: This configuration defines an upstream server group with three application servers and sets up a virtual host to distribute client requests across these servers. It includes a health check to ensure traffic is only sent to operational servers.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day34.md#2025-04-17_snippet_0
Language: nginx

```nginx
upstream myapp1 {
    server srv1.example.com;
    server srv2.example.com;
    server srv3.example.com;
}
```

## Snippet: Setting Up Virtual Host with Load Balancing in Nginx
Description: This configuration sets up a virtual host on port 80 that passes client requests to the previously defined upstream server group. It demonstrates how to reference the upstream servers defined in the load balancer configuration.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day34.md#2025-04-17_snippet_1
Language: nginx

```nginx
server {
    listen 80;

    location / {
        proxy_pass http://myapp1;
    }
}
```