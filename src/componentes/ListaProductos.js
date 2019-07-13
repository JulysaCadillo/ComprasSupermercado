import React, {Component} from "react";

class ListaProductos extends Component{

    SelecProducto=(item)=>{
        const{agregarAlCarrito}=this.props
        console.log('seleccionando el producto..',item)

        if(typeof agregarAlCarrito==='function'){
            agregarAlCarrito(item);  
        }

       
      
    }
    render(){
        const{Productos}=this.props
        return(
            <div>
               
                 <div>
                     {Productos.map((item,index)=>{

                         return(
                             <div onClick={()=>{this.SelecProducto(item)}} key={index}>
                                 {item.nombre} - {item.Contenido} - {item.precio}
                                 </div>

                         )
                     })}
                 </div>
            </div>
            )
        }
   
}

export default ListaProductos