import React from 'react';
import Layout from '../core/Layout';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const userLinks = () => {
        return (
            <div className="card">
                <h4 className="card-header">Kullanıcı Linkleri</h4>
                <ul className="list-group">
                    <li className="list-group-item">
                        <Link className="nav-link" to="/card"><i class="fas fa-shopping-basket"></i>
                            Sepetim
                        </Link>
                    </li>

                    <li className="list-group-item">
                        <Link className="nav-link" to="/profile/update"><i class="fas fa-user"></i>
                            Profil
                        </Link>
                    </li>
                </ul>
            </div>
        );
    };

    const userInfo = () => {
        return (

            <div className="card mb-4">
                <h3 className="card-header">Kullanıcı Bilgileri</h3>
                <ul className="list-group">
                    <li className="list-group-item">Adı:</li>
                    <li className="list-group-item">E-Posta:</li>
                    <li className="list-group-item">Kullanıcı rol:</li>
                </ul>
            </div>
        );
    };

    const purchaseInfo = () => {
        return (
            <div className="card mb-5">
                <h4 className="card-header">Satın Alma Ayrıntıları</h4>
                <ul className="list-group">
                    <li className="list-group-item">Ayrıntılar</li>
                </ul>
            </div>
        );
    }
    return (
        <Layout title="Dashboard" description="DeepLab.Bootcamp Node React Projesi" className="container-fluid">
            <div className="row">
                <div className="col-3">{userLinks()}</div>
                <div className="col-9">{userInfo()}{purchaseInfo()}</div>
            </div>
        </Layout>
    );
};

export default Dashboard;