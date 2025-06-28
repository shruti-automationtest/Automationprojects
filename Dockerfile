# Use official Playwright base image with all browsers
FROM mcr.microsoft.com/playwright:v1.44.0-jammy

# Set working directory
WORKDIR /app

# Copy everything from your local folder to the container
COPY . .

# Install dependencies
RUN npm ci

# Run tests in headed mode
CMD ["npx", "playwright", "test", "--headed"]
