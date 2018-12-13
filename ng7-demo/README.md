## How to host through SSL
- Generate private key and certificate
```bash
git clone https://github.com/RubenVermeulen/generate-trusted-ssl-certificate.git
cd generate-trusted-ssl-certificate
bash generate.sh
```
- MAC
> Add crt file into Keychain with option "Always Trust in When using this certificate"
- WINDOWS
> Add crt file into Local certificate store at "Trusted Root Certification Authorities"
- Add SSL section in "serve" node in angular.json
```json
"serve": {
    "builder": "@angular-devkit/build-angular:dev-server",
    "options": {
    "browserTarget": "ng7-demo:build",
    "ssl": true,
    "sslKey": "ssl/server.key",
    "sslCert": "ssl/server.crt"
    }
}
```
- Serve 
```bash
yarn start
```