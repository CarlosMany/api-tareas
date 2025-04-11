pipeline {
    agent any

    environment {
        DOCKERHUB_CREDENTIALS = credentials('dockerhub-cred')
    }

    stages {
        stage('Clonar repositorio') {
            steps {
                cleanWs()
                git(
                    url: 'https://github.com/CarlosMany/api-tareas.git',
                    branch: 'main'
                )
            }
        }
        
        stage('Construir imagen Docker') {
            steps {
                script {
                    def image = docker.build("carlosmany/api-tareas:${env.BUILD_ID}")
                    image.push()
                }
            }
        }
        stage('Desplegar en Docker Hub') {
            steps {
                script {
                    docker.withRegistry('https://index.docker.io/v1/', DOCKERHUB_CREDENTIALS) {
                        def image = docker.image("carlosmany/api-tareas:${env.BUILD_ID}")
                        image.push()
                    }
                }
            }
        }
    
    }

    post {
        always {
            echo "Pipeline finalizado."
        }
    }
}