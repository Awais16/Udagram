# Udagram Image Filtering Microservice


### Setup Node Enviornment

You'll need to create a new node server. Open a new terminal within the project directory and run:

1. Initialize a new project: `npm i`
2. run the development server with `npm run dev`

### local test
[Test on your localhost:8082](http://localhost:8082/filteredimage?image_url=https://timedotcom.files.wordpress.com/2019/03/kitten-report.jpg)

### Demo on elasticbean

[AWS EB link (http://project2-dev.eu-central-1.elasticbeanstalk.com/filteredimage?image_url=https://i.pinimg.com/originals/3c/d2/a8/3cd2a844037b921028481f9f3f82d21f.jpg)](http://project2-dev.eu-central-1.elasticbeanstalk.com/filteredimage?image_url=https://i.pinimg.com/originals/3c/d2/a8/3cd2a844037b921028481f9f3f82d21f.jpg)

## Stand Out (Optional)

### Refactor the course RESTapi

If you're feeling up to it, refactor the course RESTapi to make a request to your newly provisioned image server.

### Authentication

Prevent requests without valid authentication headers.
> !!NOTE if you choose to submit this, make sure to add the token to the postman collection and export the postman collection file to your submission so we can review!

### Custom Domain Name

Add your own domain name and have it point to the running services (try adding a subdomain name to point to the processing server)
> !NOTE: Domain names are not included in AWS’ free tier and will incur a cost.