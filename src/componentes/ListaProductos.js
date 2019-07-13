import React, {Component} from "react";

class ListaProductos extends Component{

    clickLibro=(item)=>{
        const{agregarAlCarrito}=this.props
        console.log('haciendo click en el libro..',item)

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
                             <div onClick={()=>{this.clickLibro(item)}} key={index}>
                                 {item.nombre} - {item.precio}
                                 </div>

                         )
                     })}
                 </div>
            </div>
            )
        }
   
}

export default ListaProductos