# Use the official Nginx image from Docker Hub
FROM nginx:alpine

# Set the maintainer label (optional)
LABEL maintainer="your-email@example.com"

# Set the working directory inside the container
WORKDIR /usr/share/nginx/html

# Copy the contents of the current directory to the container's nginx directory
COPY . /usr/share/nginx/html

# Expose the default HTTP port (80)
EXPOSE 80

# The default command to run the Nginx server
CMD ["nginx", "-g", "daemon off;"]
