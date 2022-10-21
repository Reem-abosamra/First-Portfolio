// function openNav() {
//    document.getElementById("mySidenav").style.width = "250px";
//  }
 
//  function closeNav() {
//    document.getElementById("mySidenav").style.width = "0";
//  }
//  const sharp = require('sharp');
//  const fs = require('fs');
//  const directory = './images./dev_1.jpg';

// fs.readdirSync(directory).forEach(file => {
//   sharp(`${directory}/${file}`)
//     .resize(200, 100) // width, height
//     .toFile(`${directory}/${file}-small.jpg`);
//   });



//   $(document).ready(function () {
	
//     var registerForm = $('#RegisterForm');
//     // var registerButton = $('#Register');
//     var popup = $('#Dialog');
    
//     registerButton.on('click', function () {
//       registerForm.toggle();
//     })
    
    
//     function showPopup ( e ) {
//       registerForm.find('.btn').prop('disabled', true);
      
//       var firstnameVal = registerForm.find('#Firstname').val();
//       var lastnameVal = registerForm.find('#Lastname').val();
//       var ageVal = registerForm.find('#Age').val();
//       var emailVal = registerForm.find('#Email').val();
      
//       formData = $('#formData');
//       formData.append('<li>Vorname: ' + firstnameVal + '</li>');
//       formData.append('<li>Nachname: ' + lastnameVal + '</li>');
//       formData.append('<li>Alter: ' + ageVal + '</li>');
//       formData.append('<li>Email-Adresse: ' + emailVal + '</li>');
      
//       popup.fadeIn();
//       popup.find('.close-btn').focus();
//     }
    
//     registerForm.submit(function ( event ) {
//       event.preventDefault();
//       showPopup(event);
//     });
    
//     popup.find('.close-btn').on('click', function () {
//       registerForm.find('.btn').prop('disabled', false);
//       popup.fadeOut();
//       popup.find('#formData').html('');
//       registerForm.focus();
//     });
    
    
//   });
  
//   $('input[required]').on('change invalid', function ( e ) {
//     this.setCustomValidity('');
    
//     if ( !this.validity.valid ) {
//       if ( this.type !== 'date' && $(this).val() === '' && $(this).data('required-message') ) {
//         this.setCustomValidity($(this).data('required-message'));
//         $(this)
//           .closest('form')
//           .find('.form-validation-summary')
//           .append($(this).data('required-message') + '<br>');
//       }
      
//       if ( (this.type === 'radio' && this.checked === false && $(this).data('required-message')) ) {
//         this.setCustomValidity($(this).data('required-message'));
//         $(this)
//           .closest('form')
//           .find('.form-validation-summary')
//           .append($(this).data('required-message') + '<br>');
//       }
//     }
//   });
  
//   $('button[type=submit]').on('click', function() {
//     $(this).closest('form').find('.form-validation-summary').html('');
//   });