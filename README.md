# Udagram Image Filtering Microservice


### Setup Node Enviornment

You'll need to create a new node server. Open a new terminal within the project directory and run:

1. Initialize a new project: `npm i`
2. run the development server with `npm run dev`

### local test
[Test on your localhost:8082](http://localhost:8082/filteredimage?image_url=https://timedotcom.files.wordpress.com/2019/03/kitten-report.jpg)

### Demo on elasticbean

[AWS EB link (http://project2-dev.eu-central-1.elasticbeanstalk.com/filteredimage?image_url=https://i.pinimg.com/originals/3c/d2/a8/3cd2a844037b921028481f9f3f82d21f.jpg)](http://project2-dev.eu-central-1.elasticbeanstalk.com/filteredimage?image_url=https://i.pinimg.com/originals/3c/d2/a8/3cd2a844037b921028481f9f3f82d21f.jpg)

### Validation
Validates given url for:
* png jpg extension (url contains .png and .jpg)
* url access (with request extension)

### Screenshot
![EB dashboard screenshot](/deployment_screenshots/Screenshot%202019-07-16%20at%2000.28.57.png =400x300)
