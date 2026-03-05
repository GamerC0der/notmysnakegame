FROM node:20

# Create a non-root user to run the app
RUN useradd -m -u 1000 appuser
USER appuser

# Set working directory
WORKDIR /home/appuser/app

# Clone the repository
RUN git clone https://github.com/GamerC0der/notmysnakegame .

# Install dependencies
RUN npm install

# Expose the requested port
EXPOSE 7860

# Set environment variables so the app knows to use port 7860
ENV PORT=7860
ENV VITE_PORT=7860

# Start the application
CMD ["npm", "run", "dev"]
