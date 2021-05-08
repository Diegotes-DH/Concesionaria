let autos = require ('./app.js');

let unAuto = {
   marca: 'Toyota', 
   modelo: 'Corolla',
   precio: 100000,
   km: 0,
   color: 'Blanco',
   cuotas: 14,
   anio: 2019,
   patente: 'JJK116',
   vendido: false
}
let unaPersona = {
   nombre: "Juan",
   capacidadDePagoEnCuotas: 20000,
   capacidadDePagoTotal: 100000
   }

let concesionaria = {
   autos: autos,

   buscarAuto: function(laPatente){
      if(resultado = this.autos.find( elemento => elemento.patente === laPatente)){
      return resultado}
      else {return null}
   },

   venderAuto: function(laPatente){
      let respuesta = this.buscarAuto(laPatente);
      respuesta.vendido = true;
      return respuesta;

   },

   autosParaLaVenta: function(){
     this.autos = this.autos.filter(element => element.vendido == false)
        return this.autos
     } ,

   autosNuevos: function(){
      let nuevos = this.autosParaLaVenta();
      return nuevos.filter(auto => auto.km < 100)
      },
   
   listaDeVentas: function(){
      let vendidos = this.autos.filter(element => element.vendido == true);
      let precios = vendidos.map(element => element.precio);
      return precios
      },

   totalDeVentas: function(){
         let precios = this.listaDeVentas();
         if (precios > 0){ return precios.reduce(function(acum, num){return acum + num})}
         else {return 0};
      },
   
   puedeComprar: function(auto, persona){ 
      if (auto.precio <= persona.capacidadDePagoTotal && unAuto.precio / unAuto.cuotas <= unaPersona.capacidadDePagoEnCuotas){return true}
      else {return false}
   },

   autosQuePuedeComprar: function(unaPersona){
      let listaAutos = this.autosParaLaVenta();
      return listaAutos.filter(element => this.puedeComprar(element, unaPersona))
   }
   
};

console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$');
console.log(concesionaria.autosQuePuedeComprar(unaPersona));
console.log('****************************************');
/* console.log(concesionaria.buscarAuto('APL123'));
console.log('****************************************');
console.log(concesionaria.autosParaLaVenta());
console.log('****************************************');
console.log(concesionaria.venderAuto('APL123'));
console.log('****************************************');
console.log(concesionaria.autosParaLaVenta());
console.log('****************************************');
console.log(concesionaria.autos);*/