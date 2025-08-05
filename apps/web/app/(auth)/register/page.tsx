import Logo from "@/components/base/Logo";
import { Button } from "@workspace/ui/components/button";
import { Card } from "@workspace/ui/components/card";
import { Input } from "@workspace/ui/components/input";
import { Label } from "@workspace/ui/components/label";
import Link from "next/link";

function Register() {
  return (
    <div className="justify-center flex items-center h-screen">
      <Card className="p-5 m-4 w-screen  md:w-xl">
        <Logo className="text-center" />
        <div>
          <h1 className="font-bold text-2xl">Register</h1>
          <p>welcome</p>
        </div>
        <form>
          <div className="mt-4">
            <Label htmlFor="name" className="ml-1 mb-2 font-bold">
              Name
            </Label>
            <Input id="name" name="name" placeholder="Enter your name..." />
          </div>
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
          <div className="mt-4">
            <Label htmlFor="confirmPasswrod" className="ml-1 mb-2 font-bold">
              Confirm password
            </Label>
            <Input
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm your password..."
            />
          </div>

          <div className="mt-4">
            <Button className="w-full">Register</Button>
          </div>
        </form>
        <p className="text-center">
          Already have an account?{" "}
          <Link href={"/login"} className="font-bold">
            Login now
          </Link>
        </p>
      </Card>
    </div>
  );
}

export default Register;
