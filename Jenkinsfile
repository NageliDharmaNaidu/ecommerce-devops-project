pipeline {
    agent any

    stages {

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t user-service ./user-service'
            }
        }

        stage('Run Container') {
            steps {
                sh 'docker run -d -p 3005:3000 user-service'
            }
        }

    }
}
