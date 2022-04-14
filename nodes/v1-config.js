/**
 * Copyright 2018 IBM Corp.
 *
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 **/
 module.exports = function(RED) {

   function Node(config) {
     RED.nodes.createNode(this, config);

     this.url = `https://${config.host}:${config.port}/ibmmq/rest/${config.version}/messaging/qmgr/${config.qmgr}/queue/${config.qname}/message`;
     this.token = config.token;
     //this.contentType = config.contentType;

     var credentials = this.credentials;

     if ((credentials) && (credentials.hasOwnProperty("username"))) {
       this.username = credentials.username;
     }
     if ((credentials) && (credentials.hasOwnProperty("password"))) {
       this.password = credentials.password;
     }
   }

   RED.nodes.registerType('mqrest-config', Node, {
     credentials: {
       password: {type:"password"},
       username: {type:"text"}
     }
   });
 };
