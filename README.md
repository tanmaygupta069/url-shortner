# URL Shortener

A simple URL shortening service built with Node.js. This project demonstrates the basics of Node.js including controllers, services, constants, and middleware. It includes URL validation and blacklisting functionality, with different environments for production, development, and local use.

## Features

- Shorten long URLs to shorter ones
- Validate URLs before shortening
- Blacklist certain URLs to prevent shortening
- Transaction based conversion using redis


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)


## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/tanmaygupta069/url-shortener.git
   cd url-shortener
   ```

2. Install dependencies:

   ```bash
   yarn
   ```

4. Create a `.env` file in the root of the project and add the following configuration:

   ```env
    # server config
    ENV = ''
    PORT = 

    # redis config
    REDIS_HOST = ''
    REDIS_PORT = 
   ```


## Usage

### Endpoints

- **POST /shorten**

    Request:
    ```json
    {
        "url": "http://example.com"
    }
    ```

    Response:
    ```json
    {
        "originalUrl": "http://example.com",
        "shortenedUrl": "http://yourshortener/abc123"
    }
    ```


## Contributing

1. Fork the repository.
2. Clone your fork.
3. Create your feature branch (`git checkout -b feature/your-feature`).
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature/your-feature`).
6. Open a pull request.



