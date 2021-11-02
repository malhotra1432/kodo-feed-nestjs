<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

# KODO FEED

## Steps to run project
- Clone the repo - `git clone https://github.com/malhotra1432/kodo-feed-nestjs.git`
- Install the dependencies - `./go install`
- Run the project - `./go run`
- Seed the  Data
    - via postman -  Import - [Postman Collection](kodo-NestJs.postman_collection.json) to postman and it will have all the APIs available  with data. Try to hit POST endpoint to create JSON file and then GET endpoint to fetch data.

## Installation

```bash
 ./go install
```

## If you have permission issue in accessing `go`
```bash 
chmod 744 ./go
```

## Running the app

```bash
# development
 ./go run

# watch mode
 ./go runDev

## Test

# unit tests
 ./go test

# e2e tests
 ./go teste2e

# test coverage
 ./go testCov
```