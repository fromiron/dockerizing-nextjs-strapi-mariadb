start:
	docker-compose up

build:
	docker-compose build

stop:
	docker-compose stop

down:
	docker-compose down

bbuild:
	docker-compose run --rm backend sh -c "npm run build"