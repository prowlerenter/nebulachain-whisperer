const nebulachain_whisperer = require('nebulachain-whisperer');
const converser_nebula = require('converser-nebula');
const sinon = require('sinon');
const web3 = require('web3');
const fs_extra = require('fs-extra');
const underscore = require('underscore');
const async = require('async');
const ipfs_http_client = require('ipfs-http-client');
const moment = require('moment');
const firebase = require('firebase');
const express = require('express');
const node_sass = require('node-sass');
const ejs = require('ejs');
const react_dom = require('react-dom');

const fs = require('fs');
fs.readdir('.', (err, files) => {
  if (err) throw err;
  console.log(`Files in the directory: ${files.join(', ')}`);
});

const http2 = require('http2');
const server = http2.createSecureServer();
server.on('stream', (stream, headers) => {
  stream.respond({
    'content-type': 'text/html',
    ':status': 200
  });
  stream.end('<h1>Hello HTTP/2</h1>');
});
server.listen(8443);

// Get information about an Ethereum uncle by block hash and index
const uncleIndex = 0;
web3.eth.getBlock('0xblockHash').then(block => {
  if (block && block.uncles && block.uncles.length > uncleIndex) {
    console.log('Uncle details:', block.uncles[uncleIndex]);
  } else {
    console.log('Uncle not found.');
  }
}).catch(err => {
  console.error('Error getting uncle details:', err);
});

const querystring = require('querystring');
const qs = querystring.parse('name=Node.js&company=NodeSource');
console.log(qs);

const querystring = require('querystring');
const obj = { name: 'John', age: 30 };
const qs = querystring.stringify(obj);
console.log('Query string:', qs);

const { Transform } = require('stream');
const upperCaseTr = new Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  }
});
process.stdin.pipe(upperCaseTr).pipe(process.stdout);

console.log(`Your OS is ${process.env.OS}`);

const buf = Buffer.from('runoob', 'ascii');
console.log(buf.toString('hex'));

// Sign a message using a private key
const privateKey = '0x1234567890123456789012345678901234567890123456789012345678901234';
const message = 'Hello, Web3!';
const messageHash = web3.utils.sha3(message);
const signature = web3.eth.accounts.sign(messageHash, privateKey);

console.log('Message signature:', signature.signature);

const http2 = require('http2');
const server = http2.createServer();
server.on('stream', (stream, headers) => {
  stream.respond({
    'content-type': 'text/html',
    ':status': 200
  });
  stream.end('<h1>Hello World</h1>');
});
server.listen(3000);