import './Banner.scss'
import { useState } from 'react'

const Banner = ({ items }) => {

    const [ activo , setActivo ] = useState(-1);
    
    const actualizaEstado = ( valor ) => {
        setActivo( valor );
    }

    return (
        <div className="Banner">
            <div className="Banner-fondo">
                {
                    items.map( ( cadaItem , i ) => {
                        return(
                            <img key={ cadaItem.id } className={`Banner-img ${ activo === i && 'activo' }`} src={ cadaItem.fondo } alt={ cadaItem.nombre } />
                        )
                    })
                }
            </div>
            <ul className="Banner-ul">
                {
                    items.map( ( cadaItem , i ) => {
                        return (
                            <li 
                                key={ cadaItem.id }
                                onMouseOver={ () => actualizaEstado(i) }
                                onMouseOut={ () => actualizaEstado(-1) }
                                className={`Banner-li ${ ( activo === i || activo === -1 ) ? 'activo' : 'inactivo' }`}>
                                <h2 className="Banner-h2">{ cadaItem.nombre }</h2>
                                <span className="Banner-span"> { cadaItem.marca } </span>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Banner;