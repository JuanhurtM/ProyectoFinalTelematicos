# ProyectoFinalTelematicos

---------------------------------------------------------------------------------------------------------------------------------------------------------------------

RESUMEN

---------------------------------------------------------------------------------------------------------------------------------------------------------------------

Topologia de red que simula el funcionamieno del balanceo de cargas para servidores web. Para esto se crearon 3 maquinas CentOS Stream 9.

---------------------------------------------------------------------------------------------------------------------------------------------------------------------

CONFIGURACION DE MAQUINAS

----------------------------------------------------------------------------------------------------------------------------------------------------------------------

MAQUINA BALANCEADOR IP 192.168.50.4
- NGINX

sudo yum install nginx -y

---------------------------------------------------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------------------------------------------------

MAQUINA SERVIDOR WEB 1 IP 192.168.50.3
- APACHE

sudo yum install httpd -y

- NODE.JS

sudo yum install nodejs -y

---------------------------------------------------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------------------------------------------------

MAQUINA SERVIDOR WEB 2 IP 192.168.50.2
-APACHE

sudo yum install httpd -y

- NODE.JS

sudo yum install nodejs -y

---------------------------------------------------------------------------------------------------------------------------------------------------------------------

Una ves se instalen las correspondientes tecnologias se configuran los archivos correspondientes a NGINX y APACHE en sus maquinas respectivas ademas de encender
los servicios.




