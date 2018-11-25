buildNr = "${env.BUILD_NUMBER}"
releaseNr = 1
sprintNr = 22
fixNr = 0


node('jenkins-slave-frontend') {
    stage('Checkout') {
        checkout scm

        withEnv(getEnvironment()) {
            currentBuild.displayName = env.APP_VERSION
        }
    }

    stage('Commit') {
        withEnv(getEnvironment()) {
            wrap([$class: 'Xvfb']) {
                ansiColor('xterm') {
                    try {
                        sh 'npm install && npm run ci'
                    } catch (error) {
                        echo 'The build has failed, copying the protractor reports to the artifacts.'
                        archiveArtifacts artifacts: 'build/protractor/**'
                        throw error
                    } finally {
                        step([$class: "JUnitResultArchiver", testResults: "build/test-results.xml", allowEmptyResults: true])
                    }
                }
            }
        }
    }

    stage('Build & push docker image') {
        withEnv(getEnvironment()) {
            sh 'sudo docker build --rm -t gp-docker-registry:5000/calculation-ui:$APP_VERSION .'
            sh 'sudo docker push gp-docker-registry:5000/calculation-ui:$APP_VERSION'
            sh 'sudo docker rmi gp-docker-registry:5000/calculation-ui:$APP_VERSION'
        }
    }
}

def getEnvironment() {
    def BRANCH_NAME = getBranchName()
    return [
        "BRANCH_NAME=$BRANCH_NAME",
        "APP_VERSION=${releaseNr}.${sprintNr}.${fixNr}.b${buildNr}" + (BRANCH_NAME == "master" ? "" : "_$BRANCH_NAME"),
        "DISPLAY=0:0"
    ]
}

def getBranchName() {
    sh "git rev-parse --abbrev-ref HEAD > result";
    return readFile('result').trim()
}
