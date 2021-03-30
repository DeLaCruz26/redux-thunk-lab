import React, { Component } from 'react';

class CatList extends Component {
    render() {
        const catPics = this.props.catPics.map(cat => <img key={cat.id} src={cat.url} alt='' />)
        return (
            <div>
                {catPics}
            </div>
        );
    }
}

export default CatList;
