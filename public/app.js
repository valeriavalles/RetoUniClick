$( document ).ready(function() {
   $('#text-hide').hide();
  $('#btn').on('click', function(){
    $('#text-hide').toggle();
    
    console.log('hola boton')

  });
  

  $('#btn-show').on('click', function(event){
    event.preventDefault();
    const valor = document.getElementById('valor1').value;
    const valor2 = document.getElementById('value2').value;
    console.log(valor);
    console.log(valor2);
    
    
    console.log('hola boton')
    var responseContent = $('#response-content');
    var proxy = 'https://cors-anywhere.herokuapp.com/';
    var apiLinkDS = `http://lectorweb.uniclickdigital.com/api/ahorro/${valor}/${valor2}`;  
      $.ajax({
        url: proxy + apiLinkDS,
        success: function(data) { 
           var tasas = data
          console.log(tasas);
        }
      }).done(addNews);
      
      function addNews(data) {
         
         const mostrat = data.data;
         const newInteres = data.tasa; 
         console.log(mostrat);
         console.log(newInteres);
        const lista = Object.keys(mostrat) 
        console.log(lista.length);       
         
        
        
        const table = mostrat.map((list) => `<tr>
                                                 <td >${ lista.length }</td>,
                                                 <td >${list.capital}</td>,
                                                 <td >${list.interes}</td>,
                                              </tr>`)
         $('.interes-anual').append(newInteres);
         $('.content-table tbody').append(table).closest('.content-table');
         
        // $('.content-list').append(template);
        
      
      };    
  })

});