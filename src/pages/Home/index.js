import { useSelector, useDispatch } from 'react-redux'
import Column from "../../components/Column"
import Modal from '../../components/Card/modal'
import { updateColumnName, addColumn, setCard, updateCard } from '../../store/modules/task/actions'
import { DragDropContext } from 'react-beautiful-dnd'

const Home = () => {

    const dispatch = useDispatch()
    const { columns } = useSelector((state) => state.tasks)

    const actionUpdateColumn = (name) => {
        dispatch(updateColumnName(name))
    }

    const onDropCard = (params) => {
        const id = parseInt(params?.draggableId)
        const columnId = parseInt(params?.destination?.droppableId)

        dispatch(setCard({
            id,
            columnId
        }))

        dispatch(updateCard())
    }

    return (
        <>
            <main >
                <div className="container-fluid py-3">
                    <div className="d-flex justify-content-between mb-3" >
                        <h3>Trello Clone</h3>
                        <div className="d-flex col-4 align-items-center">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Adicionar tabela"
                                onChange={
                                    (name) => {
                                        actionUpdateColumn(name.target.value)
                                    }
                                } />
                            <div className="d-flex align-items-center">
                                <button
                                    className="btn btn-sm btn-success mx-2 py-1"
                                    onClick={() => dispatch(
                                       addColumn()
                                    )}>
                                    Adicionar
                                </button>
                            </div>

                        </div>
                    </div>
                    <div className="d-flex">
                        <DragDropContext
                            onDragEnd={(params) => onDropCard(params)}
                        >
                        {columns?.map((column) => <Column {...column} />)}
                        </DragDropContext>
                    </div>
                </div>
            </main>
            <Modal/>
        </>
    )
}

export default Home