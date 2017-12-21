
* Using OpenSSL
openssl genrsa -des3 -passout pass:1234 -out server.pass.key 2048

openssl rsa -passin pass:1234 -in server.pass.key -out server.key

openssl req -new -key server.key -out server.csr -subj "/CN=Carol Liu/OU=localhost/O=carol ltd/L=CHINO HILLS/ST=CA/C=US" 

openssl x509 -req -days 365 -in server.csr -signkey server.key -out server.cer

openssl pkcs12 -export -in server.cer -inkey server.key -out server.pfx -passout pass:1234

* Using Java Keytool
keytool -genkeypair -alias H2Cert -dname "CN=Andre Shen, OU=localhost,  O=andre ltd, L=CHINO HILLS, ST=CA, C=US" -keypass 1234 -storepass 1234 -keyalg RSA -validity 365

keytool -export -alias H2Cert -file H2Cert.cer -storepass 1234
