import React from 'react';
import '../App.css';
// import Header from './Header'
// import Sidebar from './Sidebar'
import Content from '../components/medicine-compo/Content';
import Layout from '../Layout';
function Medicine() {
    return (
        <div className="grid-container">
            <Layout>
                <Content />
            </Layout>
        </div>
    );
}

export default Medicine;
