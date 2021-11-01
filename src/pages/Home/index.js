import Column from "../../components/Column"

const Home = () => {
    return (
        <main>
            <div className="container-fluid py-3">
                <div className="row">
                    {[1, 2, 3, 4].map((index) => <Column title={`Coluna ${index}`} />)}
                </div>
            </div>
        </main>
    )
}

export default Home