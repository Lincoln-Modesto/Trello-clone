import Card from "../Card"

const Column = ({ title }) => {
    return (
        <div className="col-3">
            <div className="column ">
                <div className="d-flex justify-content-between align-items-center py-2">
                    <h5>{title}</h5>
                    <button className="btn btn-success">+</button>
                </div>
             
                <div className="row">
                  <div className="col-12">
                    {[1,2,3,4,5,6,7].map( () => <Card/> )}
                  </div>
                </div>
            </div>
        </div>
    )
}

export default Column