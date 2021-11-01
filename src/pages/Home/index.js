import Column from "../../components/Column"

const Home = () => {
    return (
        <main >
            <div className="container-fluid py-3">
            <h3>Trello Clone</h3>
                <div className="d-flex">
                    {[1, 2, 3, 4].map((index) => <Column title={`Coluna ${index}`} />)}
                </div>
            </div>
        </main>
    )
}

export default Home