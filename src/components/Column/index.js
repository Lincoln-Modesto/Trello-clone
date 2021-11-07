import { useDispatch, useSelector } from "react-redux"
import { Droppable } from "react-beautiful-dnd"
import Card from "../Card"
import { setCard, setModal } from '../../store/modules/task/actions'

const Column = ({ title, id }) => {

    const dispatch = useDispatch()
    const { cards } = useSelector((state) => state.tasks)
    const columnCards = cards?.filter((c) => c?.columnId === id)

    const actionSetModal = setModal({
        opened: true,
        type: 'CREATE'
    })

    const actionSetCard = setCard({
        id: null,
        columnId: parseInt(id),
        title: '',
        description: ''
    })

    return (
        <div className="col-3 ">
            <Droppable droppableId={id?.toString()}>
              {(provided) =>  
               <div className="column" 
                    ref={provided.innerRef}
                    {...provided.droppableProps}>
                    <div className="d-flex justify-content-between align-items-center py-2">
                        <h5>{title}</h5>
                        <button
                            className="btn btn-success"
                            onClick={() => {
                                dispatch(actionSetCard)
                                dispatch(actionSetModal)
                            }}>+</button>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            {columnCards?.map((card, index) => <Card {...card} index={index} />)}
                        </div>
                    </div>
                </div>}
            </Droppable>
        </div>
    )
}

export default Column