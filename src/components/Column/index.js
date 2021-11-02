import { useDispatch, useSelector } from "react-redux"
import Card from "../Card"

const Column = ({ title, id }) => {

    const dispatch = useDispatch()
    const { cards } = useSelector( (state) => state.tasks)

    return (
        <div className="col-3 ">
            <div className="column">
                <div className="d-flex justify-content-between align-items-center py-2">
                    <h5>{title}</h5>
                    <button 
                    className="btn btn-success"
                    onClick={ () => {
                        const action = {
                            type: '@TASKS/SET_MODAL',
                            modal:{
                                opened: true
                            }
                        }
                        dispatch(action)
                    }}>+</button>
                </div>
             
                <div className="row">
                  <div className="col-12">
                    {cards?.filter((c) => c?.columnId === id).map( () => <Card/> )}
                  </div>
                </div>
            </div>
        </div>
    )
}

export default Column