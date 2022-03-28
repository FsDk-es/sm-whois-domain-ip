/*
FsDk - Jose Antonio Gimenez Cayuela 
Simple app para obtener informacion de 1 dominio
*/

//importamos 1 variable. del archivo de configuracion
import {config} from '../../config.js';
// 
// importamos la libreria node-fetch
import fetch from 'node-fetch';
//
let dominioAconsultar = process.argv[2];
//console.log(dominioAconsultar);
let peticion = dominioAconsultar
const urlConsulta = 'https://api.ip2whois.com/v2?';
const keyToken = config.key
const intermedioConsulta = '&'
const palabraKey = 'key=';
const palabraDomain = 'domain='



//debug/
const response = await fetch(urlConsulta + palabraKey + keyToken + intermedioConsulta + palabraDomain + peticion);
const consulta = await response.json();
//console.log(urlConsulta + palabraKey + keyToken + intermedioConsulta + palabraDomain + peticion);

if (consulta.error != null) {
    console.log('Codigo de error' + ' ' + consulta.error.error_code);
    console.log('Mensaje de error:' + ' ' + consulta.error.error_message);
    process.exit(); 
}

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
console.log('Pais del registrante:' + ' ' + pais);
console.log('Servidores DNS:' + ' ' + servidoresNS);
console.log('========Fin de la consulta==========');

//console.log(consulta);