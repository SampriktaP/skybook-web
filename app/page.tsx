'use client'
import axios from "axios";
import { Controller, useForm } from "react-hook-form";
import "./globals.css";
import { useRouter } from 'next/navigation'

export default function LoginIn() {
  const { control, handleSubmit } = useForm({
    values: {
      email: "",
      password: ""
    }
  });

  const router = useRouter();


  return (
    <div>
      <h1>
        Skybook
      </h1>
      <form onSubmit={
        handleSubmit(async (data) => {
          console.log(data)
          
          //we will call api here
          const response = await axios.post('http://localhost:8080/user/login', {
            email: data.email,
            password: data.password
          })
          console.log(response)
        })
      }>

        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <input
              type="email"
              placeholder="Enter your userid"
              {...field}
            />
          )}
        />

        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <input
              type="password"
              placeholder="Enter your password"
              {...field}
            />
          )}
        />

        <button type="submit" > Login </button>
        
      </form>
    </div >

  )
}   