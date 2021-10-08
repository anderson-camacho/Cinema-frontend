pipeline {
    agent {
        label 'Slave_Induccion'
    }

     triggers {
        pollSCM('* * * * *')
    }

    tools {
        jdk 'JDK8_Centos' //Verisión preinstalada en la Configuración del Master
    }

    stages {

        stage('Checkout'){
            steps{
                echo "------------>Checkout<------------"
                checkout([
                    $class: 'GitSCM',
                    branches: [[name: '*/master']],
                    doGenerateSubmoduleConfigurations: false,
                    extensions: [],
                    gitTool: 'Default',
                    submoduleCfg: [],
                    userRemoteConfigs: [[
                        credentialsId: 'GitHub_anderson.camacho',
                        url:'https://github.com/anderson-camacho/Cinema_FrontEnd'
                    ]]
                ])
            }
        }

        stage('Install') {
            steps {
                sh 'npm install'
            }
        }

        stage('Tests') {
            steps {
                sh 'npm run test'
            }
        }


        stage('Sonar Scanner Coverage') {
            steps{
                echo '------------>Análisis de código estático<------------'
                withSonarQubeEnv('Sonar') {
                    sh "${tool name: 'SonarScanner', type:'hudson.plugins.sonar.SonarRunnerInstallation'}/bin/sonar-scanner"
                }
            }
        }

        stage('Build'){
            steps {
                sh 'ng build --prod '
            }
        }
    }

    post{
        always {
            echo 'This will always run'
        }
        success {
            echo 'This will run only if successful'
        }
        failure {
            echo 'This will run only if failed'
            mail (to: 'anderson.camacho@ceiba.com.co', subject: "Failed Pipeline:${currentBuild.fullDisplayName}",body: "Something is wrong with ${env.BUILD_URL}")
        }
    }
}
