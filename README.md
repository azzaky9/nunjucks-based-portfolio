# I Recommend you read this docs before clone! ⭐

Thank you for checking out this repository! Your stars help support this project tremendously.

This project utilizes `Eleventy11` to swiftly generate SEO-friendly websites and leverages `Nunjucks` to expedite the development process. For detailed information, refer to the following documentation:

- [Eleventy11 Documentation](https://www.11ty.dev/)
- [Nunjucks Documentation](https://mozilla.github.io/nunjucks/)

## Getting Started

### Prerequisites
Before getting started, ensure that your system meets the following requirements:

- [X] Node.js v18 and npm v9. To check your versions, open your terminal and run:
    - `npm --version`
    - `node --version`
    If Node.js or npm is not installed or outdated, download and install them from [here](https://nodejs.org/dist/v20.10.0/).

### Setup Instructions
Once you've cloned this repository and verified your Node.js and npm versions, follow these steps:

1. Install dependencies:
    ```bash
    npm install
    ```
    *Shortcut:* `npm run i`

2. Start the local server:
    ```bash
    npm run start
    ```
    The server information will be displayed in the terminal, usually starting at `http://localhost:8080/`. If port 8080 is already in use, a different port will be assigned. Open your browser and navigate to `http://localhost:8080/` to begin your development.

## Deployment

Upon completing your development work, follow these steps to deploy your website:

1. Build your project:
    ```bash
    npm run build
    ```
    This command generates a new folder named `dist` in your directory. You can customize this folder name by modifying the configuration in `package.json`.

2. Hosting deployment:
    Upload the contents of the `dist` folder to your hosting provider.

Feel free to reach out if you encounter any issues or have further questions! 😊
