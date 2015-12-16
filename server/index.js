// Import Soundworks library modules (server side)
'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _soundworksServer = require('soundworks/server');

var _soundworksServer2 = _interopRequireDefault(_soundworksServer);

// Import matrix module

var _soundworksUtilsSetup = require('soundworks/utils/setup');

// Import server side performance module

var _PlayerPerformance = require('./PlayerPerformance');

var _PlayerPerformance2 = _interopRequireDefault(_PlayerPerformance);

var server = _soundworksServer2['default'].server;
var ServerCheckin = _soundworksServer2['default'].ServerCheckin;
var setup = (0, _soundworksUtilsSetup.generateMatrix)({ rows: 8, cols: 8 });

// Launch server
server.start();

// Instantiate the modules
var checkin = new ServerCheckin({ capacity: 100 });
var performance = new _PlayerPerformance2['default']();

// Map modules to client types:
// - the `'player'` clients (who take part in the scenario by connecting to the
//   server through the root URL) need to communicate with the `checkin` and the
//   `performance` on the server side;
// - we could also map other modules to additional client types (who would take
//   part in the scenario by connecting to the server through the '/clientType'
//   URL).
server.map('player', checkin, performance);
// server.map('soloist', soloistPerformance);
// server.map('conductor', control, conductorPerformance);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zZXJ2ZXIvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Z0NBQ3VCLG1CQUFtQjs7Ozs7O29DQUVYLHdCQUF3Qjs7OztpQ0FFekIscUJBQXFCOzs7O0FBRW5ELElBQU0sTUFBTSxHQUFHLDhCQUFXLE1BQU0sQ0FBQztBQUNqQyxJQUFNLGFBQWEsR0FBRyw4QkFBVyxhQUFhLENBQUM7QUFDL0MsSUFBTSxLQUFLLEdBQUcsMENBQWUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDOzs7QUFHbkQsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDOzs7QUFHZixJQUFNLE9BQU8sR0FBRyxJQUFJLGFBQWEsQ0FBQyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0FBQ3JELElBQU0sV0FBVyxHQUFHLG9DQUF1QixDQUFDOzs7Ozs7Ozs7QUFTNUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsT0FBTyxFQUFFLFdBQVcsQ0FBQyxDQUFDIiwiZmlsZSI6InNyYy9zZXJ2ZXIvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnQgU291bmR3b3JrcyBsaWJyYXJ5IG1vZHVsZXMgKHNlcnZlciBzaWRlKVxuaW1wb3J0IHNvdW5kd29ya3MgZnJvbSAnc291bmR3b3Jrcy9zZXJ2ZXInO1xuLy8gSW1wb3J0IG1hdHJpeCBtb2R1bGVcbmltcG9ydCB7IGdlbmVyYXRlTWF0cml4IH0gZnJvbSAnc291bmR3b3Jrcy91dGlscy9zZXR1cCc7XG4vLyBJbXBvcnQgc2VydmVyIHNpZGUgcGVyZm9ybWFuY2UgbW9kdWxlXG5pbXBvcnQgUGxheWVyUGVyZm9ybWFuY2UgZnJvbSAnLi9QbGF5ZXJQZXJmb3JtYW5jZSc7XG5cbmNvbnN0IHNlcnZlciA9IHNvdW5kd29ya3Muc2VydmVyO1xuY29uc3QgU2VydmVyQ2hlY2tpbiA9IHNvdW5kd29ya3MuU2VydmVyQ2hlY2tpbjtcbmNvbnN0IHNldHVwID0gZ2VuZXJhdGVNYXRyaXgoeyByb3dzOiA4LCBjb2xzOiA4IH0pO1xuXG4vLyBMYXVuY2ggc2VydmVyXG5zZXJ2ZXIuc3RhcnQoKTtcblxuLy8gSW5zdGFudGlhdGUgdGhlIG1vZHVsZXNcbmNvbnN0IGNoZWNraW4gPSBuZXcgU2VydmVyQ2hlY2tpbih7IGNhcGFjaXR5OiAxMDAgfSk7XG5jb25zdCBwZXJmb3JtYW5jZSA9IG5ldyBQbGF5ZXJQZXJmb3JtYW5jZSgpO1xuXG4vLyBNYXAgbW9kdWxlcyB0byBjbGllbnQgdHlwZXM6XG4vLyAtIHRoZSBgJ3BsYXllcidgIGNsaWVudHMgKHdobyB0YWtlIHBhcnQgaW4gdGhlIHNjZW5hcmlvIGJ5IGNvbm5lY3RpbmcgdG8gdGhlXG4vLyAgIHNlcnZlciB0aHJvdWdoIHRoZSByb290IFVSTCkgbmVlZCB0byBjb21tdW5pY2F0ZSB3aXRoIHRoZSBgY2hlY2tpbmAgYW5kIHRoZVxuLy8gICBgcGVyZm9ybWFuY2VgIG9uIHRoZSBzZXJ2ZXIgc2lkZTtcbi8vIC0gd2UgY291bGQgYWxzbyBtYXAgb3RoZXIgbW9kdWxlcyB0byBhZGRpdGlvbmFsIGNsaWVudCB0eXBlcyAod2hvIHdvdWxkIHRha2Vcbi8vICAgcGFydCBpbiB0aGUgc2NlbmFyaW8gYnkgY29ubmVjdGluZyB0byB0aGUgc2VydmVyIHRocm91Z2ggdGhlICcvY2xpZW50VHlwZSdcbi8vICAgVVJMKS5cbnNlcnZlci5tYXAoJ3BsYXllcicsIGNoZWNraW4sIHBlcmZvcm1hbmNlKTtcbi8vIHNlcnZlci5tYXAoJ3NvbG9pc3QnLCBzb2xvaXN0UGVyZm9ybWFuY2UpO1xuLy8gc2VydmVyLm1hcCgnY29uZHVjdG9yJywgY29udHJvbCwgY29uZHVjdG9yUGVyZm9ybWFuY2UpO1xuIl19