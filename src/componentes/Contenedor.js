import React,{Component} from "react";
import ListaProductos from "./ListaProductos"

const arregloProductos=[
    {id:1, nombre:"Hamburguesas",Contenido:"15 unidades",precio:12 },
    {id:2, nombre:"Aceite de Girasol",Contenido:"1 L",precio:15 },
    {id:3, nombre:"Arroz Blanco",Contenido:"1 Kg",precio:5},
    {id:4, nombre:"Mayonesa",Contenido:"500 gr",precio:6},
    {id:5, nombre:"Harina de Maiz",Contenido:"2 Kg",precio:30},
    {id:6, nombre:"Cafe Molido",Contenido:"1 Kg",precio:10},
    {id:7, nombre:"Chocolate",Contenido:"12 unidades",precio:20},
    {id:8, nombre:"Pan de Molde",Contenido:"1 paquete",precio:11},
    {id:9, nombre:"Frutos secos",Contenido:"1/2 Kg",precio:35},
    {id:10, nombre:"Galletas",Contenido:"1 paquete",precio:14},
    {id:11, nombre:"Leche Descremada",Contenido:"1/2 L",precio:12},
]

class Contenedor extends Component{

    constructor(){
        super()
        this.state={
            ProductosSuper:arregloProductos,
            CarritoProductos:[]
        }
    }
    escribiendo=(evento)=>{
        const lista=evento.target.value;
        this.filtrar(lista)
    }

    filtrar=(lista)=>{
        const listadoCompleto=[];
       for(let i=0;i<arregloProductos.length;i++){
           const Productos=arregloProductos[i];
           if(Productos.nombre.toLowerCase().startsWith(lista.toLowerCase())){
               listadoCompleto.push(Productos);
           }
       }
       this.setState({ProductosSuper:listadoCompleto})
    }

    agregarAlCarrito=(ProdSeleccionado)=>{
        const{CarritoProductos  }=this.state
        CarritoProductos.push(ProdSeleccionado);
        let preciototal=0;
        CarritoProductos.forEach((item)=>{
            preciototal+=item.precio
        })
        this.setState({CarritoProductos,total:preciototal})
    }
    render(){

        const{ProductosSuper,CarritoProductos, total}=this.state
        return(
         <div>
                Comprar:
            
            <div style={{display:'flex', flexDirection:'row',backgroundColor:'purple'}}>
                  
               <div style={{flex:1,backgroundColor:'orange'}}>
               <div>
                    <input  onChange={this.escribiendo}/>
                </div>

                <ListaProductos agregarAlCarrito={this.agregarAlCarrito} Productos={ProductosSuper} />

               </div>
              
               <div style={{flex:1,backgroundColor:'green'}}>
                   Carrito de compras

                   <div>
                       Total de Precios:{total}
                   </div>
                   <ListaProductos Productos={CarritoProductos} />
               </div>
            </div>

         </div>

        )
    }
}

export default Contenedor