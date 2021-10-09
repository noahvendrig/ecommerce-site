import CollectionItem from '../../components/collection-item/collection-item.component';
import './collection.styles.scss';

import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selectors';


const CollectionPage = ({match}) => (
    <div className='collection'>
        <h2>collection</h2>

    </div>
);

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);