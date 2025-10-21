FROM php:8.2-apache

# Install system dependencies and PHP extensions
RUN apt-get update && apt-get install -y \
    libzip-dev unzip git curl sqlite3 libsqlite3-dev zlib1g-dev \
    && docker-php-ext-configure zip \
    && docker-php-ext-install zip pdo pdo_sqlite

COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]

# Suppress Apache hostname warning
RUN echo "ServerName localhost" >> /etc/apache2/apache2.conf

# Copy Laravel project files
COPY . /var/www/html
WORKDIR /var/www/html

# Create SQLite database file
RUN touch database/database.sqlite

# Install Composer and Laravel dependencies
RUN curl -sS https://getcomposer.org/installer | php && \
    mv composer.phar /usr/local/bin/composer && \
    composer install --no-dev --optimize-autoloader

# Point Apache to Laravel's public directory
RUN sed -i 's|/var/www/html|/var/www/html/public|g' /etc/apache2/sites-available/000-default.conf

# Set permissions for writable directories
RUN chmod -R 775 storage bootstrap/cache public database/database.sqlite && \
    chown -R www-data:www-data /var/www/html

EXPOSE 80