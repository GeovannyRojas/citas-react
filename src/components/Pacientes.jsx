const Paciente = ({paciente, setPaciente, eliminarPaciente}) =>{
    const {nombre, propietario, email, fecha, sintomas, id}= paciente

    const handleEliminar= confirm('Deseas eliminar este paciente');
    if (respuesta){
        eliminarPaciente(id)
    }

    return(
        <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
                <span className="font-normal normal-case">{nombre}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">
                Fecha de alta del paciente: {''}
                <span className="font-normal normal-case">{fecha}</span>
            </p>

        </div>
    )
}