import React from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';

const OrderForm = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {

        console.log(data);
    };

    return (
        <div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <label for="exampleFormControlInput1" className="form-label">Name</label> <br />
                    <input className="form-control" id="exampleFormControlInput1" {...register("name", { required: true })} value={loggedInUser.displayName} /> <br />

                    <label for="exampleFormControlInput1" className="form-label">Email address</label> <br />
                    <input className="form-control" id="exampleFormControlInput1" {...register("email", { required: true })} value={loggedInUser.email} /> <br />

                    <label for="exampleFormControlInput1" className="form-label">Your Product Courier ID</label> <br />
                    <input className="form-control" id="exampleFormControlInput1" {...register("courierId", { required: true })} /> <br />

                    <label for="exampleFormControlTextarea1" className="form-label">Describe your Problem</label> <br />
                    <textarea className="form-control" id="exampleFormControlInput1" {...register("des", { required: true })} /> <br />

                    <input className='btn btn-dark' type="submit" />
                </form>
            </div>
        </div>
    );
};

export default OrderForm;