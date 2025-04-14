pipeline {
    agent any

    environment {
        IMAGE_NAME = 'carlosmany/api-tareas'
        DOCKERHUB_CREDENTIALS = credentials('dockerhub-creds')
    }

    stages {
        stage('Clonar repositorio') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/CarlosMany/api-tareas.git'
            }
        }

        stage('Construir imagen Docker') {
            steps {
                script {
                    dockerImage = docker.build("${IMAGE_NAME}:${BUILD_NUMBER}")
                }
            }
        }

        stage('Push a Docker Hub') {
            steps {
                script {
                    docker.withRegistry('', 'dockerhub-creds') {
                        dockerImage.push("${BUILD_NUMBER}")
                        dockerImage.push("latest")
                    }
                }
            }
        }

stage('Despliegue remoto') {
    steps {
        script {
            sh """
                docker pull ${IMAGE_NAME}:${BUILD_NUMBER}
                docker stop api || true
                docker rm api || true
                docker run -d --name api -p 3000:3000 ${IMAGE_NAME}:${BUILD_NUMBER}
            """
        }
    }
}
    }
    post {
        success {
            echo 'Despliegue exitoso 🎉'
        }
        failure {
            echo 'Algo falló en el pipeline 😢'
        }
    }
}
