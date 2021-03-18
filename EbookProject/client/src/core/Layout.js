import React from 'react';
import Menu from './Menu';


const header = { height: '150px', padding: '3%' };
const Layout = ({ title = "title", description = "Description", className, children }) => {

    return (

        <div>
            <Menu />
            <div className="jumbotron" style={header}>
                <table>
                    <tr>
                        <td> <i class="fab fa-react fa-spin fa-3x"></i></td>
                        <td><h3>{title}</h3></td>
                    </tr>
                </table>

                <p className="lead">{description}</p>
            </div>
            <div className={className}>{children}</div>
        </div >
    );
};

export default Layout;

