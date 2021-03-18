import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Layout from '../core/Layout';

const SignIn = () => {
    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
        error: "",
        success: false,
    });

    const { name, email, password } = values;

    const handleChange = (name) => (event) => {
        setValues({ ...values, error: false, [name]: event.target.value });
    };
    const boxInput = {
        display: 'block',
        margin: '20px auto',
        textAligin: 'center',
        border: '1px solid #458b74',
        padding: '14px 10px',
        borderRadius: '20px',
    }
    const signInForm = () => (
        <div>
            <form>
                <div className="form-group">
                    <label className="text-muted">E-posta</label>
                    <input onChange={handleChange("email")}
                        type="text"
                        className="form-control"
                        style={boxInput} />
                </div>

                <div className="form-group">
                    <label className="text-muted">Parola</label>
                    <input onChange={handleChange("password")} type="text"
                        className="form-control"
                        style={boxInput} />
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label" for="flexCheckDefault">Beni Hatırla </label>

                    <Link to="/externalRequest" style={{ marginLeft: 23 + 'em' }}>Parolamı Unuttum</Link>
                </div>
                <button className="btn btn-raised btn-success btn-block">Giriş Yap</button>
            </form>
        </div>
    );



    return (
        <Layout title="Giriş Yap" description="DeepLab.Bootcamp Node React Projesi" className="container col-md-6 offset-md-2">
            {signInForm()}
        </Layout>
    );

};

export default SignIn;