import { useSelector, useDispatch } from 'react-redux'
import Column from "../../components/Column"
import Modal from '../../components/Card/modal'

const Home = () => {

    const dispatch = useDispatch()
    const { columns, modal } = useSelector((state) => state.tasks)

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
                                    (e) => {
                                        const action = {
                                            type: '@TASKS/UPDATE_COLUMN_NAME',
                                            column: e.target.value
                                        }
                                        dispatch(action)
                                    }
                                } />
                            <div className="d-flex align-items-center">
                                <button
                                    className="btn btn-sm btn-success mx-2 py-1"
                                    onClick={() => dispatch({
                                        type: '@TASKS/ADD_COLUMN'
                                    })}>
                                    Adicionar
                                </button>
                            </div>

                        </div>
                    </div>
                    <div className="d-flex">
                        {columns?.map((column) => <Column {...column} />)}
                    </div>
                </div>
            </main>
            <Modal
                show={modal?.opened}
                showConfirm={false}
            //onConfirm={() => setOpened(false)}
            //onCancel={() => setOpened(false)}
            />
        </>
    )
}

export default Home