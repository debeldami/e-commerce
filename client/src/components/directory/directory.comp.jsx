import React from "react";
import MenuItem from '../menu-items/menu-item.comp';
import './directory.style.scss'
import { connect } from 'react-redux';
import { selectDirectorySections } from './../../redux/directory/directory.selector';
import { createStructuredSelector } from 'reselect';

const Directory = ({ sections }) => (<div className="directory-menu">
    {sections.map(({ id, ...otherSection }) => <MenuItem key={id} {...otherSection} />)}
</div>)


const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);