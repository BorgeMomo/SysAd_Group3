# Activity 3.1 - Install SSH Server on CentOS/RHEL 8

## Task 1: Install CentOS/RHEL 8

The CentOS/RHEL 8 virtual machine was created and installed with the required configuration.

- RAM: 2 GB
- Hard Disk: 20 GB

## Task 2: Install SSH Server

Install the OpenSSH server:

```bash
sudo dnf install openssh-server

## Task 3: Pub key to CentOS

sudo systemctl start sshd
sudo systemctl enable sshd
sudo firewall-cmd --zone=public --permanent --add-service=ssh
sudo firewall-cmd --reload
sudo systemctl reload sshd
ssh-copy-id -i ~/.ssh/id_rsa.pub ace@192.168.56.107
cat ~/.ssh/authorized_keys

## Task 4: Verify SSH Remote Connection

ssh ace@192.168.56.107
