define(function(require) {

  require('../src/alert');
  var expect = require('expect');
  var $ = require('$');

  describe('alert', function() {
      $('<div id="mocha-fixture" style="position: absolute;left: -9999px;top: -9999px;display: none;"></div> ').appendTo('#mocha');
      it('should provide no conflict', function () {
          var alert = $.fn.alert.noConflict()
          expect($.fn.alert).to.not.be.ok();// 'alert was set back to undefined (org value)'
          $.fn.alert = alert
      })

      it('should be defined on jquery object', function () {
          expect($(document.body).alert).to.be.a('function');// 'alert method is defined'
      })

      it('should return element', function () {
          expect($(document.body).alert()[0]).to.equal(document.body);// 'document.body returned'
      })

      it('should fade element out on clicking .close', function () {
          var alertHTML = '<div class="alert-message warning fade in">' +
                  '<a class="close" href="#" data-dismiss="alert">×</a>' +
                  '<p><strong>Holy guacamole!</strong> Best check yo self, you\'re not loexpecting too good.</p>' +
                  '</div>',
              alert = $(alertHTML).alert()

          alert.find('.close').click()

          expect(alert.hasClass('in')).to.not.be.ok();// 'remove .in class on .close click'
      })

      it('should remove element when clicking .close', function () {
          $.support.transition = false

          var alertHTML = '<div class="alert-message warning fade in">' +
                  '<a class="close" href="#" data-dismiss="alert">×</a>' +
                  '<p><strong>Holy guacamole!</strong> Best check yo self, you\'re not loexpecting too good.</p>' +
                  '</div>',
              alert = $(alertHTML).appendTo('#mocha-fixture').alert()

          expect($('#mocha-fixture').find('.alert-message').length).to.be.ok();// 'element added to dom'

          alert.find('.close').click()

          expect($('#mocha-fixture').find('.alert-message').length).to.not.be.ok();// 'element removed from dom'
      })

      it('should not fire closed when close is prevented', function () {
          $.support.transition = false
          $('<div class="alert"/>')
              .on('close.su.alert', function (e) {
                  e.preventDefault();
                  expect(true).to.be.ok();
              })
              .on('closed.su.alert', function () {
                  expect(false).to.be.ok();
              })
              .alert('close')
      })
  });

});
