import supabase from "./supabase";

export async function login({email,password}){
    const {data,error}=await supabase.auth.SiginWithPassword({
        email,
        password,

    });

       if(error) throw new Error(error.mesage);
       return data;
}

    