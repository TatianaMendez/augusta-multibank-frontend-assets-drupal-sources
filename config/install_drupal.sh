#!/bin/bash

if [ ! -d "/dev/mnt/efs/drupalmb" ]; then
  
  sudo mkdir /dev/mnt/efs/drupalmb
  sudo chmod 777 -R /dev/mnt/efs/drupalmb
  sudo aws s3 cp s3://$1/config/composer.json /dev/mnt/efs/drupalmb/composer.json
  sudo chmod 777 -R /dev/mnt/efs/drupalmb
  /usr/local/bin/composer install -d /dev/mnt/efs/drupalmb
  sudo chmod 777 -R /dev/mnt/efs/drupalmb
  echo "istalación finalizada" > final.txt

else
  # Directory exists, skip to the next command
  echo "Directory '/drupalmb' already exists." > final.txt
fi
