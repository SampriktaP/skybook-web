'use client'

import axios from 'axios';
import { Controller, useForm } from 'react-hook-form';
export default function PublicWallPage() {
    const { control, handleSubmit } = useForm({
        values: {
            caption: "",
        }
    });
    return (
        <div>
            <form onSubmit={
                handleSubmit(async (data) => {
                    const token = localStorage.getItem("token")
                    const res = await axios.post(
                        "http://localhost:8080/post/create", 
                        {caption: data.caption}, 
                        {
                            headers: {
                                Authorization: "Bearer "+token
                            }
                        })
                    if(res.data.success) {
                       const posts = await axios.get("http://localhost:8080/post/all", {
                            headers: {
                                Authorization: "Bearer "+token
                            }
                        })
                       console.log(posts.data.message)
                    }
                })
            }>
                <Controller
                    name="caption"
                    control={control}
                    render={({ field }) => (
                        <input
                            type="text"
                            placeholder="Enter your message"
                            {...field}
                        />
                    )}
                />
                <button type="submit">Post</button>
            </form>
        </div>
    )
}