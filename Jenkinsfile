pipeline {
    agent any

    environment {
        DOCKERHUB_CREDENTIALS = credentials('dockerhub-cred')
    }

    stages {
        stage('Clonar repositorio') {
    steps {
        git credentialsId: 'github-cred', url: 'https://github.com/CarlosMany/api-tareas.git', branch: 'main'
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

