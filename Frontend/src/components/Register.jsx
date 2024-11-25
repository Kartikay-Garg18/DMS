import React, { useState } from 'react';
import {Card,Input,Checkbox,Button,Typography,}  from "@material-tailwind/react";
import {createAccount, login} from "../services/auth";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { login as authLogin } from '../store/authSlice'

function Register(){
  const navigate = useNavigate();
  const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        password: '',
        agree: false,
      });

      const [errors, setErrors] = useState({});


      const validate = () => {
        const newErrors = {};
        if (!formData.fullName) newErrors.fullName = 'Full Name is required';
        else if (!/^[A-Za-z\s]+$/.test(formData.fullName))newErrors.fullName = 'Full Name must contain only letters and spaces';
        
        if (!formData.email) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
        if (!formData.phone) newErrors.phone = 'Phone number is required';
        else if (!/^\+?\d{10,15}$/.test(formData.phone)) newErrors.phone = 'Phone number is invalid';
        if (!formData.password) newErrors.password = 'Password is required';
        else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/.test(formData.password)) {
          newErrors.password = 'Password must be at least 8 characters long and contain an uppercase letter, a lowercase letter, a digit, and a special character';
        }
        if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
        if (!formData.agree) newErrors.agree = 'You must agree to the terms and conditions';
        return newErrors;
      };

      const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
          ...formData,
          [name]: type === 'checkbox' ? checked : value,
        });
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
          setErrors(validationErrors);
        } else {
          try {
            await createAccount({
              name:formData.fullName,
              email:formData.email,
              password:formData.password,
              phoneNumber:formData.phone
          })

            const data = await login({ email: formData.email, password: formData.password });

            dispatch(authLogin(data));

            navigate('/')
          } catch (error) {
            alert("Already register with this email")
          }
        }
      };
    return (
        <div className="flex flex-col items-center justify-center p-5 ">
        <div className="p-4 bg-white rounded-xl shadow-lg">
          <Card color="transparent" shadow={false} className="p-4">
            <Typography variant="h4" color="blue-gray" className="text-center">
              Sign Up
            </Typography>
            <Typography color="gray" className="mt-1 font-normal text-center">
              Nice to meet you! Enter your details to register.
            </Typography>
            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handleSubmit}>
              <div className="mb-1 flex flex-col gap-6">
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Full Name
                </Typography>
                <Input
                  size="lg"
                  name="fullName"
                  placeholder="FirstName LastName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={`!border-t-blue-gray-200 focus:!border-t-gray-900 ${errors.fullName ? 'border-red-500' : ''}`}
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                {errors.fullName && <Typography color="red">{errors.fullName}</Typography>}
                
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Email
                </Typography>
                <Input
                  size="lg"
                  name="email"
                  placeholder="name@mail.com"
                  value={formData.email}
                  onChange={handleChange}
                  className={`!border-t-blue-gray-200 focus:!border-t-gray-900 ${errors.email ? 'border-red-500' : ''}`}
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                {errors.email && <Typography color="red">{errors.email}</Typography>}
                
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Password
                </Typography>
                <Input
                  type="password"
                  size="lg"
                  name="password"
                  placeholder="********"
                  value={formData.password}
                  onChange={handleChange}
                  className={`!border-t-blue-gray-200 focus:!border-t-gray-900 ${errors.password ? 'border-red-500' : ''}`}
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                {errors.password && <Typography color="red">{errors.password}</Typography>}
                
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Confirm Password
                </Typography>
                <Input
                  type="password"
                  size="lg"
                  name="confirmPassword"
                  placeholder="********"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={`!border-t-blue-gray-200 focus:!border-t-gray-900 ${errors.confirmPassword ? 'border-red-500' : ''}`}
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                {errors.confirmPassword && <Typography color="red">{errors.confirmPassword}</Typography>}
                
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Phone No.
                </Typography>
                <Input
                  size="lg"
                  name="phone"
                  placeholder="+91 1234567890"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`!border-t-blue-gray-200 focus:!border-t-gray-900 ${errors.phone ? 'border-red-500' : ''}`}
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                {errors.phone && <Typography color="red">{errors.phone}</Typography>}
              </div>
              <Checkbox
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
                label={
                  <Typography
                    variant="small"
                    color="gray"
                    className="flex items-center font-normal"
                  >
                    I agree to the
                    <a
                      href="#"
                      className="font-medium transition-colors hover:text-gray-900"
                    >
                      &nbsp;Terms and Conditions
                    </a>
                  </Typography>
                }
                containerProps={{ className: "-ml-2.5" }}
              />
              {errors.agree && <Typography color="red">{errors.agree}</Typography>}
              <Button type="submit" className="mt-6" fullWidth>
                Sign Up
              </Button>
              <Typography color="gray" className="mt-4 text-center font-normal">
                Already have an account?{" "}
                <a href="/login" className="font-medium text-gray-900">
                  Sign In
                </a>
              </Typography>
            </form>
          </Card>
        </div>
      </div>
     );
}

export default Register;

{/* <div className="col-span-full">
                <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                        >

                      Upload Profile Photo
                      <input id="file-upload" name="file-upload" type="file"
                      accept="image/png, image/jpeg, image/gif"
                       className="sr-only" />
                    
                          
                        </label>
                  <div className="mt-2 flex items-center gap-x-3">
                    <UserCircleIcon aria-hidden="true" className="size-12 text-gray-300" />
                    
                  </div>
                </div> */}