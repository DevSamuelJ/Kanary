# ---- Estágio 1: Build (Compilação com Java 21) ----
# Usa uma imagem oficial do Maven com a versão correta do Java
FROM maven:3.9-eclipse-temurin-21 AS build

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia o pom.xml da sua pasta 'server'
COPY server/pom.xml .

# Baixa as dependências primeiro para aproveitar o cache do Docker
RUN mvn dependency:go-offline

# Copia o resto do código-fonte da sua pasta 'server'
COPY server/src ./src

# Compila o projeto e gera o .jar, pulando os testes para acelerar
RUN mvn package -DskipTests

# ---- Estágio 2: Run (Execução com Java 21) ----
# Usa uma imagem Java 21 leve, só para rodar (sem o Maven)
FROM eclipse-temurin:21-jre-jammy

WORKDIR /app

# Copia o .jar que foi gerado no Estágio 1
COPY --from=build /app/target/*.jar app.jar

# Expõe a porta que sua aplicação usa (Spring Boot usa 8080 por padrão)
EXPOSE 8080

# Comando para iniciar sua aplicação
ENTRYPOINT ["java","-jar","app.jar"]
