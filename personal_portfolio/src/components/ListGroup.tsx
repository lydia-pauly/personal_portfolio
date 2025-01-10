function ListGroup() {
    const items = [
        'NY',
        'Lon',
        'Tokyo'
    ];

    

    return <>
            <h1>List Items</h1>
            <ul className="list-group">
                {items.map(item => <li className="list-group-item">{ item }</li>)}
            </ul>
        </>
}

export default ListGroup;