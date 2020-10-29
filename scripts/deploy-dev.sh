#!bin/bash
cd ..
git pull
composer install
composer dump-autoload
php artisan migrate
php artisan db:seed
php artisan cache:clear
php artisan config:clear
cd frontend/user
npm install
npm run build
