import React from 'react';
import Layout from '../core/Layout';

const Forgot = () => {
    const boxInput = {
        display: 'block',
        margin: '20px auto',
        textAligin: 'center',
        border: '1px solid #458b74',
        padding: '14px 10px',
        borderRadius: '20px',
    }
    const forgotForm = () => (
        <form>
            <div className="form-group">
                <input
                    type="text"
                    className="form-control"
                    style={boxInput}
                    placeholder="E-Posta" />
            </div>

            <button type="button" class="btn btn-raised btn-success  btn-block">E-posta gönder</button>
        </form>

    );


    return (

        <Layout title="Parolamı Unuttum" description="DeepLab.Bootcamp Node React Projesi" className="container col-md-6 offset-md-2">
            {forgotForm()}
        </Layout>
    );
};
export default Forgot;