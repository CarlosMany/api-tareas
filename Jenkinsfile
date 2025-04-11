pipeline {
    agent any

    options {
        skipDefaultCheckout(true)
    }

    environment {
        DOCKERHUB_CREDENTIALS = credentials('dockerhub-cred')
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Inicio') {
            steps {
                script {
                    echo "Iniciando el pipeline..."
                }
            }
        }

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
