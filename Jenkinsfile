pipeline {
    agent any
    stages {
        stage('Clone') {
            steps {
                git 'https://github.com/Harihshshyam/demo-app.git'
            }
        }
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t demo-app:latest .'
            }
        }
        stage('Run Docker Container') {
            steps {
                sh 'docker stop demo-app || true'
                sh 'docker rm demo-app || true'
                sh 'docker run -d -p 3000:3000 --name demo-app demo-app:latest'
            }
        }
    }
    post {
        success {
            echo 'Pipeline completed successfully! Docker container is running.'
        }
        failure {
            echo 'Pipeline failed! Check logs.'
        }
    }
}
