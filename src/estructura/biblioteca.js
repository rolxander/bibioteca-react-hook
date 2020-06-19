export default class Biblioteca {
    constructor(estado = []){
        this.estado = estado;
        this.disponibles=[];
        this.prestados=[];
        this.no_devueltos=[];
        this.recorrerLista(this.estado)
    }
    buscarLibro(clave){
        this.limpiarListas();
        let libros_filtrados = []
        if(clave !== ''){   
        this.estado.map((libro)=>{
            if(libro.codigo.toLowerCase().includes(clave.toLowerCase()) || libro.titulo.toLowerCase().includes(clave.toLowerCase())){
                libros_filtrados.push(libro)
            }
        return null
        });
        this.recorrerLista(libros_filtrados);
        }else{
        this.recorrerLista(this.estado)
        }
    }
    getEstado(){
        return this.estado;
    }
    limpiarListas(){
        this.setDisponible([])
        this.setPrestados([])
        this.setNodevueltos([])
    }
    setEstado(libro){
        this.estado.push(libro)
    }
    setDisponible(list){
        this.disponibles = list
    }
    setPrestados(list){
        this.prestados = list
    }
    setNodevueltos(list){
        this.no_devueltos = list 
    }
    setPushDisponible(libro){
        this.disponibles.push(libro)
    }
    setPushPrestados(libro){
        this.prestados.push(libro)
    }
    setPushNodevueltos(libro){
        this.no_devueltos.push(libro)
    }
    //
    getDisponibles( ){
        return this.disponibles;
    }
    getPrestados(){
        return this.prestados;
    }
    getNodevueltos(){
        return this.no_devueltos
    }
    recorrerLista(bookList){
        bookList.map((libro)=>{
            switch(libro.estado){
                case"disponible":{this.setPushDisponible(libro);break;}
                case"prestado":{this.setPushPrestados(libro);break;}
                case"deben":{this.setPushNodevueltos(libro);break;}
                default:break;
            }
        return null});
    }
    registrarLibro(libro){
        this.setEstado(libro)
        this.limpiarListas()
        this.recorrerLista(this.estado)
    };
    registrarPrestamo(prestamo){
        this.limpiarListas()
        this.estado.map((libro)=>{
            if(libro._id === prestamo.libro){
                libro.estado = "prestado";
                libro.prestamos.push(prestamo)
            }
        return null
        });
        this.recorrerLista(this.estado)
    };
    devolverLibro(libro_prestado){
        this.limpiarListas();
        this.estado.map((libro)=>{
            if(libro._id === libro_prestado.libro){
                libro.estado = "disponible";
            }
        return null
        });
        this.recorrerLista(this.estado);
    };
    bajaLibro(id,motivo){
        this.limpiarListas();
        this.estado.map((libro)=>{
            if(libro._id === id){
                libro.estado = 'baja'
                libro.motivo_baja =motivo 
            }
        return null
        })
        this.recorrerLista(this.estado)
    }
    
}
