import { Fragment, useState } from 'react';

function Modal () {

    const [ estado, setEstado ] = useState ( false );

    const pintaModal = () => {
        if (estado) {
            return modalAbierto();
        } else {
            return modalCerrado();
        }
    }

    const modalAbierto = () => {
        return (
            <div onClick={actualizaModal} className="modal abierto">
                <div onClick={propagation} className="contenidoModal">
                    <span> Hola </span>
                </div>
            </div>
        );
    }

    const modalCerrado = () => {
        return (
            <div className="modal">
                <div className="contenidoModal">
                    <span> Hola </span>
                </div>
            </div>
        );
    }

    const actualizaModal = () => {
        setEstado(!estado);
        pintaModal();
    }

    const propagation = ($event) => {
        $event.stopPropagation();
    }

    return (
        <Fragment>
            {pintaModal()}
            <div className="botonModal">
                <button onClick={actualizaModal}> Abrir Modal </button>
            </div>
        </Fragment>
    );

}

export default Modal;