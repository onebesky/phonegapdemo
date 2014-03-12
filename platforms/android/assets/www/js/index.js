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
var app = {
    
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
        app.updateDeviceName();
        //document.addEventListener("batterystatus", app.onBatteryStatus, false);
        //navigator.accelerometer.getCurrentAcceleration(onPhoneMove, function(){console.log("acceleration error")});
        app.logoElement = document.getElementById("logo");
        app.watchId = navigator.accelerometer.watchAcceleration(app.onPhoneMove, function(){alert("accelerometer failed")}, {
            frequency: 250
        });
        
    },
    updateDeviceName: function(){
        var deviceElement = document.getElementById("device-name");
        console.log(device.model, device.cordova, device.platform, device.uuid, device.version, device.name);
        console.log(device.name);
        console.log(device.uuid);
        console.log(device.version);
        deviceElement.innerHTML = device.uuid + " - " + device.model + " " + device.version;
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },
    onPhoneMove: function(acceleration){
        var deviceElement = app.logoElement;
        var xElement = document.getElementById("x-axis");
        xElement.innerHTML=acceleration.x;
        var yElement = document.getElementById("y-axis");
        yElement.innerHTML=acceleration.y;
        deviceElement.style.left = acceleration.x * 3 + "%";
        deviceElement.style.top = acceleration.y * 3 + "%";
    }
    /*onBatteryStatus: function(info) {
        // Handle the online event
        console.log("Level: " + info.level + " isPlugged: " + info.isPlugged);
        this.displayBatteryInfo(info.level);
    },
    displayBatteryInfo: function(value){
        var statusElement = document.querySelector('#battery-status');
        statusElement.innerHTML = value;
    }*/
};
