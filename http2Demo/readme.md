# HTTP/2 demo using Nginx

## How to start container
#### 1. Build
```bash
docker build -t h2demo .
```
#### 2. Run
```bash
docker run -d -p 80:80 -p 443:443 -v ~/workspace/http2Demo/:/var/www/html/ h2demo
```
#### 3. Verify HTTP/2
```bash
docker run --rm badouralix/curl-http2 -LI <host> --insecure 
```

#### 4. Test HTTP/2 Performance (HPACK)
```bash
docker run --rm svagi/nghttp2 h2load https://blog.cloudflare.com -n 15 | tail -6 | head -1
```


## How to generate SSL certificates
#### Using OpenSSL
```bash
openssl genrsa -des3 -passout pass:1234 -out server.pass.key 2048

openssl rsa -passin pass:1234 -in server.pass.key -out server.key

openssl req -new -key server.key -out server.csr -subj "/CN=Carol Liu/OU=localhost/O=carol ltd/L=CHINO HILLS/ST=CA/C=US" 

openssl x509 -req -days 365 -in server.csr -signkey server.key -out server.cer

openssl pkcs12 -export -in server.cer -inkey server.key -out server.pfx -passout pass:1234
```

#### Using Java Keytool
```bash
keytool -genkeypair -alias H2Cert -dname "CN=Andre Shen, OU=localhost,  O=andre ltd, L=CHINO HILLS, ST=CA, C=US" -keypass 1234 -storepass 1234 -keyalg RSA -validity 365

keytool -export -alias H2Cert -file H2Cert.cer -storepass 1234
```
