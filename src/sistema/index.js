/*
FsDk - Jose Antonio Gimenez Cayuela 
Simple app para obtener informacion de 1 dominio
*/

import fetch from 'node-fetch';

let peticion = 'chatozu.org'
const urlConsulta = 'https://api.ip2whois.com/v2?';
const keyToken = 'HZRMIA2DI3YMZGIU2WZLPUC8YXHBYYPF';
const intermedioConsulta = '&'
const palabraKey = 'key=';
const palabraDomain = 'domain='

//debug
const response = await fetch(urlConsulta + palabraKey + keyToken + intermedioConsulta + palabraDomain + peticion);
const consulta = await response.json()
console.log(urlConsulta + palabraKey + keyToken + intermedioConsulta + palabraDomain + peticion);

let nombreDeDominio = consulta['domain'];
let idDominio = consulta['domain_id'];
let estadoDominio = consulta['status'];
let creacionDominio = consulta['create_date'];
let ultimaActualizacion = consulta['update_date'];
let expiracion = consulta['expire_date'];
let provincia = consulta['registrant'].region;
let pais = consulta['registrant'].country;
let servidoresNS = consulta['nameservers'];

console.log('Nombre de Dominio:' + ' ' + nombreDeDominio);
console.log('ID Del dominio:' + ' ' + idDominio);
console.log('Estado del dominio:' + ' ' + estadoDominio);
console.log('Creacion del dominio:' + ' ' + creacionDominio);
console.log('Ultima actualizacion:' + ' ' + ultimaActualizacion);
console.log('Fecha de expiracion:' + ' ' + expiracion);
console.log('Provincia del registrante:' + ' ' + provincia);
console.log('Pais del registrante:' + pais);
console.log('Servidores DNS:' + ' ' + servidoresNS);
console.log('========Fin de la consulta==========');
