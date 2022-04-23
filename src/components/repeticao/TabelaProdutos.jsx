import produtos from "../../data/produtos";
import './TabelaProdutos.css'
// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    console.log(produtos)

    const getLinhas = () => {
        return produtos.map((produto,i) => {
            return (
                <tr key={produto.id} className={i % 2 === 0 ? 'Par' : 'Impar'}>
                    <td>{produto.id}</td>
                    <td>{produto.produto}</td>
                    <td>R$ {produto.preco.toFixed(2).replace('.',',')}</td>
                </tr>
            )
        })
    }

    return (
            <table className="TabelaProdutos">
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Produto</td>
                        <td>Preço</td>
                    </tr>
                </thead>
                <tbody>
                    {getLinhas()}
                </tbody>
            </table>
        )
    }
