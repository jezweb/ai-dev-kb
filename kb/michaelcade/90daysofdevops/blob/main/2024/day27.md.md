# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2024/day27.md
Language: multiple

## Snippet: Event-Driven Ansible Rulebook
Description: YAML configuration defining EDA rulebooks that respond to webhook events and Alertmanager alerts. Includes conditions and actions for automatic service management.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2024/day27.md#2025-04-17_snippet_9
Language: yaml

```yaml
---
- name: Listen to webhook events
  hosts: all
  sources:
    - ansible.eda.webhook:
        host: 0.0.0.0
        port: 5000
  rules:
    - name: Debug event output
      condition: 1 == 1
      action:
        debug:
          msg: "{{ event }}"

- name: Listen to Alertmanager alerts
  hosts: all
  sources:
    - ansible.eda.alertmanager:
        host: 0.0.0.0
        port: 9000
        data_alerts_path: alerts
        data_host_path: labels.instance
        data_path_separator: .
  rules:
    - name: Restart MySQL server
      condition: event.alert.labels.alertname == 'MySQL not running' and event.alert.status == 'firing'
      action:
        run_module:
          name: ansible.builtin.service
          module_args:
            name: mysql
            state: restarted
    - name: Debug event output
      condition: 1 == 1
      action:
        debug:
          msg: "{{ event }}"
```

## Snippet: Defining EDA Ruleset for Alertmanager Alerts in YAML
Description: This YAML snippet defines an EDA ruleset that listens for Alertmanager alerts and triggers actions based on specific conditions. It includes a rule to restart the MySQL server when it's not running and a debug rule to output event information.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2024/day27.md#2025-04-17_snippet_13
Language: yaml

```yaml
- name: Listen to Alertmanager alerts
  hosts: all
  sources:
    - ansible.eda.alertmanager:
        host: 0.0.0.0
        port: 9000
        data_alerts_path: alerts
        data_host_path: labels.instance
        data_path_separator: .
  rules:
    - name: Restart MySQL server
      condition: event.alert.labels.alertname == 'MySQL not running' and event.alert.status == 'firing'
      action:
        run_playbook:
          name: ./playbook.yml
    - name: Debug event output
      condition: 1 == 1
      action:
        debug:
          msg: "{{ event }}"
```

## Snippet: Testing EDA with Different Payload
Description: Sending a different payload to the EDA webhook endpoint to demonstrate conditional rule processing based on the content of the event.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2024/day27.md#2025-04-17_snippet_12
Language: console

```console
curl \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"bar": "baz"}' \
  http://localhost:5000/endpoint
```

## Snippet: Running Ad-hoc Ansible Command to Install Webservers
Description: Using the Ansible command-line tool to install webservers on target hosts based on the webserver variable defined in the inventory.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2024/day27.md#2025-04-17_snippet_5
Language: console

```console
ansible \
   webservers  \
  -m package   \
  -a 'name="{{ webserver }}"' \
  --one-line
```

## Snippet: Creating Inventory File for Ansible Lab
Description: YAML configuration for defining webservers and EDA controller hosts in the inventory file. Includes host variables for specifying the webserver type for each host.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2024/day27.md#2025-04-17_snippet_2
Language: yaml

```yaml
---
# hosts.yml
webservers:
  hosts:
    webshop.example.com:
      ansible_host: <ip-address>
      webserver: apache2
    company.example.com:
      ansible_host: <ip-address>
      webserver: httpd
eda_controller:
  hosts:
    eda-controller.example.com:
      ansible_host: <ip-address>
```

## Snippet: Installing Ansible Dependencies
Description: Command to install Ansible and other required dependencies specified in the requirements.txt file using pip.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2024/day27.md#2025-04-17_snippet_1
Language: bash

```bash
pip install -r requirements.txt
```

## Snippet: Example Ansible Playbook Using Roles
Description: A playbook that demonstrates using roles with pre-tasks and post-tasks. It displays messages and applies the 'example' role to hosts in the webservers group.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2024/day27.md#2025-04-17_snippet_7
Language: yaml

```yaml
---
- name: Example role
  hosts: webservers
  gather_facts: false
  vars:
    greeting: "Hello World!"
  pre_tasks:
    - name: Say Hello
      ansible.builtin.debug:
        msg: "{{ greeting }}"
  roles:
    - role: example
  post_tasks:
    - name: Say goodbye
      ansible.builtin.debug:
        msg: Goodbye!
```

## Snippet: Setting Up Python Virtual Environment for Ansible Lab
Description: Commands to clone the lab repository, create a Python virtual environment, and activate it for the Event-Driven Ansible lab setup.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2024/day27.md#2025-04-17_snippet_0
Language: bash

```bash
git clone https://github.com/mocdaniel/lab-event-driven-ansible.git
cd lab-event-driven-ansible
python3 -m venv .venv
source .venv/bin/activate
```

## Snippet: Testing Event-Driven Ansible Webhook
Description: Using curl to send a POST request to the EDA webhook endpoint to trigger an event and observe how the EDA controller processes the event.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2024/day27.md#2025-04-17_snippet_10
Language: console

```console
curl \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"foo": "bar"}' \
  http://localhost:5000/endpoint
```

## Snippet: Installing Ansible Roles and Collections
Description: Command to install required Ansible roles and collections specified in the requirements.yml file.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2024/day27.md#2025-04-17_snippet_3
Language: bash

```bash
ansible-galaxy install -r requirements.yml
```

## Snippet: Starting Webservers with Ansible Ad-hoc Command
Description: Command to ensure webservers are running on all hosts in the webservers group using the Ansible service module.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2024/day27.md#2025-04-17_snippet_6
Language: console

```console
ansible \
   webservers  \
  -m service   \
  -a 'name="{{ webserver }}" state=started' \
  --one-line
```

## Snippet: Running the Example Playbook
Description: Command to execute the example playbook that demonstrates role execution and task sequencing in Ansible.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2024/day27.md#2025-04-17_snippet_8
Language: console

```console
ansible-playbook \
    playbooks/example.yml
```

## Snippet: Stopping MySQL Service and Monitoring EDA Controller Logs
Description: This console command snippet demonstrates how to stop the MySQL service and monitor the EDA controller logs to observe the automatic restart process triggered by the EDA ruleset.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2024/day27.md#2025-04-17_snippet_14
Language: console

```console
systemctl stop mysql
journalctl -fu edacontroller
```

## Snippet: Running the Ansible Setup Playbook
Description: Command to execute the setup playbook that configures the lab environment for Event-Driven Ansible demonstrations.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2024/day27.md#2025-04-17_snippet_4
Language: bash

```bash
ansible-playbook playbooks/setup.yml
```

## Snippet: Checking MySQL Service Status after Automatic Restart
Description: This console command checks the status of the MySQL service after the automatic restart triggered by the EDA ruleset to confirm that it's running again.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2024/day27.md#2025-04-17_snippet_15
Language: console

```console
systemctl status mysql
```

## Snippet: Improved EDA Rulebook with Conditional Logic
Description: Enhanced webhook rulebook that applies different actions based on the content of the incoming event. It checks for the presence of a specific key and responds accordingly.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2024/day27.md#2025-04-17_snippet_11
Language: yaml

```yaml
---
- name: Listen to webhook events
  hosts: all
  sources:
    - ansible.eda.webhook:
        host: 0.0.0.0
        port: 5000
  rules:
    - name: Foo
      condition: event.payload.foo is defined
      action:
        debug:
          msg: "{{ event.payload.foo }}"
    - name: No foo
      condition: 1 == 1
      action:
        debug:
          msg: "no foo :("
```