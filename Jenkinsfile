pipeline {
    agent any

    environment {
        DOCKERHUB_CREDENTIALS = credentials('dockerhub-cred')
    }

    stages {
        stage('Construir imagen Docker') {
            steps {
                script {
                    docker.build("carlosmany/api-tareas")
                }
            }
        }

        stage('Login a Docker Hub') {
            steps {
                script {
                    sh "echo ${DOCKERHUB_CREDENTIALS_PSW} | docker login -u ${DOCKERHUB_CREDENTIALS_USR} --password-stdin"
                }
            }
        }

        stage('Push a Docker Hub') {
            steps {
                script {
                    docker.image("carlosmany/api-tareas").push()
                }
            }
        }
    }
}