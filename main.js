const app = new Vue({
    el: '#app',
    data: {
        errors:[],
        address: null,
        saldo: 100,
        com: 0.00012,
        totalEnvio: 0,
        totalDesc: 0
    },
    methods:{
        calculo: function(){
            this.totalDesc = (this.totalEnvio*this.com)+this.totalEnvio;
                       
            return this.totalDesc;
            
        },

        actualizaSaldo: function(){
          
            this.saldo -= this.calculo(); 
            this.totalEnvio = 0;
         
            return this.saldo;
        },

        alerta: function(){
            alert("Se han enviado " + this.totalEnvio + " BTC a " + this.address)
            
        },

     checkForm: function (e) {
      
      e.preventDefault();
       
       this.errors = [];
        if (this.address && this.totalEnvio>0 && this.totalDesc < this.saldo) {
          this.alerta();
          this.actualizaSaldo();

         
        } else{
  
         
  
        if (!this.address) {
          this.errors.push('Por favor ingresar el BTC address de destino.');
        }
        if (this.totalEnvio<=0) {
          this.errors.push('Por favor ingresar en monto BTC a enviar.');
        }
        if (this.totalDesc > this.saldo) {
          this.errors.push('El total a descontar debe ser menor o igual a '+ this.saldo);
          }
        

      }
      
      }
    
    
    
    }

  })


