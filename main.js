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
            return this.totalDesc = (this.totalEnvio*this.com)+this.totalEnvio;
            
        },

        actualizaSaldo: function(){
            this.saldo -= this.calculo(); 
            this.totalEnvio = 0;
            return this.saldo;
        },

        alerta: function(){
            alert("Se han enviado " + this.totalEnvio + " BTC a " + this.address)
        },

        envio: function(){
            this.alerta();
            this.actualizaSaldo();
           
        }
     /*checkForm: function (e) {
        if (this.address && this.totalEnvio>0) {
          return true;
        }
  
        this.errors = [];
  
        if (!this.address) {
          this.errors.push('Por favor ingresar el BTC address de destino .');
        }
        if (this.totalEnvio<=0) {
          this.errors.push('Por favor ingresar en monto BTC a enviar.');
        }
        if (this.totalDesc > this.saldo) {
            this.errors.push('El total a descontar debe ser menor o igual a.'+ saldo);
          }
        e.preventDefault();
      }
    */
    
    
    }

  })


