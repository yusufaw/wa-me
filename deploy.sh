#!/bin/sh
ssh -tt $DIGI_O_USERNAME@$DIGI_O_IP << ENDSSH
   cd /home/$DIGI_O_USERNAME/workspace/wa-me/
   git pull origin main
   npm install
   pm2 restart wa-me
   exit
ENDSSH