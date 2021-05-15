web_client
==========

### Setup
1. Build the docker images using `docker-compose build --compress`
2. Run the docker containers using `docker-compose up --detach`
3. Verify that the containers are up using `docker-compose ps`
4. To view the logs of the service run `docker-compose logs --follow web`

### FAQ
Q. Unable to start the react app as the required network does not exists

`ERROR: Network api_gateway_api-gateway declared as external, but could not be found. Please create the network manually using `docker network create api_gateway_api-gateway` and try again.`

A. This service has a dependency of [api-gateway](https://github.com/unofficialopensource-knit/api_gateway).
Make sure you are running that service as well, becuase the web client interacts to our microservices using the gateway
