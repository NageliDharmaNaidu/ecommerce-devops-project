pipeline {
    agent any

    stages {

        stage('Clone Repository') {
            steps {
                git 'https://github.com/NageliDharmaNaidu/ecommerce-devops-project.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t user-service ./user-service'
            }
        }

        stage('Run Container') {
            steps {
                sh 'docker run -d -p 4000:3000 user-service'
            }
        }

    }
}
