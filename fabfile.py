from fabric.api import local, warn_only

def prepare_dev_environment():
    local('sudo ansible-galaxy install -r ansible/requirements.yml')
    local('ansible-playbook ansible/dev-environment.yml')

def deploy():
    local('ansible-playbook ansible/site.yml --tags webapp')

def upload_dist():
    local('ansible-playbook ansible/site.yml --tags binary')

