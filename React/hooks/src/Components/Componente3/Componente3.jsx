import { useEffect , useState } from "react";

const Componente3 = ({}) => {

    const [ foto , setFoto ] = useState( 0 );

    useEffect( () => {
        console.log('🟢 useEffect 1');
        
        return () => {
            console.log('🔴 Me destruyo');
        }
    }, []);

    useEffect( () => {
        console.log('🔵 useEffect 2');
    });

    return (
        <div className="Componente3">
            <h2>Componente3</h2>
            <h3>{ foto }</h3>

            <button onClick={ () => setFoto( foto + 1 ) }>Aumentar</button>
        </div>
    )
}

export default Componente3;