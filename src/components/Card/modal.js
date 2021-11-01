import SweetAlert from 'react-bootstrap-sweetalert'

const Modal = (props) => {
  return (
    <SweetAlert {...props}>
      <h4>Atualizar Task</h4>
      <select className="form-control">
        <option>Coluna 1</option>
        <option>Coluna 2</option>
        <option>Coluna 3</option>
        <option>Coluna 4</option>
      </select>
      <input
        placeholder="Nome da Task"
        type="text"
        className="form-control mt-2" />
      <textarea
        placeholder="Descrição da Task"
        className="form-control mt-2"
        rows={3} />
        <button className="btn btn-block btn-success mt-2">
          Atualizar
        </button>
    </SweetAlert >
  )
}

export default Modal