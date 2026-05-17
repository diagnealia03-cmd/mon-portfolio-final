pipeline {
    agent any

    environment {
        IMAGE_BACKEND  = 'ghcr.io/diagnealia03-cmd/portfolio-backend'
        IMAGE_FRONTEND = 'ghcr.io/diagnealia03-cmd/portfolio-frontend'
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main',
                    credentialsId: 'ghcr-credentials',
                    url: 'https://github.com/diagnealia03-cmd/mon-portfolio-final.git'
            }
        }

        stage('Build Backend') {
            steps {
                sh 'docker build -t $IMAGE_BACKEND:latest ./alia-portfolio-backend'
            }
        }

        stage('Build Frontend') {
            steps {
                sh 'docker build -t $IMAGE_FRONTEND:latest ./alia-portfolio-frontend'
            }
        }

        stage('Push Images') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'ghcr-credentials',
                    usernameVariable: 'GHCR_USER',
                    passwordVariable: 'GHCR_TOKEN'
                )]) {
                    sh 'echo $GHCR_TOKEN | docker login ghcr.io -u $GHCR_USER --password-stdin'
                    sh 'docker push $IMAGE_BACKEND:latest'
                    sh 'docker push $IMAGE_FRONTEND:latest'
                }
            }
        }
    }

    post {
        success { echo '✅ Images pushées sur GHCR !' }
        failure { echo '❌ Échec — vérifier les logs' }
    }
}
