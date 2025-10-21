FROM php:8.2-apache

# Install dependencies
RUN apt-get update && apt-get install -y \
    libzip-dev unzip git curl sqlite3 libsqlite3-dev zlib1g-dev \
    && docker-php-ext-configure zip \
    && docker-php-ext-install zip pdo pdo_sqlite

# Copy project files
COPY . /var/www/html
WORKDIR /var/www/html

# Set permissions
RUN chown -R www-data:www-data /var/www/html

# Expose port
EXPOSE 80
