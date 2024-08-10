import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { BeatLoader } from "react-spinners";
import Error from "./error";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import useFetch from "@/hooks/use-fetch";
import { login } from "@/db/apiAuth";
  
  const Login = () => {
    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
      email: "",
      password: "",
    });
    const [isLoading, setIsLoading] = useState(false);
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevState) => ({
        ...prevState,


        [name]: value,
      }));
    };

    const{data,error,loading,fn:fnLogin}=useFetch(login,formData);
    
    useEffect(()=>{
        console.log(data);
        // if(error===null && data){
        //   //  
        // }

        
    }, [data,error])



    const handleLogin = async () => {
      setErrors({});
      setIsLoading(true);
      try {
        const schema = Yup.object().shape({
          email: Yup.string()
            .email("Invalid Email")
            .required("Email is required"),
          password: Yup.string()
            .min(6, "Password must be at least 6 characters")
            .required("Password is required"),
        });
  
        await schema.validate(formData, { abortEarly: false });
        // API call
        await fnLogin()
      } catch (e) {
        const newErrors = {};
  
        e?.inner?.forEach((err) => {
          newErrors[err.path] = err.message;
        });
        setErrors(newErrors);
      } finally {
        setIsLoading(false);
      }
    };
  
    return (
      <Card>
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>to your account if you have one already</CardDescription>
          {error && <Error message={error.message}/>}
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="space-y-1">
            <Input
              name="email"
              type="email"
              placeholder="Enter Email"
              onChange={handleInputChange}
            />
            {errors.email && <Error message={errors.email} />}
          </div>
          <div className="space-y-1">
            <Input
              name="password"
              type="password"
              placeholder="Enter Password"
              onChange={handleInputChange}
            />
            {errors.password && <Error message={errors.password} />}
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={handleLogin}>
            {loading? <BeatLoader size={10} color="#36d7b7" /> : "Login"}
          </Button>
        </CardFooter>
      </Card>
    );
  };
  
  export default Login;
  
  
