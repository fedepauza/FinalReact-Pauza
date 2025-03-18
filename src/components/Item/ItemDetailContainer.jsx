
import { useEffect , useState , useContext } from 'react'
import ItemContainer from './ItemContainer';
import { useParams } from 'react-router-dom'
import { db } from '../../Config/fireBase';
import { doc, getDoc } from 'firebase/firestore';
import { CartContext } from '../Context/CartContext'
import ItemCount from './ItemCount'



const ItemDetailContainer = () => {
    
    const { id } = useParams()
    const [item, setItem] = useState(null);
    const [ cantidad, setCantidad ] = useState(0)
    const { addItem } = useContext(CartContext)
    
    
    useEffect(() => {
        console.log("Ejecutando useEffect con ID:", id);
        const fetchItem = async () => {
            const docRef = doc(db, 'items', id);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setItem({ id: docSnap.id, ...docSnap.data() });
            } else {
                console.log('Producto no encontrado');
            }
        };
        if (id){
            fetchItem();
        }
        else {
            console.log('ID no encontrado')
        }
    }, [id]);

    if (!item) {
        return <p>Cargando producto...</p>
    }
    
        const handleAdd = (quantity) => {
                setCantidad(quantity)
                addItem(item, quantity)
                }

            return (
                <div className="itemContainer">
                    <div className='descriptions'>
                    <div className='descriptionContainer'>
                    <img src={item.img} alt={item.brand} className="itemImg" />
                    <h4 className="itemTitle">{item.brand}</h4>
                    <p className="itemPrice">${item.price}</p>
                    </div>
                    <div className='containerDescription'>
                    <p className="itemDescription">{item.description}</p>
                    </div>
                    </div>
                    <div className="containerBtnsItem">
                        {cantidad > 0 ? (
                            <Link to="/cart" className="Option">
                                Termina compra
                            </Link>
                        ) : (
                            <ItemCount initial={1} onAdd={handleAdd} />
                        )}
                    </div>
                </div>
            
            
        )   
    }

    
export default ItemDetailContainer
