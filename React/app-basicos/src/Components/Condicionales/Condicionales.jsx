import './Condicionales.scss'

const Condicionales = ({}) => {

    const numero     = 32;
    const texto       = "Timmy"
    const booleano   = true;


    return (
        <div className="Condicionales">
            <h1>Soy Condicionales</h1>

            {
                numero === 32
                ? <p>Es igual</p>
                : <p>No es igual</p>
            }
            {
                numero <= 20
                ? <p>Es menor que 20</p>
                : <p>Es mayor que 20</p>
            }
            <p>{numero === 32 ? 'Yep' : 'Nop' }</p>
            <p>{numero === 32 ? 'Yep' : 'Nop' }</p>
            {
                numero >= 32
                ? 'Yep'
                : 'Noup'
            }

            <hr />

            <p>{ texto === "Timmy" ? 'Yep' : 'Noup' }</p>
            <p>{ texto === 'Timmy' ? 'Yep' : 'Noup' }</p>
            <p>{ texto === 'Timmy' ? 'Yep' : 'Noup' }</p>
            <p>{ texto === 'Timmy' ? 'Yep' : 'Noup' }</p>
            <p>{ texto === 'Timmy' ? 'Yep' : 'Noup' }</p>

            <hr />

            <p>{ booleano ? 'Yep' : 'Noup' }</p>
            <p>{ booleano ? 'Yep' : 'Noup' }</p>
            <p>{ booleano ? 'Yep' : 'Noup' }</p>
            <p>{ booleano ? 'Yep' : 'Noup' }</p>
            <p>{ booleano ? 'Yep' : 'Noup' }</p>

        </div>
    )

}

export default Condicionales;