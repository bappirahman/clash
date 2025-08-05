import Logo from "@/components/base/Logo";
import { Button } from "@workspace/ui/components/button";
import { Card } from "@workspace/ui/components/card";
import { Input } from "@workspace/ui/components/input";
import { Label } from "@workspace/ui/components/label";
import Link from "next/link";

function Login() {
  return (
    <div className="justify-center flex items-center h-screen">
      <Card className="p-5 min-w-xl md:min-w-2xl">
        <Logo className="text-center" />
        <div>
          <h1 className="font-bold text-2xl">Login</h1>
          <p>wecome back</p>
        </div>
        <form>
          <div className="mt-4">
            <Label htmlFor="email" className="ml-1 mb-2 font-bold">
              Email
            </Label>
            <Input id="email" name="email" placeholder="Enter your email..." />
          </div>
          <div className="mt-4">
            <Label htmlFor="password" className="ml-1 mb-2 font-bold">
              Password
            </Label>
            <Input
              id="password"
              name="password"
              placeholder="Enter your password..."
            />
          </div>
          <div className="mt-4 font-extrabold text-right text-sm">
            <Link href="forget">Forget password?</Link>
          </div>
          <div className="mt-4">
            <Button className="w-full">Submit</Button>
          </div>
        </form>
        <p>
          Don't have an account?{" "}
          <Link href={"register"} className="font-bold">
            Register now
          </Link>
        </p>
      </Card>
    </div>
  );
}

export default Login;
