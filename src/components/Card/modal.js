import SweetAlert from 'react-bootstrap-sweetalert'
import { useSelector, useDispatch } from 'react-redux'

const Modal = () => {

  const dispatch = useDispatch()
  const { modal, columns, card } = useSelector((state) => state.tasks)

  const closeModal = () => {
    const action = {
      type: '@TASKS/SET_MODAL',
      modal: {
        opened: false
      }
    }
    dispatch(action)
  }

  const setCard = (obj) => {
    const action = {
      type: '@TASKS/SET_CARD',
      card: obj
    }
    dispatch(action)
  }

  const addCard = () => {
    const action = {
      type: '@TASKS/ADD_CARD',
    }
    dispatch(action)
    closeModal()
  }

  const removeCard = () => {
    const action = {
      type: '@TASKS/REMOVE_CARD',
    }
    dispatch(action)
    closeModal()
  }

  return (
    <SweetAlert
      show={modal?.opened}
      showConfirm={false}
      onConfirm={() => closeModal()}
      onCancel={() => closeModal()}
    >
      <h4>{modal.type === 'CREATE' ? 'Criar ' : 'Atualizar '}Task</h4>
      <select
        value={card?.columnId}
        className="form-control"
        onChange={
          (e) => {
            setCard({
              columnId: parseInt(e.target.value)
            })
          }
        }>
        {columns?.map((column) =>
          <option value={column?.id}>{column?.title}</option>
        )}
      </select>
      <input
        placeholder="Nome da Task"
        type="text"
        value={card?.title}
        className="form-control mt-2"
        onChange={
          (e) => {
            setCard({
              title: e.target.value
            })
          }
        } />
      <textarea
        placeholder="Descrição da Task"
        value={card?.description}
        className="form-control mt-2"
        rows={3}
        onChange={
          (e) => {
            setCard({
              description: e.target.value
            })
          }
        } />
      <button
        className={`btn btn-block btn-${modal.type === 'CREATE' ? 'success' : 'primary'} mt-2`}
        onClick={() => addCard()}
      >
        {modal.type === 'CREATE' ? 'Criar' : 'Atualizar'}
      </button>
      {modal.type === 'UPDATE' &&
        <button
          className="btn btn-block btn-danger"
          onClick={() => removeCard()}
        >Excluir</button>}
    </SweetAlert >
  )
}

export default Modal