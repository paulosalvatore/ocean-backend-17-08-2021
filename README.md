# Começando um projeto NodeJS pelo GitPod.io

1. Entre no site GitPod.io e faça o login (pode ser com GitLab, GitHub ou Bitbucket).
   https://gitpod.io/login/
   (eu fiz com GitHub)

2. Após o login, abra a seguinte URL:
   https://www.gitpod.io/#https://github.com/paulosalvatore/nodejs-clean-template

3. Para rodar, vá no terminal e digite o seguinte comando:

   - ```bash
     node index.js
     ```

# Começando um projeto NodeJS pelo VSCode instalado na máquina

1. Crie uma pasta no seu PC, de preferência em uma localização de pastas sem acento e sem espaço, exemplo:

```bash
C:\GitHub\SamsungOcean\ocean-backend-17-08-2021
```

2. Clique em `Arquivo > Abrir o Windows Power Shell como administrador` e digite o seguinte comando:

   - ```bash
     code .
     ```

   - **Opcionalmente**, se você marcou a opção para adicionar o VSCode no menu de path, você pode simplesmente clicar com o botão direto na pasta e clicar em `Abrir com Code` e pular esse passo de abril o terminal/digitar o comando `code.`

4. O VSCode deverá abrir. Clique em `Terminal > New terminal`.

5. No terminal, digite o seguinte comando:
   - ```bash
     npm init -y
     ```
   
   - Esse comando irá gerar o arquivo `package.json` com um conteúdo inicial.
   
6. Clique no botão `New file` e digite `index.js`

   - ![image-20210817093440179](C:\Users\paulo\AppData\Roaming\Typora\typora-user-images\image-20210817093440179.png)

7. Digite o seguinte código:

   - ```javascript
     console.log("Hello, world!")
     ```

8. Salve o arquivo, clique no terminal, digite o seguinte comando e execute:

   - ```bash
     node index.js
     ```

   - Teremos a seguinte saída:

     - ```bash
       C:\GitHub\SamsungOcean\ocean-backend-17-08-2021>node index.js
       Hello, world!
       ```

       

