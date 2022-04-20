import './Specs.scss'

const Specs = ({ specs }) => {
    return (
        <div className="Specs">
            <div className="Wrapper">
                {
                    specs.map( spec => {
                    return (
                        <div
                        key={spec.id}
                        className={ `Specs-spec ${spec.class}` }>
                        <svg className={ `Specs-svg ${spec.class}` }></svg>
                        <h2 className={ `Specs-h2 ${spec.class}` }>{ spec.titulo }</h2>
                        </div>
                    )
                    })
                }
            </div>
      </div>
    );
}

export default Specs;