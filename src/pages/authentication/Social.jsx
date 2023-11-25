import GoogleIcon from '@mui/icons-material/Google';
import Box from '@mui/material/Box';
import useAuth from '../../hook/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';
import useAxiosPublic from '../../hook/useAxiosPublic';
import toast from 'react-hot-toast';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';

const Social = () => {
  const { googleUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosPublic = useAxiosPublic();
  const [allUsers, setAllUsers] = useState([]);

  useEffect(()=>{
    axiosPublic.get("/users").then(res => {
      console.log(res.data)
      setAllUsers(res.data)
    })
  },[axiosPublic])

  const handleSocialLink = (media) => {
    media()
      .then((res) => {
        const userInfo = {
          email: res.user?.email,
          displayName: res.user?.displayName,
          status: "active",
        }
        const matchEmail = allUsers?.filter(user => user.email === res.user?.email)
        console.log(matchEmail)
        if(matchEmail.length === 0){
          axiosPublic.post("/users", userInfo).then(res => {
            console.log(res.data)
          })
        }
        toast.success("Logged in successfully");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        toast.error(error.code);
      });
  };
    return (
        <Box sx={{textAlign: 'center', mt: 2}}>
            <Button sx={{fontSize: 20}} onClick={() => handleSocialLink(googleUser)}><GoogleIcon /></Button>
            <Typography sx={{fontSize: 14}}>Continue With Google</Typography>
        </Box>
    );
};

export default Social;