// Import Soundworks library modules (client side)
'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _soundworksClient = require('soundworks/client');

// Import Soundfield modules (client side)

var _PlayerPerformanceJs = require('./PlayerPerformance.js');

var _PlayerPerformanceJs2 = _interopRequireDefault(_PlayerPerformanceJs);

// import soundworks from 'soundworks/client';

// Files to load
var audioFiles = ['sounds/sound-welcome.mp3', 'sounds/sound-others.mp3'];

var app = function app() {
  // Initialize the client
  _soundworksClient.client.init('player');

  // Instantiate the modules
  var welcome = new _soundworksClient.Welcome();
  var checkin = new _soundworksClient.ClientCheckin({ showDialog: false });
  var loader = new _soundworksClient.Loader({ files: audioFiles });
  var performance = new _PlayerPerformanceJs2['default'](loader);

  // const placer = new soundworks.ClientPlacer({ mode: 'list' });
  // const locator = new soundworks.ClientLocator();
  // const orientation = new soundworks.Orientation();

  // Start the scenario and order the modules
  _soundworksClient.client.start(function (serial, parallel) {
    return serial(
    // Initialization step: we launch in parallel the welcome module,
    // the loading of the files, and the checkin
    parallel(welcome, loader, checkin),
    // When the initialization step is done, we launch the performance
    performance);
  });
};

// Where the magic happens
window.addEventListener('load', app);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jbGllbnQvcGxheWVyL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O2dDQUN1RCxtQkFBbUI7Ozs7bUNBRTVDLHdCQUF3Qjs7Ozs7OztBQUt0RCxJQUFNLFVBQVUsR0FBRyxDQUFDLDBCQUEwQixFQUFFLHlCQUF5QixDQUFDLENBQUM7O0FBRTNFLElBQU0sR0FBRyxHQUFHLFNBQU4sR0FBRyxHQUFTOztBQUVoQiwyQkFBTyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7OztBQUd0QixNQUFNLE9BQU8sR0FBRywrQkFBYSxDQUFDO0FBQzlCLE1BQU0sT0FBTyxHQUFHLG9DQUFrQixFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0FBQ3pELE1BQU0sTUFBTSxHQUFHLDZCQUFXLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxDQUFDLENBQUM7QUFDakQsTUFBTSxXQUFXLEdBQUcscUNBQXNCLE1BQU0sQ0FBQyxDQUFDOzs7Ozs7O0FBT2xELDJCQUFPLEtBQUssQ0FBQyxVQUFDLE1BQU0sRUFBRSxRQUFRO1dBQzVCLE1BQU07OztBQUdKLFlBQVEsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQzs7QUFFbEMsZUFBVyxDQUNaO0dBQUEsQ0FDRixDQUFDO0NBQ0gsQ0FBQTs7O0FBR0QsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyIsImZpbGUiOiJzcmMvY2xpZW50L3BsYXllci9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydCBTb3VuZHdvcmtzIGxpYnJhcnkgbW9kdWxlcyAoY2xpZW50IHNpZGUpXG5pbXBvcnQgeyBjbGllbnQsIENsaWVudENoZWNraW4sIFdlbGNvbWUsIExvYWRlciB9IGZyb20gJ3NvdW5kd29ya3MvY2xpZW50Jztcbi8vIEltcG9ydCBTb3VuZGZpZWxkIG1vZHVsZXMgKGNsaWVudCBzaWRlKVxuaW1wb3J0IFBsYXllclBlcmZvcm1hbmNlIGZyb20gJy4vUGxheWVyUGVyZm9ybWFuY2UuanMnO1xuXG4vLyBpbXBvcnQgc291bmR3b3JrcyBmcm9tICdzb3VuZHdvcmtzL2NsaWVudCc7XG5cbi8vIEZpbGVzIHRvIGxvYWRcbmNvbnN0IGF1ZGlvRmlsZXMgPSBbJ3NvdW5kcy9zb3VuZC13ZWxjb21lLm1wMycsICdzb3VuZHMvc291bmQtb3RoZXJzLm1wMyddO1xuXG5jb25zdCBhcHAgPSAoKSA9PiB7XG4gIC8vIEluaXRpYWxpemUgdGhlIGNsaWVudFxuICBjbGllbnQuaW5pdCgncGxheWVyJyk7XG5cbiAgLy8gSW5zdGFudGlhdGUgdGhlIG1vZHVsZXNcbiAgY29uc3Qgd2VsY29tZSA9IG5ldyBXZWxjb21lKCk7XG4gIGNvbnN0IGNoZWNraW4gPSBuZXcgQ2xpZW50Q2hlY2tpbih7IHNob3dEaWFsb2c6IGZhbHNlIH0pO1xuICBjb25zdCBsb2FkZXIgPSBuZXcgTG9hZGVyKHsgZmlsZXM6IGF1ZGlvRmlsZXMgfSk7XG4gIGNvbnN0IHBlcmZvcm1hbmNlID0gbmV3IFBsYXllclBlcmZvcm1hbmNlKGxvYWRlcik7XG5cbiAgLy8gY29uc3QgcGxhY2VyID0gbmV3IHNvdW5kd29ya3MuQ2xpZW50UGxhY2VyKHsgbW9kZTogJ2xpc3QnIH0pO1xuICAvLyBjb25zdCBsb2NhdG9yID0gbmV3IHNvdW5kd29ya3MuQ2xpZW50TG9jYXRvcigpO1xuICAvLyBjb25zdCBvcmllbnRhdGlvbiA9IG5ldyBzb3VuZHdvcmtzLk9yaWVudGF0aW9uKCk7XG5cbiAgLy8gU3RhcnQgdGhlIHNjZW5hcmlvIGFuZCBvcmRlciB0aGUgbW9kdWxlc1xuICBjbGllbnQuc3RhcnQoKHNlcmlhbCwgcGFyYWxsZWwpID0+XG4gICAgc2VyaWFsKFxuICAgICAgLy8gSW5pdGlhbGl6YXRpb24gc3RlcDogd2UgbGF1bmNoIGluIHBhcmFsbGVsIHRoZSB3ZWxjb21lIG1vZHVsZSxcbiAgICAgIC8vIHRoZSBsb2FkaW5nIG9mIHRoZSBmaWxlcywgYW5kIHRoZSBjaGVja2luXG4gICAgICBwYXJhbGxlbCh3ZWxjb21lLCBsb2FkZXIsIGNoZWNraW4pLFxuICAgICAgLy8gV2hlbiB0aGUgaW5pdGlhbGl6YXRpb24gc3RlcCBpcyBkb25lLCB3ZSBsYXVuY2ggdGhlIHBlcmZvcm1hbmNlXG4gICAgICBwZXJmb3JtYW5jZVxuICAgIClcbiAgKTtcbn1cblxuLy8gV2hlcmUgdGhlIG1hZ2ljIGhhcHBlbnNcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgYXBwKTtcbiJdfQ==