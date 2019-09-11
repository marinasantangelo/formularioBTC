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
            console.log('calculo');
           
            return this.totalDesc;
            
        },

        actualizaSaldo: function(){
          console.log('as');
            this.saldo -= this.calculo(); 
            this.totalEnvio = 0;
            console.log('saldo');
            return this.saldo;
        },

        alerta: function(){
            alert("Se han enviado " + this.totalEnvio + " BTC a " + this.address)
            console.log('alerta');
        },

     checkForm: function (e) {
       console.log(this.saldo);
      e.preventDefault();
       console.log(this.address)
       this.errors = [];
        if (this.address && this.totalEnvio>0 && this.totalDesc < this.saldo) {
          this.alerta();
          this.actualizaSaldo();

         
        } else{
  
         
  
        if (!this.address) {
          this.errors.push('Por favor ingresar el BTC address de destino .');
        }
        if (this.totalEnvio<=0) {
          this.errors.push('Por favor ingresar en monto BTC a enviar.');
        }
        if (this.totalDesc > this.saldo) {
          console.log(this.saldo)
            this.errors.push('El total a descontar debe ser menor o igual a.'+ this.saldo);
          }
        

      }
      
      }
    
    
    
    }

  })


