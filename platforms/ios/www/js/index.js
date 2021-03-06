/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
// ---------------------------------------------------------
// set target for phonegap app
var site = 'http://apps.esrgc.org/uniteSalisbury';
// ---------------------------------------------------------
// set target for in app browser
var target = "_blank";
// set options for in app browser
var options = {
  "location": "no",
  //"toolbar": "no"
};

var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },
    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        window.open = cordova.InAppBrowser.open;
        this.receivedEvent('deviceready');
        var ref = window.open(site, target, 'location=no');
        ref.addEventListener('loadstart', function() { console.log('start: ' + event.url); });
        ref.addEventListener('loadstop', function() { console.log('stop: ' + event.url); });
        ref.addEventListener('exit', function() { console.log(event.type); });
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();
