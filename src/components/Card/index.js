import { useState } from "react"
import Modal from "./modal"

const Card = () => {

  const [opened, setOpened] = useState(false)

  return (
    <>
      <div class="card mt-2" onClick={() => setOpened(true)}>
        <div class="card-body">
          <h5 class="card-title">
            <span class="badge badge-secondary">-</span> Special title treatment
          </h5>
          <small class="card-text">With supporting text below as a natural lead-in to additional content.</small>
        </div>
      </div>
        <Modal
          show={opened}
          showConfirm={false}
          onConfirm={() => setOpened(false)}
          onCancel={() => setOpened(false)}/>
    </>
  )
}

export default Card