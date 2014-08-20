


var app = angular.module('spacemap',['firebase','ngModal','ui.bootstrap']);
//change this to reflect the proper firebase url
//app.constant('FIREBASE_URI','https://adastragames.firebaseio.com/MapDB/2/nodes/');
app.constant('FIREBASE_URI','https://adastragames.firebaseio.com/MapDB/');
app.controller('mapController',function($scope,FIREBASE_URI,mapService){
  this.height=1100;
  this.width=1100;
  $scope.links=[];
  this.spikes=function(points){
    switch (points){
    case 2:
      return "2.812,4.871 2.898,6.509 1.738,5.350 1.481,6.970 0.588,5.593 0.000,7.125 -0.588,5.593 -1.482,6.970 -1.738,5.350 -2.898,6.509 -2.813,4.871 -4.188,5.765 -3.764,4.181 -5.295,4.768 -4.551,3.306 -12.666,7.312 -5.139,2.288 -6.777,2.202 -5.502,1.169 -7.086,0.745 -5.625,-0.001 -7.086,-0.745 -5.502,-1.170 -6.777,-2.202 -5.139,-2.288 -6.171,-3.563 -4.551,-3.307 -5.295,-4.768 -3.764,-4.181 -4.188,-5.765 -2.813,-4.872 -2.898,-6.510 -1.738,-5.350 -1.482,-6.970 -0.588,-5.594 0.000,-7.125 0.588,-5.594 1.481,-6.970 1.738,-5.350 2.898,-6.510 2.812,-4.872 4.187,-5.765 3.764,-4.181 5.295,-4.768 4.551,-3.307 12.666,-7.312 5.139,-2.288 6.775,-2.202 5.502,-1.169 7.086,-0.745 5.625,0.000 7.086,0.745 5.502,1.169 6.775,2.202 5.139,2.288 6.170,3.563 4.551,3.306 5.295,4.768 3.764,4.181 4.187,5.765";
    case 3:
      return "3.112,-5.185 4.635,-6.173 4.166,-4.42 5.859,-5.07 5.036,-3.453 14.017,-7.891 5.687,-2.326 7.499,-2.231 6.089,-1.088 7.842,-0.618 6.224,0.206 7.842,1.03 6.089,1.499 7.5,2.643 5.686,2.738 6.828,4.149 5.036,3.866 5.859,5.483 4.165,4.833 4.635,6.586 3.111,5.589 3.207,7.41 1.924,6.128 1.639,7.919 0.65,6.397 -0.001,16.391 -0.651,6.397 -1.64,7.919 -1.924,6.119 -3.208,7.41 -3.113,5.597 -4.635,6.587 -4.166,4.833 -5.86,5.483 -5.037,3.866 -6.829,4.069 -5.688,2.738 -7.5,2.643 -6.089,1.501 -7.842,1.03 -6.225,0.207 -7.842,-0.618 -6.089,-1.091 -7.5,-2.231 -5.688,-2.326 -14.017,-7.886 -5.036,-3.453 -5.86,-5.07 -4.166,-4.419 -4.635,-6.181 -3.112,-5.184 -3.207,-6.997 -1.924,-5.714 -1.64,-7.506 -0.651,-5.985 -0.001,-7.679 0.65,-5.991 1.639,-7.506 1.924,-5.714 3.207,-6.997";
    case 4:
      return "-7.5005,0 -9.4485,-0.993 -7.3365,-1.559 -9.0355,-2.935 -6.8515,-3.051 -8.2275,-4.75 -6.0675,-4.408 -7.0605,-6.356 -5.0185,-5.573 -5.5845,-7.685 -3.7505,-6.495 -3.8645,-8.678 -2.3175,-7.133 -1.9755,-9.293 -0.7845,-7.459 -0.0005,-19.5 0.7845,-7.459 1.9755,-9.293 2.3175,-7.133 3.8645,-8.678 3.7495,-6.495 5.5835,-7.685 5.0185,-5.573 7.0595,-6.356 6.0675,-4.408 8.2275,-4.75 6.8515,-3.051 9.0355,-2.935 7.3355,-1.559 9.4485,-0.993 7.4995,0 19.4485,0.492 7.3355,1.56 9.0355,2.936 6.8515,3.051 8.2275,4.75 6.0675,4.408 7.0595,6.357 5.0185,5.574 5.5835,7.686 3.7495,6.495 3.8645,8.678 2.3175,7.133 1.9755,9.292 0.7845,7.459 -0.0005,19.5 -0.7845,7.459 -1.9755,9.292 -2.3175,7.133 -3.8645,8.678 -3.7505,6.495 -5.5845,7.686 -5.0185,5.574 -7.0605,6.357 -6.0675,4.408 -8.2275,4.75 -6.8515,3.051 -9.0355,2.936 -7.3365,1.56 -19.4485,0.992		";
    case 5:
      return "-2.2945,-8.9055 -1.9555,-11.0435 -0.7755,-9.2285 -0.0005,-11.2485 0.7765,-9.2285 1.9555,-11.0435 2.2955,-8.9055 3.8245,-10.4365 3.7125,-8.2745 11.3475,-17.4615 4.9685,-7.3615 6.9895,-8.1365 6.0065,-6.2075 8.1455,-6.5455 6.7835,-4.8645 8.9435,-4.7495 7.2625,-3.3875 9.3545,-2.8265 7.4245,-1.8445 9.3545,-0.8605 7.2625,-0.3005 18.3595,4.1225 6.7825,1.1765 8.1455,2.8595 6.0065,2.5205 6.9885,4.4495 4.9695,3.6745 5.5275,5.7645 3.7125,4.5865 3.8245,6.7485 2.2955,5.2185 1.9555,7.3555 0.7765,5.5405 -0.0005,17.4615 -0.7765,5.5405 -1.9555,7.3555 -2.2945,5.2185 -3.8255,6.7485 -3.7125,4.5875 -5.5285,5.7645 -4.9685,3.6745 -6.9895,4.4495 -6.0065,2.5205 -8.1445,2.8595 -6.7825,1.1765 -18.3595,4.1225 -7.2625,-0.3005 -9.3535,-0.8605 -7.4245,-1.8435 -9.3535,-2.8265 -7.2635,-3.3875 -8.9445,-4.7495 -6.7825,-4.8645 -8.1445,-6.5455 -6.0065,-6.2075 -6.9895,-8.1365 -4.9685,-7.3615 -11.347,-17.4615 -3.7125,-8.2745 -3.8255,-10.4365		";
    case 6:
      return "-7.875,0.001 -9.92,-1.042 -7.703,-1.636 -9.487,-3.081 -7.195,-3.203 -17.732,-10.237 -6.371,-4.628 -7.413,-6.674 -5.269,-5.852 -5.863,-8.07 -3.938,-6.82 -4.057,-9.112 -2.433,-7.489 -2.074,-9.757 -0.823,-7.831 0,-20.475 0.824,-7.831 2.074,-9.756 2.433,-7.489 4.057,-9.112 3.937,-6.82 5.864,-8.07 5.269,-5.852 7.412,-6.674 6.371,-4.628 17.732,-10.237 7.195,-3.203 9.487,-3.082 7.703,-1.637 9.92,-1.042 7.875,0.001 9.92,1.043 7.703,1.637 9.487,3.083 7.195,3.204 17.732,10.238 6.371,4.629 7.412,6.675 5.269,5.852 5.863,8.07 3.937,6.82 4.057,9.113 2.433,7.49 2.074,9.757 0.824,7.832 0,20.475 -0.823,7.833 -2.073,9.757 -2.433,7.49 -4.057,9.113 -3.937,6.82 -5.863,8.07 -5.269,5.852 -7.413,6.675 -6.371,4.629 -17.732,10.238 -7.194,3.204 -9.487,3.084 -7.703,1.637 -9.921,1.043 ";
    case 7:
      return " 0.485,21.115 -0.264,21.115 -1.077,8.637 -1.806,9.761 -2.338,10.579 -2.491,9.614 -2.763,7.9 -3.99,9.127 -4.681,9.817 -4.63,8.843 -4.539,7.11 -5.994,8.053 -6.813,8.586 -6.561,7.643 -6.191,6.262 -16.484,13.59 -16.956,13.01 -7.901,4.599 -9.127,4.793 -10.092,4.945 -9.477,4.186 -8.385,2.839 -10.119,2.747 -11.093,2.695 -10.335,2.081 -8.986,0.988 -10.662,0.539 -11.606,0.286 -10.736,-0.157 -9.191,-0.945 -10.736,-1.733 -11.606,-2.176 -10.662,-2.429 -9.52,-2.736 -21.228,-6.418 -21.05,-7.146 -8.555,-4.936 -9.477,-6.075 -10.092-6.834 -9.127,-6.682 -7.414,-6.411 -8.202,-7.957 -8.645,-8.826 -7.733,-8.479 -6.112,-7.857 -6.562,-9.533 -6.814,-10.476 -5.996,-9.945 -4.91,-9.24 -9.507,-20.793 -8.83,-21.115 -2.709,-10.136 -2.492,-11.503 -2.34,-12.468 -1.807,-11.65 -0.861,-10.195 -0.239,-11.815 0.11,-12.726 0.46,-11.815 1.083,-10.196 2.027,-11.65 2.559,-12.468 2.712,-11.503 2.929,-10.135 9.052,-21.115 9.728,-20.793 5.133,-9.241 6.216,-9.945 7.036,-10.476 6.783,-9.533 6.334,-7.857 7.953,-8.479 8.865,-8.826 8.423,-7.957 7.636,-6.412 9.35,-6.683 10.314,-6.835 9.699,-6.077 8.865,-5.047 20.991,-8.241 21.228,-7.53 9.575,-2.78 10.884,-2.429 11.827,-2.176 10.958,-1.733 9.412,-0.945 10.958,-0.157 11.827,0.286 10.885,0.539 9.209,0.989 10.557,2.082 11.315,2.696 10.34,2.748 8.607,2.839 9.699,4.188 10.313,4.946 9.349,4.794 7.966,4.575 16.495,13.915 15.978,14.454 6.453,6.411 6.783,7.643 7.036,8.586 6.218,8.053 4.761,7.109 4.853,8.843 4.903,9.817 4.212,9.127 2.985,7.9 2.714,9.614 2.562,10.578 2.028,9.761 1.298,8.636			";
    case 8:
      return "-15.9955,18.414 -16.6695,17.765 -10.6275,10.628 -17.7645,16.67 -18.4135,15.997 -9.0385,5.7 -10.5315,5.857 -11.7445,5.985 -10.9285,5.077 -9.7155,3.729 -11.5185,3.54 -12.7325,3.413 -11.7455,2.694 -10.2785,1.628 -12.0035,1.067 -13.1635,0.69 -12.0495,0.193 -10.3925,-0.545 -11.9635,-1.453 -13.0215,-2.063 -11.8265,-2.317 -10.0525,-2.694 -11.4005,-3.908 -12.3075,-4.724 -11.0865,-4.724 -9.4405,-4.725 -19.5795,-15.426 -18.9415,-16.111 -10.7995,-9.403 -17.5965,-17.599 -16.9155,-18.241 -6.6675,-8.648 -6.9255,-9.863 -7.1795,-11.057 -6.1915,-10.339 -4.7245,-9.274 -4.7245,-11.086 -4.7245,-12.308 -3.9075,-11.401 -2.6925,-10.053 -2.3155,-11.827 -2.0615,-13.02 -1.4515,-11.963 -0.5445,-10.393 0.1935,-12.049 0.6895,-13.164 1.0665,-12.003 1.6285,-10.28 2.6945,-11.746 3.4125,-12.733 3.5405,-11.519 3.7295,-9.716 5.0775,-10.93 5.9855,-11.746 5.8585,-10.533 5.7005,-9.039 15.9955,-18.414 16.6695,-17.766 10.6265,-10.627 17.7665,-16.67 18.4155,-15.997 9.0385,-5.701 10.5325,-5.858 11.7455,-5.986 10.9295,-5.078 9.7165,-3.73 11.5195,-3.54 12.7335,-3.413 11.7475,-2.695 10.2785,-1.628 12.0035,-1.067 13.1645,-0.689 12.0495,-0.193 10.3935,0.544 11.9635,1.45 13.0205,2.061 11.8265,2.315 10.0525,2.692 11.4005,3.907 12.3085,4.723 11.0865,4.723 9.4405,4.725 19.5795,15.426 18.9405,16.11 11.5385,10.01 18.0285,17.368 17.3675,18.028 6.6535,8.573 6.9255,9.861 7.1805,11.055 6.1915,10.337 4.7245,9.271 4.7235,11.086 4.7235,12.307 3.9065,11.399 2.6925,10.052 2.3155,11.825 2.0615,13.02 1.4515,11.962 0.5445,10.392 -0.1935,12.049 -0.6895,13.164 -1.0665,12.004 -1.6275,10.28 -2.6935,11.747 -3.4125,12.735 -3.5395,11.52 -3.7295,9.715 -5.0775,10.93 -5.9855,11.746 -5.8575,10.532 -5.7005,9.039 ";
    default:
      throw "error";
    }
  };
  //$scope.displayModal=false;

  //$scope.nodes=mapService.getData();
  $scope.dbList = mapService.getData();
  console.log($scope.dbList);
  $scope.linkTypes=[
    {type:"linkUnk",text:"Unknown Link",show:true},
    {type:"link1",  text:"Link Value 1",show:true},
    {type:"link2",  text:"Link Value 2",show:true},
    {type:"link3",  text:"Link Value 3",show:true},
    {type:"link4",  text:"Link Value 4",show:true},
    {type:"link5",  text:"Link Value 5",show:true},
    {type:"link6",  text:"Link Value 6",show:true},
    {type:"link7",  text:"Link Value 7",show:true}
  ];
  $scope.displayMap = function(){
    if($scope.jsonInput){
      $scope.nodes = JSON.parse($scope.jsonInput);
      $scope.delete3DMap();
      galMap.createJumplist();
      galMap.init();
      galMap.animate();
    }
  };
  $scope.displayDBEntry=function(map){
    //$scope.delete3DMap();
    $scope.nodes=map.nodes;
    $scope.delete3DMap();
    galMap.jumpList=[];
    galMap.createJumplist();
    galMap.init();
    galMap.animate();

  };
  $scope.delete3DMap =function(){
    document.getElementById( '3Dmap').childNodes[0].remove();
  };
  $scope.displayUploadDialog = function(){
    $scope.displayModal = !$scope.displayModal;
  };
  $scope.uploadMap = function(){
    $scope.dbList.$add({name:$scope.mapName,nodes:JSON.parse($scope.jsonInput)});
    $scope.mapname="";
  };
  $scope.toggleLink = function(linkType){
    var ele = document.querySelectorAll('line.'+linkType);
    if(ele.length>0){
      for (var i in ele){
        if(ele[i].classList) ele[i].classList.toggle('ng-hide');
      }
    }
  };
  $scope.totalLink = function(linkType){
    return document.querySelectorAll('line.'+linkType).length;
  };
  $scope.sumOfAllLinks = function(){
    return document.getElementsByTagName('line').length;
  };
//threejs stuff here
  var galMap = galMap || {};
    galMap.systems = [];
    galMap.links = [];
    galMap.tmpVec1 = new THREE.Vector3();
    galMap.tmpVec2 = new THREE.Vector3();
    galMap.tmpVec3 = new THREE.Vector3();
    galMap.tmpVec4 = new THREE.Vector3();
    galMap.Scale = 3;
    galMap.jumpList=[];
    galMap.createJumplist = function(){
      galMap.jumpList=[];
      for (var i in $scope.nodes){
        //console.log($scope.nodes[i].id)
        for (var j in $scope.nodes[i].links){
          //console.log($scope.nodes[i].links[j].destination)
         if ($scope.nodes[i].id < $scope.nodes[i].links[j].destination){
          galMap.jumpList.push([$scope.nodes[i].id,$scope.nodes[i].links[j].destination]);
          }
        }
      }
    };

galMap.init = function() {
  galMap.camera = new THREE.PerspectiveCamera( 60, 1100 / 1100, 1, 75000 );
  galMap.camera.position.z = -5000;
  galMap.scene = new THREE.Scene();
  for (var i in $scope.nodes){
    var starText = "starText";
    var system = $scope.nodes[i];
    //var starType = system.type[0][0].toUpperCase();
    var systemDiv = document.createElement('div');
    systemDiv.className = "starDiv";
    var starPic = document.createElement('img');
    starPic.src = 'img/M-star.png';
    systemDiv.appendChild(starPic);
    var name = document.createElement('div');
    name.className = starText;
    name.textContent = system.name;
    systemDiv.appendChild(name);
    var star = new THREE.CSS3DObject(systemDiv);
    star.position.x = -system.x*galMap.Scale;
    star.position.y = -system.y*galMap.Scale;
    star.position.z = -system.z*galMap.Scale||0;
    if(system.name) {
      galMap.scene.add(star);
      galMap.systems.push(star);
    }
  }

  for (var j in galMap.jumpList){
    var startSys=$scope.nodes[galMap.jumpList[j][0]];
    var endSys=  $scope.nodes[galMap.jumpList[j][1]];
    var startPos=galMap.systems[galMap.jumpList[j][0]].position;
    var endPos=  galMap.systems[galMap.jumpList[j][1]].position;
    galMap.tmpVec1.subVectors( endPos, startPos );
    var linkLength = galMap.tmpVec1.length() -25;
    var hyperLink=document.createElement('div');
    hyperLink.className="jumpLink";
    hyperLink.style.height=  linkLength + "px";
    var object = new THREE.CSS3DObject( hyperLink );
    object.position.copy( startPos );
    object.position.lerp( endPos, 0.5 );
    var axis = galMap.tmpVec2.set( 0, 1, 0 ).cross( galMap.tmpVec1 );
    var radians = Math.acos( galMap.tmpVec3.set( 0, 1, 0 ).dot( galMap.tmpVec4.copy( galMap.tmpVec1 ).normalize() ) );
    var objMatrix = new THREE.Matrix4().makeRotationAxis( axis.normalize(), radians );
    object.matrix = objMatrix;
    object.rotation.setEulerFromRotationMatrix( object.matrix, object.eulerOrder );
    object.matrixAutoUpdate = false;
    object.updateMatrix();

    galMap.scene.add( object );
    galMap.links.push( object );
  }
  galMap.renderer = new THREE.CSS3DRenderer();
  galMap.renderer.setSize( 1100,1100 );
  document.getElementById( '3Dmap' ).appendChild( galMap.renderer.domElement );
  galMap.controls = new THREE.TrackballControls( galMap.camera, galMap.renderer.domElement );
  galMap.controls.rotateSpeed = 0.05;
  galMap.controls.dynamicDampingFactor = 0.3;
  galMap.controls.maxDistance=7500;
  galMap.controls.addEventListener( 'change', galMap.render );
  window.addEventListener( 'resize', galMap.onWindowResize, false );
};
galMap.onWindowResize = function() {
  galMap.camera.aspect = window.innerWidth / window.innerHeight;
  galMap.camera.updateProjectionMatrix();
  galMap.renderer.setSize( window.innerWidth, window.innerHeight );
  galMap.render();
};
galMap.animate = function() {
  requestAnimationFrame( galMap.animate );
  galMap.controls.update();
  galMap.render();
};
galMap.render = function() {
  for (var i in galMap.systems) {
    galMap.systems[i].lookAt(galMap.camera.position.clone());
    galMap.systems[i].up = galMap.camera.up.clone();
  }
  galMap.renderer.render( galMap.scene, galMap.camera );
};
 });
// app.controller('loginController',function($scope, $firebaseSimpleLogin, FIREBASE_URI){
//     $scope.loginService = $firebaseSimpleLogin(new Firebase(FIREBASE_URI));
//     $scope.newUser = { email: '', password: '' };
//     $scope.currentUser  = null;
//
//     $scope.getCurrentUser = function () {
//         $scope.loginService.$getCurrentUser()
//             .then(function(user){
//                 $scope.currentUser = user;
//             });
//     };
//
//     $scope.logout = function () {
//         $scope.loginService.$logout();
//         $scope.currentUser = null;
//     };
//
//     $scope.getCurrentUser();
//
//     $scope.login = function (email, password) {
//         $scope.loginService.$login('password', {email:email, password:password})
//             .then(function(user){
//                $scope.currentUser = user;
//                 $scope.resetForm();
//             });
//     };
//
//     // $scope.register = function (email, password) {
//     //     $scope.loginService.$createUser(email, password)
//     //         .then(function(user){
//     //             $scope.currentUser = user;
//     //             $scope.resetForm();
//     //         });
//     // };
//
//     $scope.resetForm = function () {
//         $scope.newUser = { email: '', password: '' };
//     };
// });
app.factory('mapService', ['$firebase', 'FIREBASE_URI', function ($firebase, FIREBASE_URI) {
    var ref = new Firebase(FIREBASE_URI);
    var data = $firebase(ref);
    var getData = function () {
        return data;
    };
    return {
        getData: getData
    };
}]);

app.directive('starSystem', function() {
  return {
    type: 'svg',
    restrict: 'E',
    replace:true,
    templateUrl: 'system.html'
  };
});

app.directive('starLink',function(){
  return{
    type: 'svg',
    restrict: 'E',
    replace:true,
    template: '<line class="link{{link.value}}" ng-hide="{{link.show}}" stroke-width=2.5 ng-attr-x1="{{node.x +600}}" ng-attr-y1="{{node.y +600}}" ng-attr-x2="{{nodes[link.destination].x +600}}" ng-attr-y2="{{nodes[link.destination].y +600}}"> </line>'
  };
});
