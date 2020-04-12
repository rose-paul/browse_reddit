import React, {useState} from 'react';
import Controller from './controller';
import PostShow from './postShow';



const App = () => {

    const [modal, setModal] = useState();

    function handlePostClick(data) {
        if (data) {
            setModal(<Modal data={data} handlePostClick={handlePostClick} />)
        } else {
            setModal(null)
        }
    }

    return (
        <div>
            <Controller handlePostClick={handlePostClick} />
            {modal}
        </div>
    )
}

const Modal = ({ data, handlePostClick }) => {

    let component = <PostShow data={data} />

    return data ? (
        <div className="modal-background" onClick={() => handlePostClick(null)}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                <div className="close-button" onClick={() => handlePostClick(null)}>X</div>
                {component}
            </div>
        </div>
    ) : null

}

export default App;