import { useSearchParams } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Login from "@/components/login";
import Signup from "@/components/signup";

const Auth = () => {
    const [searchParams] = useSearchParams();

    return (
        <div className="mt-36 flex flex-col items-center gap-10">
            <h1 className="text-3xl font-extrabold">
                {searchParams.get("createNew")
                    ? "Hold up! Let's login first.."
                    : "Login / Signup"}
            </h1>
            <Tabs defaultValue="login" className="w-[400px]">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="Login">Login</TabsTrigger>
                    <TabsTrigger value="Signup">Signup</TabsTrigger>
                </TabsList>
                <TabsContent value="Login"><Login/></TabsContent>
                <TabsContent value="Signup"><Signup/></TabsContent>
            </Tabs>
        </div>
    );
};

export default Auth;
