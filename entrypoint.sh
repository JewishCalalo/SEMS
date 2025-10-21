#!/bin/bash

DB_PATH="database/database.sqlite"

# Create database directory if missing
if [ ! -d "database" ]; then
    mkdir -p "database"
    chmod 775 "database"
fi

# Create SQLite file if missing
if [ ! -f "$DB_PATH" ]; then
    echo "Creating SQLite database at $DB_PATH"
    touch "$DB_PATH"
    chmod 775 "$DB_PATH"
fi

# Run migrations
php artisan migrate --force

# Start Laravel's built-in server
php -S 0.0.0.0:80 -t public
