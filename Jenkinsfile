pipeline {
    agent any

    environment {
        DOCKER_HUB_CREDENTIALS = 'dockerhub-cred' // El ID de tus credenciales de Docker Hub en Jenkins
        DOCKER_IMAGE = 'carlosmany/api-tareas'
    }

    stages {
        stage('Clonar repositorio') {
            steps {
                git branch: 'main', credentialsId: 'github-cred', url: 'https://github.com/CarlosMany/api-tareas.git'
            }
        }

        stage('Construir imagen Docker') {
            steps {
                script {
                    dockerImage = docker.build("${DOCKER_IMAGE}")
                }
            }
        }

        stage('Login a Docker Hub') {
            steps {
                script {
                    docker.withRegistry('https://index.docker.io/v1/', DOCKER_HUB_CREDENTIALS) {
                        echo "Sesión iniciada en Docker Hub"
                    }
                }
            }
        }

        stage('Push a Docker Hub') {
            steps {
                script {
                    docker.withRegistry('https://index.docker.io/v1/', DOCKER_HUB_CREDENTIALS) {
                        dockerImage.push("latest")
                    }
                }
            }
        }
    }
}
