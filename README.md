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
- [Project Structure](#project-structure)
- [Middlewares](#middlewares)
- [Contributing](#contributing)
- [License](#license)

## Dependencies Used

   ```json
   "body-parser": "^1.20.2",
   "dotenv": "^16.4.5",
   "express": "^4.19.2",
   "redis": "^4.6.14",
   "validator": "^13.12.0"
   "nodemon" : "^3.1.3"
   ```

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/tanmaygupta069/url-shortener.git
   cd url-shortener
   ```

2. Install dependencies:

   ```bash
   npm install body-parser dotenv express redis validator
   ```

3. Install dev dependencies:

   ```bash
   npm nodemon
   ```

4. Create a `.env` file in the root of the project and add the following configuration:

   ```env
    # server config
    ENV = 'LOCAL'
    PORT = 8080

    # redis config
    REDIS_HOST = ''
    REDIS_PORT = 6379
   ```

5. Define your blacklisted URLs in `constants/blacklisted.urls.constants.js` for different environments:

   ```javascript
   // config/blacklist.js
   const localBlackListedUrls = ["https://localhost:8080"];
   const devBlackListedUrls = ["https://localhost:8081"];
   const prodBlackListedUrls = ["https://xhamster.com", "https://pornhub.com"];
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

## Project Structure

```plaintext
url-shortener/
├──src/
│  ├── config/
│  ├── index.js
|  ├── constants/
│  │    ├── blacklisted.urls.constants.js
│  │    └── index.js
|  ├── controllers/
│  │    ├── v1/
│  │    │   └── decode.controller.js
│  │    │   └── encode.controller.js
│  │    └── index.js
│  ├── database/
│  │    └── redis/
│  │        └── index.js
|  ├── middlewares/
│  │    └── blacklisting.middleware.js
│  ├── router/
│  │    ├── v1/
│  │    │   └── index.js
│  │    └── index.js
│  ├── services/
│  │    ├── redis/
│  │    │   └── index.js
│  │    ├── v1/
│  │    │   ├── decode.service.js
│  │    │   └── encode.service.js
│  │    └── index.js
│  ├── utils/
│  │    ├── datetime.utils.js
│  │    └── response.utils.js
│  ├── validators/
│  │    └── url.validators.js
│  └── server.js
├── .env
├── .gitignore
├── index.js
├── package.json
└── README.md
```
- **controllers/urlController.js**: Contains the logic for handling URL shortening requests.
- **middlewares/validateUrl.js**: Middleware for validating URLs.
- **middlewares/blacklist.js**: Middleware for checking blacklisted URLs.
- **services/urlService.js**: Contains the business logic for URL shortening and interaction with Redis.
- **constants/blacklist.js**: Contains blacklisted URLs for different environments.


## Middlewares

1. **URL Validation Middleware**: Validates the URL sent before shortening it using the `validator` library.

2. **Blacklisting Middleware**: Checks if the URL is not one of the blacklisted URLs. It uses three different arrays to store blacklisted URLs for `prod`, `dev`, and `local` environments.

### Redis Transactions

The original and shortened URLs are stored in a Redis database using transactions to ensure data integrity.


## Contributing

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


