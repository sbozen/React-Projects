import React, { useState } from "react";
import Layout from '../core/Layout';
import { App } from "../config";

const SignUp = () => {
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

    const signup = (name, email, password) => {
        console.log(name, email, password)
    };

    const boxInput = {
        display: 'block',
        margin: '20px auto',
        textAligin: 'center',
        border: '1px solid #458b74',
        padding: '14px 10px',
        borderRadius: '20px',
    }

    const signUpForm = () => (
        <div>
            <form>
                <div className="form-group">
                    <input
                        onChange={handleChange("name")}
                        type="text"
                        className="form-control" style={boxInput}
                        placeholder="Adınız" />
                </div>

                <div className="form-group">
                    <input
                        onChange={handleChange("name")}
                        type="text"
                        className="form-control" style={boxInput}
                        placeholder="Kullanıcı Adınız" />
                </div>

                <div className="form-group">
                    <input
                        onChange={handleChange("email")}
                        type="text"
                        className="form-control"
                        style={boxInput}
                        placeholder="E-posta" />
                </div>

                <div className="form-group">
                    <input
                        onChange={handleChange("password")}
                        type="text"
                        className="form-control"
                        style={boxInput}
                        placeholder="Parola" />
                </div>
                <button type="button" class="btn btn-raised btn-success  btn-block">Kayıt Ol</button>
            </form>
        </div>
    );

    return (

        <Layout title="Kayıt Ol" description="DeepLab.Bootcamp Node React Projesi" className="container col-md-6 offset-md-2">
            {signUpForm()}
            {/*JSON.stringify(values) -- Formdan çekilen verileri kontrol etmeye yarar */}
        </Layout>

    );
};

export default SignUp;