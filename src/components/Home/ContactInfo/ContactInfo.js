import { DoubleArrow, Email, LocationCity, PhoneAndroidOutlined } from '@material-ui/icons';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import './ContactInfo.css'
const ContactInfo = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    let history = "" // useHistory();

    const onSubmit = data => {
        console.log(data);
        const contactUsData = {
            email: data.email,
            dec: data.dec,
            date: new Date()
        }
        console.log(contactUsData);

        //Sending contactWithUs data to the Server
        fetch('https://apple-doctor-server.herokuapp.com/contactWithUs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(contactUsData)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Your contactWithUs Data Sended Done Successfully');
                    history.push('/home');
                }
            })



    }
    return (
        <div className='contactMainContainer pb-5'>
            <h1 className='pt-5 ml-5'><DoubleArrow></DoubleArrow>Contact</h1>
            <div className='container pt-5'>
                <div className="row">
                    <div className="col-md-6">
                        <p>  <DoubleArrow></DoubleArrow> Apple Doctor Center BD <DoubleArrow></DoubleArrow> </p>
                        <p> <LocationCity></LocationCity> House No. 1/3(Ground Floor), Road No. 5, Block-A, Habiganj Sadar, <span className='text-info'>Sylhet Dhaka 1216 Bangladesh</span> </p>
                        <p> <PhoneAndroidOutlined></PhoneAndroidOutlined> +8801712508063</p>
                        <p> <Email></Email> m.alinkon10@gmail.com </p>
                    </div>
                    <div className="col-md-6">
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <label for="exampleInputEmail1" className="form-label text-white"> <strong>Email Address :</strong> </label>
                            <input className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Type your email Address' {...register("email", { required: true })} /> <br />

                            <label for="exampleInputPassword1" className="form-label text-white"><strong>Details Why you want to Contact : </strong> </label>
                            <textarea type='text' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Details Why you want to Contact with us tell us your info' {...register("dec", { required: true })} /> <br />
                            <input className='btn btn-info' type="submit" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;