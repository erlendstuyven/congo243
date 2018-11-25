VERSION=$(git log --format="%h" -n 1)

docker build --rm -t gp-docker-registry:5000/calculation-ui:$VERSION .
docker push gp-docker-registry:5000/calculation-ui:$VERSION
