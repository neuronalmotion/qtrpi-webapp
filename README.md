# qtrpi-webapp

This Angular2 / Typescript repository contains the code of the public website http://www.qtrpi.com/.

## Getting started on your development machine
Start by installing Ansible on your development machine:
```bash
sudo pip install ansible
```

Install fabric:
```bash
sudo pip install fabric
```

Create the file /etc/ansible/hosts:
```bash
# Syntax is
# <domain>    ansible_user=root
```

After that, execute the following fab task to prepare your dev environment:
```bash
fab prepare_dev_environment
```

You should now be able to execute:
```bash
ng serve
```
And navigate to `http://localhost:4200`

### Code scaffolding
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class`.


